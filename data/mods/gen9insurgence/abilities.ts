const eeveelutions: {[k: string]: string} = {
	"Water": "vaporeon",
	"Fire": "flareon",
	"Grass": "leafeon",
	"Dark": "umbreon",
	"Fairy": "sylveon",
	"Psychic": "espeon",
	"Ice": "glaceon",
	"Electric": "jolteon",
	"Normal": "eeveemega",
};

const eeveeabilities: {[k: string]: string} = {
	"vaporeon": "waterabsorb",
	"flareon": "flashfire",
	"leafeon": "chlorophyll",
	"umbreon": "synchronize",
	"sylveon": "cutecharm",
	"espeon": "magicbounce",
	"glaceon": "snowcloak",
	"jolteon": "voltabsorb",
	"eeveemega": "proteanmaxima",
};

export const Abilities: {[k: string]: ModdedAbilityData} = {
	absolution: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.effectiveWeather() === 'newmoon') {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'newmoon') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		flags: {},
		name: "Absolution",
		desc: "If New Moon is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If New Moon is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
		rating: 2,
		num: 0,
	},
	amplifier: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.sound) {
				this.debug('Amplifier boost');
				return this.chainModify(1.25);
			}
		},
		flags: {},
		name: "Amplifier",
		shortDesc: "Sound-based moves are boosted by 1.25x.",
		rating: 3.5,
		num: 0,
	},
	ancientpresence: {
		onModifyMove(move, pokemon, target) {
			move.forceSTAB = true;
			if (target?.runImmunity(move.type)) {
				move.type = '???'
			}
		},
		flags: {},
		name: "Ancient Presence",
		shortDesc: "User's moves are STAB and become neutral.",
		rating: 2,
		num: 0,
	},
	athenian: {
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		flags: {},
		name: "Athenian",
		shortDesc: "Doubles the user's Special Attack stat.",
		rating: 5,
		num: 0,
	},
	blazeboost: {
		onModifyTypePriority: -5,
		onModifyType(move, pokemon, target) {
			if (move.category === 'Status' || move.type !== 'Fire') return;
			this.boost({spa: 1, atk: 1, spe: 1}, pokemon);
			if (pokemon.species.id === 'emolgadelta') {
				pokemon.formeChange('emolgadeltafired');
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.species.id !== 'emolgadeltafired') return;
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(1, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		flags: {},
		name: "Blaze Boost",
		shortDesc: "Fire moves boost user's stats. May burn on contact.",
		desc: "If a Fire-type move is selected, the user will receive a +1 attack, sp. attack, and speed boost. If user is Emolga-Delta, using a Fire-type move transforms it into Emolga-Delta-Fired and adds a 10% chance to burn opponents on contact.",
		rating: 4,
		num: 0,
	},
	chlorofury: {
		condition: {
			duration: 2,
			onStart(pokemon) {
				if (pokemon.side.totalFainted) {
					this.boost({spe: 1, spa: pokemon.side.totalFainted}, pokemon);
				}
			},
			onEnd(pokemon) {
				if (pokemon.side.totalFainted) {
					this.boost({spe: -1, spa: -pokemon.side.totalFainted}, pokemon);
				}
			},
		},
		flags: {},
		name: "Chlorofury",
		rating: 3.5,
		num: 0,
	},
	etherealshroud: {
		onImmunity(type, pokemon) {
			if (type === 'Normal' || type === 'Fighting') return false;
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Bug' || move.type === 'Poison') {
				this.debug('Ethereal Shroud weaken');
				return this.chainModify(0.5);
			}
		},
		flags: {breakable: 1},
		name: "Ethereal Shroud",
		shortDesc: "Grants the user Ghost-type immunities and resistances.",
		rating: 3,
		num: 0,
	},
	eventhorizon: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				source.addVolatile('trapped', target, move, 'trapper');
			}
		},
		flags: {},
		name: "Event Horizon",
		shortDesc: "Any Pokemon that makes contact with the user can't escape.",
		rating: 5,
		num: 0,
	},
	foundry: {
		//add fire type stealth rock
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Rock' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fire';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Foundry",
		rating: 4,
		num: 0,
	},
	heliophobia: {
		onWeather(target, source, effect) {
			if (effect.id === 'newmoon') {
				this.heal(target.baseMaxhp / 8);
			} else if ((effect.id === 'sunnyday' || effect.id === 'desolateland') && !target.hasItem('utilityumbrella')) {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		flags: {breakable: 1},
		name: "Heliophobia",
		rating: 3,
		num: 0,
	},
	hubris: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		flags: {},
		name: "Hubris",
		rating: 3,
		num: 0,
	},
	icecleats: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snow'])) {
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Ice Cleats",
		rating: 3,
		num: 0,
	},
	intoxicate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Poison';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Intoxicate",
		rating: 4,
		num: 0,
	},
	irrelephant: {
		onModifyMove(move, pokemon, target) {
			if (!target || !target.hp) return;
			const curType = target.getTypes();
			target.setType('???');
			move.ignoreImmunity = {};
			for (var type of this.dex.types.all()) {
				if (target.runImmunity(type.name)) {
					move.ignoreImmunity[type.name] = true;
				}
			}
			target.setType(curType);
		},
		flags: {},
		name: "Irrelephant",
		rating: 4,
		num: 0,
	},

	//lernean

	noctem: {
		onStart(source) {
			this.field.setWeather('newmoon');
		},
		flags: {},
		name: "Noctem",
		rating: 4,
		num: 0,
	},
	omnitype: {
		onStart(target) {
			this.add('-activate', target, 'ability: Omnitype');
		},
		onTryHit(source, target, move) {
			const allTypes = this.dex.deepClone(this.dex.types.all());
			source.setType(allTypes);
		},
		onFoeAfterMove(source, target, move) {
			target.setType(target.baseTypes);
		},
		flags: {breakable: 1, failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Omnitype",
		rating: 4,
		num: 0,
	},
	pendulum: {
		onStart(pokemon) {
			pokemon.addVolatile('item:metronome');
		},
		flags: {},
		name: "Pendulum",
		rating: 4,
		num: 0,
	},
	periodicorbit: {
		name: "Periodic Orbit",
		flags: {},
		rating: 4,
		num: 0,
	},
	phototroph: {
		onWeather(target, source, effect) {
			if ((effect.id === 'sunnyday' || effect.id === 'desolateland') && !target.hasItem('utilityumbrella')) {
				this.heal(target.baseMaxhp / 8);
			} else {
				this.heal(target.baseMaxhp / 16);
			}
		},
		flags: {},
		name: "Phototroph",
		rating: 1.5,
		num: 0,
	},
	prismguard: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		flags: {},
		name: "Prism Guard",
		rating: 2.5,
		num: 0,
	},
	proteanmaxima: {
		onSwitchIn(pokemon) {
			if (pokemon.species.id !== eeveelutions["Normal"] && pokemon.species.id in eeveeabilities) {
				pokemon.addVolatile('ability:' + eeveeabilities[pokemon.species.id]);
				this.add('-activate', pokemon, 'ability: ' + this.dex.abilities.get(eeveeabilities[pokemon.species.id]).name);
			}
		},
		onUpdate(pokemon) {
			const action = this.queue.willMove(pokemon);
			if (!action) return;
			const move = this.dex.getActiveMove(action.move.id);
			if (move.type in eeveelutions && pokemon.species.id !== eeveelutions[move.type]) {
				if (pokemon.species.id !== eeveelutions["Normal"]) {
					pokemon.removeVolatile('ability:' + eeveelutions[pokemon.species.types[0]][1])
				}
				pokemon.formeChange(eeveelutions[move.type], this.dex.abilities.get('Protean Maxima'), true);
				pokemon.addVolatile('ability:' + eeveeabilities[pokemon.species.id]);
				this.add('-activate', pokemon, 'ability: ' + this.dex.abilities.get(eeveeabilities[pokemon.species.id]).name);

				pokemon.baseMaxhp = Math.floor(Math.floor(
					2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
				) * pokemon.level / 100 + 10);
				const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
				pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
				pokemon.maxhp = newMaxHP;
				this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "Protean Maxima",
		rating: 4.5,
		num: 0,
	},
	psychocall: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Psychic' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Psycho Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Psychic' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Psycho Call boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Psycho Call",
		rating: 2,
		num: 0,
	},
	regurgitation: {
		onSourceDamagingHit(damage, target, source, move) {
			if (source === target || target.fainted || target.isSemiInvulnerable()) return;
			if (!source.species.name.includes('Muk-Delta')) return;
			let muktype = source.species.name.includes('Muk-Delta-') ? source.species.name.replace('Muk-Delta-', '') : 'Water';
			if (this.dex.getImmunity(muktype, target)) {
				this.damage((target.maxhp / 6) * (2 ** this.dex.getEffectiveness(muktype, target)), target, source);
			}
		},
		flags: {},
		name: "Regurgitation",
		rating: 3,
		num: 0,
	},
	shadowcall: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Shadow Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Shadow Call boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Shadow Call",
		rating: 2,
		num: 0,
	},
	shadowdance: {
		onModifySpe(spe, pokemon) {
			if (pokemon.effectiveWeather() === 'newmoon') {
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Shadow Dance",
		rating: 3,
		num: 0,
	},
	shadowsynergy: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Shadow Synergy boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Shadow Synergy boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Shadow Synergy",
		rating: 2,
		num: 0,
	},
	sleet: {
		onStart(source) {
			this.field.setWeather('hail');
		},
		flags: {},
		name: "Sleet",
		rating: 4,
		num: 0,
	},
	spectraljaws: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.bite) {
				return this.chainModify(1.3);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.flags.bite) {
				move.category = 'Special';
			}
		},
		flags: {},
		name: "Spectral Jaws",
		rating: 3,
		num: 0,
	},
	speedswap: {
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Speed Swap');
			this.field.addPseudoWeather('trickroom');
		},
		flags: {},
		name: "Speed Swap",
		shortDesc: "This Pokemon summons Trick Room on switch-in.",
		rating: 4.5,
		num: 0,
	},
	spiritcall: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Spirit Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ghost' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Spirit Call boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Spirit Call",
		rating: 2,
		num: 0,
	},
	supercell: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Typhlosion-Delta' || pokemon.transformed || !pokemon.isActive) return;
			if (['newmoon', 'raindance', 'primordialsea'].includes(pokemon.effectiveWeather()) && pokemon.species.id !== 'typhlosiondeltamegaactive') {
				pokemon.formeChange('typhlosiondeltamegaactive', this.effect, false, '[msg]');
			} else if (pokemon.species.id === 'typhlosiondeltamegaactive') {
				pokemon.formeChange('typhlosiondeltamega', this.effect, false, '[msg]');
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (['newmoon', 'raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Supercell",
		rating: 2,
		num: 0,
	},
	unleafed: {
		condition: {
			duration: 0,
			durationCallback(pokemon) {
				return pokemon.side.totalFainted + 1;
			},
			onStart(pokemon) {
				if (pokemon.side.totalFainted) {
					this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
				}
			},
			onEnd(pokemon) {
				if (pokemon.side.totalFainted) {
					this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
				}
			},
		},
		name: "Unleafed",
		rating: 2.5,
		num: 0,
	},
	vampiric: {
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (this.checkMoveMakesContact(move, pokemon, target, false)) {
				this.heal(pokemon.lastDamage / 4, pokemon);
			}
		},
		flags: {},
		name: "Vampiric",
		rating: 3.5,
		num: 0,
	},
	vaporization: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				this.add('-immune', target, '[from] ability: Vaporization');
				return null;
			}
		},
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of this.getAllActive()) {
				if (!target || !target.hp) continue;
				if (target.hasType('Water')) {
					this.damage(target.maxhp / 8, target, pokemon);
				}
			}
		},
		name: "Vaporization",
		shortDesc: "Vaporizes Water-type attacks and damages water types.",
		flags: {breakable: 1},
		rating: 3.5,
		num: 0,
	},
	venomous: {
		name: "Venomous",
		flags: {},
		rating: 4,
		num: 0,
	},
	windforce: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Wind Force');
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Wind Force",
		desc: "This Pokemon is immune to Flying-type moves and raises its Speed by 1 stage when hit by an Flying-type move.",
		shortDesc: "Raises Speed when hit by Flying-type move; Flying immunity.",
		rating: 3,
		num: 0,
	},
	winterjoy: {
		onBasePower(basePower, pokemon, target, move) {
			const curMonth = (new Date()).getMonth();
			if ([10, 11, 0, 1].includes(curMonth)) return this.chainModify([5734, 4096]);
			if ([4, 5, 6, 7].includes(curMonth)) return this.chainModify([2867, 4096]);
		},
		flags: {},
		name: "Winter Joy",
		rating: 3,
		num: 0,
	},
};