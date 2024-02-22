const treasures: {[k: string]: string} = {
	abilityshield: 'klutz',
	absorbbulb: 'waterabsorb',
	adrenalineorb: 'defiant',
	airballoon: 'windrider',
	amuletcoin: 'goodasgold',
	assaultvest: 'bulletproof',
	bigroot: 'sapsipper',
	bindingband: 'suctioncups',
	blackbelt: 'unseenfist',
	blackglasses: 'darkaura',
	blacksludge: 'liquidooze',
	blunderpolicy: 'hustle',
	brightpowder: 'dazzling',
	cellbattery: 'lightningrod',
	charcoal: 'drought',
	choiceband: 'toughclaws',
	choicescarf: 'bushido',
	choicespecs: 'tintedlens',
	clearamulet: 'unaware',
	covertcloak: 'magicguard',
	damprock: 'swiftswim',
	destinyknot: 'perishbody',
	dragonfang: 'dragonsmaw',
	ejectbutton: 'regenerator',
	ejectpack: 'clearbody',
	electricseed: 'electricsurge',
	eviolite: 'imposter',
	expertbelt: 'neuroforce',
	flameorb: 'flareboost',
	floatstone: 'levitate',
	focusband: 'stamina',
	focussash: 'angershell',
	grassyseed: 'grassysurge',
	gripclaw: 'persistent',
	heatrock: 'chlorophyll',
	heavydutyboots: 'mountaineer',
	icyrock: 'slushrush',
	ironball: 'slowlight',
	kingsrock: 'stench',
	laggingtail: 'stall',
	leftovers: 'harvest',
	lifeorb: 'sheerforce',
	lightclay: 'filter',
	loadeddice: 'superluck',
	luminousmoss: 'stormdrain',
	magnet: 'magnetpull',
	mail: 'consumerexchange',
	mentalherb: 'oblivious',
	metalcoat: 'filter',
	metronome: 'skilllink',
	miracleseed: 'overcoat',
	mirrorherb: 'opportunist',
	mistyseed: 'mistysurge',
	mysticwater: 'drizzle',
	nevermeltice: 'snowwarning',
	poisonbarb: 'poisontouch',
	powerherb: 'soulheart',
	protectivepads: 'rockhead',
	psychicseed: 'pyschicsurge',
	punchingglove: 'ironfist',
	quickclaw: 'quickdraw',
	razorclaw: 'sharpness',
	redcard: 'fairylaw',
	ringtarget: 'moldbreaker',
	rockyhelmet: 'ironbarbs',
	roomservice: 'inertia',
	safetygoggles: 'keeneye',
	scopelens: 'sniper',
	sharpbeak: 'galewings',
	shedshell: 'shedskin',
	shellbell: 'healer',
	silkscarf: 'adaptability',
	silverpowder: 'swarm',
	smoothrock: 'sandrush',
	softsand: 'sandstream',
	spelltag: 'cursedbody',
	stickybarb: 'fluffy',
	terrainextender: 'neutralizinggas',
	throatspray: 'punkrock',
	toxicorb: 'poisonheal',
	twistedspoon: 'analytic',
	utilityumbrella: 'cloudnine',
	weaknesspolicy: 'weakarmor',
	whiteherb: 'unburden',
	widelens: 'compoundeyes',
	wiseglasses: 'innerfocus',
	zoomlens: 'sniper',
};

export const Abilities: {[k: string]: ModdedAbilityData} = {
	consumerexchange: {
		onSourceDamagingHit(damage, target, source, move) {
			if (this.effectState.exchange) {
				const yourItem = target.takeItem(source);
				const myItem = source.takeItem();

				if (target.item || source.item || (!yourItem && !myItem)) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				if (
					(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
					(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
				) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				this.add('-activate', source, 'ability: Consumer Exchange', '[of] ' + target);
				if (myItem) {
					target.setItem(myItem);
					this.add('-item', target, myItem, '[from] ability: Consumer Exchange');
				} else {
					this.add('-enditem', target, yourItem, '[silent]', '[from] ability: Consumer Exchange');
				}
				if (yourItem) {
					source.setItem(yourItem);
					this.add('-item', source, yourItem, '[from] ability: Consumer Exchange');
				} else {
					this.add('-enditem', source, myItem, '[silent]', '[from] ability: Consumer Exchange');
				}

				this.effectState.exchange = false;
			}
		},
		onSwitchIn(pokemon) {
			this.effectState.exchange = true;
		},
		flags: {},
		name: "Consumer Exchange",
		desc: "The first successful attack used by this Pokémon every time it is sent out onto the field will cause it to switch items with its opponent. Fails if the move misses, has no effect, or if the target's item cannot be removed.",
		shortDesc: "First successful attack after switching in swaps items.",
		rating: 3,
		num: 0,
	},
	windywall: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				this.add('-immune', target, '[from] ability: Windy Wall');
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Windy Wall",
		shortDesc: "This Pokemon is immune to Flying-type moves.",
		rating: 3.5,
		num: 0,
	},
	fairylaw: {
		condition: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectState.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		flags: {},
		name: "Fairy Law",
		shortDesc: "The effect of Imprison begins when this Pokemon enters the field.",
		rating: 4,
		num: 0,
	},
	musclememory: {
		onBeforeSwitchOut(pokemon) {
			this.effectState.muscleStats = pokemon.boosts;
		},
		onStart(pokemon) {
			if (this.effectState.muscleStats) {
				this.add('-activate', pokemon, 'ability: Muscle Memory');
				this.boost(this.effectState.muscleStats, pokemon, pokemon);
			}
		},
		flags: {},
		name: "Muscle Memory",
		shortDesc: "This Pokemon's stat boosts remain after switching.",
		rating: 4,
		num: 0,
	},
	bushido: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (defender.newlySwitched || this.queue.willMove(defender)) {
				this.debug('Bushido damage boost');
				return this.chainModify(1.3);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (defender.newlySwitched || this.queue.willMove(defender)) {
				this.debug('Bushido damage boost');
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Bushido",
		shortDesc: "When this Pokemon moves first, its attacks have 1.3x power.",
		rating: 4,
		num: 0,
	},
	slowlight: {
		onStart(source) {
			this.field.addPseudoWeather('gravity');
		},
		flags: {},
		name: "Slow Light",
		shortDesc: "On Switch-in, this Pokemon summons Gravity; if Gravity is active its effects are removed.",
		rating: 4.5,
		num: 0,
	},
	sandydefense: {
		onModifySpD(spd, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.5);
			}
		},
		onModifyDef(def, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.5);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		flags: {breakable: 1},
		name: "Sandy Defense",
		shortDesc: "This Pokemon's Defense and Special Defense are boosted 1.5 in sandstorm.",
		rating: 3,
		num: 0,
	},
	inertia: {
		onAnyModifyPriority(priority, pokemon) {
			if (pokemon.activeMoveActions === 0) return priority - 1;
		},
		flags: {},
		name: "Inertia",
		shortDesc: "On every Pokemon's first turn, its moves have -1 priority. Includes user.",
		rating: 4.5,
		num: 0,
	},
	multishot: {
		onModifyMove(move, pokemon, target) {
			if (move.category !== "Special") return;
			move.multihit = [2, 5];
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.category === "Special") return this.chainModify([3, 10]);
		},
		flags: {},
		name: "Multishot",
		shortDesc: "This Pokemon's special moves become multihit with 0.3x power.",
		rating: 4.5,
		num: 0,
	},
	sacredtreasures: {
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== "Lunachi") return;
			const curItem = pokemon.getItem();
			if (curItem.id in treasures) {
				this.effectState.treasureAbility = this.dex.abilities.get(treasures[curItem.id]);
				if ('ability:' + this.effectState.treasureAbility.id in pokemon.volatiles) {
					return;
				} else {
					for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
						pokemon.removeVolatile(innate);
					}
					if (pokemon.species.id === 'lunachi') {
						pokemon.formeChange('lunachibestowed');
					}
					pokemon.addVolatile("ability:" + this.effectState.treasureAbility.id, pokemon);
					this.add('-ability', pokemon, this.effectState.treasureAbility, '[from] ability: Sacred Treasures', '[of] ' + pokemon);
				}
			} else {
				if (pokemon.species.id === 'lunachibestowed') {
					pokemon.formeChange('lunachi');
					for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
						pokemon.removeVolatile(innate);
					}
					this.add('-ability', pokemon, 'Sacred Treasures', '[from] ability: Sacred Treasures', '[of] ' + pokemon);
				}
			}
		},
		flags: {},
		name: "Sacred Treasures",
		shortDesc: "This Pokemon's ability depends on its item.",
		rating: 4.5,
		num: 0,
	},
};