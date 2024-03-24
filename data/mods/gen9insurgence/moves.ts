export const Moves: {[k: string]: ModdedMoveData} = {
	// Modded
	wish: {
		inherit: true,
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
			},
			durationCallback(target, source, effect) {
				return target.hasAbility('periodicorbit') ? 4 : 2;
			},
			onResidual(target, source, effect) {
				if (target && !target.fainted && this.effectState.duration === 2)  {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
	},

	// Additions
	achillesheel: {
		num: 34,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Achilles' Heel",
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
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},

	//custom move

	darkmatter: {
		num: 0,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Dark Matter",
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
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1, powder: 1},
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
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	drakonvoice: {
		num: 0,
		accuracy: 100,
		basePower: 105,
		category: "Special",
		name: "Drakon Voice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	jetstream: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jet Stream",
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

	//livewire

	lunarcannon: {
		num: 0,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Lunar Cannon",
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
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1, powder: 1},
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

	//permafrost

	retrograde: {
		num: 0,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Retrograde",
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

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}
				if (target.getWeight() >= 2000) {
					this.add('-fail', target, 'move: Spirit Away', '[heavy]');
					return null;
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
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					this.debug('BP doubled on midair target');
					return this.chainModify(2);
				}
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
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
};
