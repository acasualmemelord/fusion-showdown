export const Moves: {[k: string]: ModdedMoveData} = {
	// Modded
	trickroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				let modifiedDuration = 5;
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Trick Room');
					modifiedDuration += 2;
				}
				if (source?.hasItem('trickrock')) {
					modifiedDuration += 3;
				}
				return modifiedDuration;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source, '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
	},
	wish: {
		inherit: true,
		condition: {},
		onTry(source) {
			if (source.hasAbility('periodicorbit')) {
				return !!source.side.addSlotCondition(source, 'orbitalwish');
			}
		},
	},
	futuresight: {
		inherit: true,
		onTry(source, target) {
			const futureMoveData = {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {allyanim: 1, metronome: 1, futuremove: 1},
					ignoreImmunity: false,
					effectType: 'Move',
					type: 'Psychic',
				},
			};
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], futureMoveData);
			if (source.hasAbility('periodicorbit')) {
				if (!target.side.addSlotCondition(target, 'orbitalfuturemove')) return false;
				Object.assign(target.side.slotConditions[target.position]['orbitalfuturemove'],{...futureMoveData, duration: 5});
			}
			this.add('-start', source, 'move: Future Sight');
			return this.NOT_FAIL;
		},
	},
	doomdesire: {
		inherit: true,
		onTry(source, target) {
			const futureMoveData = {
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 100,
					basePower: 140,
					category: "Special",
					priority: 0,
					flags: {metronome: 1, futuremove: 1},
					effectType: 'Move',
					type: 'Steel',
				},
			};
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], futureMoveData);
			if (source.hasAbility('periodicorbit')) {
				if (!target.side.addSlotCondition(target, 'orbitalfuturemove')) return false;
				Object.assign(target.side.slotConditions[target.position]['orbitalfuturemove'],{...futureMoveData, duration: 5});
			}
			this.add('-start', source, 'Doom Desire');
			return this.NOT_FAIL;
		},
	},
	phantomforce: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (attacker.effectiveWeather() === 'newmoon') {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability: false,
		},
	},
	shadowforce: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (attacker.effectiveWeather() === 'newmoon') {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability: false,
		},
	},
	weatherball: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
			case 'snow':
				move.type = 'Ice';
				break;
			case 'newmoon':
				move.type = 'Dark';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
			case 'snow':
				move.basePower *= 2;
				break;
			case 'newmoon':
				move.basePower *= 2;
				break;
			}
			this.debug('BP: ' + move.basePower);
		},
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'newmoon':
				factor = 0.333;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'newmoon':
				factor = 0.333;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'newmoon':
				factor = 0.667;
				break;
			case 'sunnyday':
			case 'desolateland':
				factor = 0.333;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	solarbeam: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			} else if (pokemon.effectiveWeather() === 'newmoon') return this.chainModify(0.3);
		},
	},
	surf: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			if (pokemon.effectiveWeather() === 'newmoon') return this.chainModify(1.5);
		},
	},
	honeclaws: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.effectiveWeather() === 'newmoon') move.boosts = {atk: 2, accuracy: 2};
		},
	},
	geomancy: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.effectiveWeather() === 'newmoon') move.boosts = {spa: 1, spd: 1, spe: 1};
		},
	},
	nightmare: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 11,
			onResidual(pokemon) {
				if (pokemon.effectiveWeather() === 'newmoon') this.damage(pokemon.baseMaxhp / 2);
				else this.damage(pokemon.baseMaxhp / 4);
			},
		},
	},
	flash: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.effectiveWeather() === 'newmoon') move.boosts = {accuracy: -2};
		},
	},
	reflect: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (this.field.isWeather('newmoon')) {
							if (this.activePerHalf > 1) return this.chainModify([8, 15]);
							return this.chainModify(0.4);
						} else {
							if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
							return this.chainModify(0.5);
						}
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Reflect');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'Reflect');
			},
		},
	},
	lightscreen: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (this.field.isWeather('newmoon')) {
							if (this.activePerHalf > 1) return this.chainModify([8, 15]);
							return this.chainModify(0.4);
						} else {
							if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
							return this.chainModify(0.5);
						}
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Light Screen');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 2,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Light Screen');
			},
		},
	},
	defog: {
		inherit: true,
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
	},
	mortalspin: {
		inherit: true,
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
	},
	rapidspin: {
		inherit: true,
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
	},
	tidyup: {
		inherit: true,
		onHit(pokemon) {
			let success = false;
			for (const active of this.getAllActive()) {
				if (active.removeVolatile('substitute')) success = true;
			}
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'hotcoals', 'stickyweb', 'permafrost', 'livewire', 'gmaxsteelsurge'];
			const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
			for (const side of sides) {
				for (const sideCondition of removeAll) {
					if (side.removeSideCondition(sideCondition)) {
						this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
						success = true;
					}
				}
			}
			if (success) this.add('-activate', pokemon, 'move: Tidy Up');
			return !!this.boost({atk: 1, spe: 1}, pokemon, pokemon, null, false, true) || success;
		},
	},
	courtchange: {
		inherit: true,
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'hotcoals', 'permafrost', 'livewire', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
			];
			let success = false;
			if (this.gameType === "freeforall") {
				// random integer from 1-3 inclusive
				const offset = this.random(3) + 1;
				// the list of all sides in counterclockwise order
				const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
				const temp: {[k: number]: typeof source.side.sideConditions} = {0: {}, 1: {}, 2: {}, 3: {}};
				for (const side of sides) {
					for (const id in side.sideConditions) {
						if (!sideConditions.includes(id)) continue;
						temp[side.n][id] = side.sideConditions[id];
						delete side.sideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						this.add('-sideend', side, effectName, '[silent]');
						success = true;
					}
				}
				for (let i = 0; i < 4; i++) {
					const sourceSideConditions = temp[sides[i].n];
					const targetSide = sides[(i + offset) % 4]; // the next side in rotation
					for (const id in sourceSideConditions) {
						targetSide.sideConditions[id] = sourceSideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						let layers = sourceSideConditions[id].layers || 1;
						for (; layers > 0; layers--) this.add('-sidestart', targetSide, effectName, '[silent]');
					}
				}
			} else {
				const sourceSideConditions = source.side.sideConditions;
				const targetSideConditions = source.side.foe.sideConditions;
				const sourceTemp: typeof sourceSideConditions = {};
				const targetTemp: typeof targetSideConditions = {};
				for (const id in sourceSideConditions) {
					if (!sideConditions.includes(id)) continue;
					sourceTemp[id] = sourceSideConditions[id];
					delete sourceSideConditions[id];
					success = true;
				}
				for (const id in targetSideConditions) {
					if (!sideConditions.includes(id)) continue;
					targetTemp[id] = targetSideConditions[id];
					delete targetSideConditions[id];
					success = true;
				}
				for (const id in sourceTemp) {
					targetSideConditions[id] = sourceTemp[id];
				}
				for (const id in targetTemp) {
					sourceSideConditions[id] = targetTemp[id];
				}
				this.add('-swapsideconditions');
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
	},
	relicsong: {
		inherit: true,
		onHit(target, pokemon, move) {
			if (['Meloetta', 'Meloetta-Delta'].includes(pokemon.baseSpecies.baseSpecies) && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				let meloettaForme = '';
				if (pokemon.baseSpecies.baseSpecies === 'Meloetta') {
					meloettaForme = pokemon.species.id === 'meloettapirouette' ? '' : '-Pirouette';
				} if (pokemon.baseSpecies.baseSpecies === 'Meloetta-Delta') {
					meloettaForme = pokemon.species.id === 'meloettadeltamagician' ? '-Delta' : '-Delta-Magician';
				}
				pokemon.formeChange('Meloetta' + meloettaForme, this.effect, false, '[msg]');
			}
		},
	},

	// Additions
	achillesheel: {
		num: 34,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Achilles' Heel",
		shortDesc: "Always super effective.",
		desc: "Always deals super effective damage, except against types that would normally be immune to it.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			return 1;
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	ancientroar: {
		num: 0,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Ancient Roar",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Cool",
	},
	corrode: {
		num: 0,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Corrode",
		desc: "This move's type effectiveness against Steel is changed to be super effective no matter what this move's type is.",
		shortDesc: "Super effective on Steel.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		ignoreImmunity: {'Poison': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	crystalrush: {
		num: 0,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Crystal Rush",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Crystal",
		contestType: "Beautiful",
	},

	//custom move

	darkmatter: {
		num: 0,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Dark Matter",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1, metronome: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	dragonify: {
		num: 0,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Dragonify",
		desc: "Causes the target to become a Dragon type. Fails if the target is an Arceus, or if the target is already purely Dragon type.",
		shortDesc: "Changes the target's type to Dragon.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Dragon' || !target.setType('Dragon')) return false;
			this.add('-start', target, 'typechange', 'Dragon');
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	dracojet: {
		num: 0,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Draco Jet",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	drakonvoice: {
		num: 0,
		accuracy: 85,
		basePower: 105,
		category: "Special",
		name: "Drakon Voice",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	hotcoals: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hot Coals",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'hotcoals',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Hot Coals');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('hotcoals')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Fire",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	jetstream: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jet Stream",
		desc: "For 2 turns, the user and its party members have their Priority increased by 1. Fails if this move is already in effect for the user's side.",
		shortDesc: "For 2 turns, allies' get +1 Priority.",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, metronome: 1, wind: 1},
		sideCondition: 'jetstream',
		condition: {
			duration: 2,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Jet Stream');
					return 4;
				}
				return 2;
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'move: Jet Stream', '[persistent]');
				} else {
					this.add('-sidestart', side, 'move: Jet Stream');
				}
			},
			onModifyPriority(priority, source, target, move) {
				return priority + 1;
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Jet Stream');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Dragon",
		zMove: {effect: 'crit2'},
		contestType: "Cool",
	},
	livewire: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Livewire",
		desc: "Sets up a hazard on the opposing side of the field, with a chance to paralyze each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to five times before failing. Chance of paralysis is X/5 where X is the number of layers, chance is doubled in rain. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, is hit by Defog, or a grounded Electric or Ground type Pokemon switches in. Safeguard prevents the opposing party from being paralyzed on switch-in, but a substitute does not.",
		shortDesc: "Can paralyze grounded foes on switch-in. Max 5 layers.",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'livewire',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Livewire');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 5) return false;
				this.add('-sidestart', side, 'move: Livewire');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Ground') || pokemon.hasType('Electric')) {
					this.add('-sideend', pokemon.side, 'move: Livewire', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('livewire');
				} else if (pokemon.hasItem('heavydutyboots')) {
					return;
				} else {
					if (this.randomChance(this.effectState.layers * (this.field.isWeather(['raindance', 'primordialsea']) ? 4 : 2), 10)) {
						pokemon.trySetStatus('par', pokemon.side.foe.active[0]);
					}
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Electric",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	lunarcannon: {
		num: 0,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Lunar Cannon",
		desc: "This attack charges on the first turn and executes on the second. If the user is holding a Power Herb or the weather is New Moon, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in new moon.",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (attacker.effectiveWeather() === 'newmoon') {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	medusaray: {
		num: 0,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Medusa Ray",
		desc: "Causes the target to become a Rock type. Fails if the target is an Arceus, or if the target is already purely Rock type.",
		shortDesc: "Changes the target's type to Rock.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Rock' || !target.setType('Rock')) return false;
			this.add('-start', target, 'typechange', 'Rock');
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},

	//morph

	nanorepair: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nanorepair",
		desc: "The user restores 1/2 of its maximum HP, rounded half up. Defense is boosted by +1.",
		shortDesc: "User heals 50% of its max HP; gets +1 Def.",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1, metronome: 1},
		heal: [1, 2],
		boosts: {def: 1},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	newmoon: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "New Moon",
		desc: "For 5 turns, the weather becomes New Moon. The damage of Ghost/Dark-type attacks is multiplied by 1.35 and the damage of Fairy-type attacks is multiplied by 0.75 during the effect. Lasts for 8 turns if the user is holding Dark Rock. Fails if the current weather is New Moon.",
		shortDesc: "For 5 turns, darkness powers Ghost/Dark moves.",
		pp: 5,
		priority: 0,
		flags: {metronome: 1},
		weather: 'newmoon',
		secondary: null,
		target: "all",
		type: "Dark",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	permafrost: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Permafrost",
		desc: "Sets up a hazard on the opposing side of the field, with a chance to freeze each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to five times before failing. Chance of freeze is X/10 where X is the number of layers, chance is doubled in hail/snow. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, is hit by Defog, or a grounded Ice or Fire type Pokemon switches in. Safeguard prevents the opposing party from being frozen on switch-in, but a substitute does not.",
		shortDesc: "Can freeze grounded foes on switch-in. Max 5 layers.",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, metronome: 1, mustpressure: 1},
		sideCondition: 'permafrost',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Permafrost');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 5) return false;
				this.add('-sidestart', side, 'move: Permafrost');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Ice') || pokemon.hasType('Fire')) {
					this.add('-sideend', pokemon.side, 'move: Permafrost', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('permafrost');
				} else if (pokemon.hasItem('heavydutyboots')) {
					return;
				} else {
					if (this.randomChance(this.effectState.layers * (this.field.isWeather(['hail', 'snow']) ? 2 : 1), 10)) {
						pokemon.trySetStatus('frz', pokemon.side.foe.active[0]);
					}
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ice",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	retrograde: {
		num: 0,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Retrograde",
		shortDesc: "Reverts Mega Evolved Pokémon back to their base form.",
		pp: 30,
		priority: 0,
		flags: {},
		onHit(target, pokemon) {
			if (target.species.isMega) target.formeChange(target.baseSpecies.baseSpecies, this.effect, true);
		},
		secondary: null,
		target: "any",
		type: "Normal",
	},
	spiritaway: {
		num: 0,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Spirit Away",
		desc: "This attack takes the target into the air with the user on the first turn and executes on the second. The user and the target cannot make a move between turns, but the target can select a move to use. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop.",
		shortDesc: "User and foe fly up turn 1. Damages on turn 2.",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1,
			metronome: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				delete move.flags['contact'];
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Spirit Away', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Spirit Away');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				return false;
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Spirit Away', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Fairy",
		contestType: "Tough",
	},
	wildfire: {
		num: 0,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Wildfire",
		desc: "Burns the foe. If it is a Grass-type Pokemon, burns all Pokemon in their party weak to fire.",
		shortDesc: "Burns the target & possibly target's team.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		onHit(target, source, move) {
			if (target.hasType("Grass")) {
				for (var enemy of target.side.pokemon) {
					if (enemy !== target && enemy.runEffectiveness(move) > 0) {
						source.trySetStatus('brn', enemy, move);
					}
				}
			}
		},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	wormhole: {
		num: 0,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Wormhole",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	zombiestrike: {
		num: 0,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Zombie Strike",
		shortDesc: "No additional effect.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
};
