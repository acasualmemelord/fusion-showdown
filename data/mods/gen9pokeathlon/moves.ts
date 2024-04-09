export const Moves: {[k: string]: ModdedMoveData} = {
	// Mods
	payday: {
		inherit: true,
		onHit(target, source, move) {
			source.side.addSideCondition(this.dex.conditions.get('scatteredcoins'));
		},
	},
	makeitrain: {
		inherit: true,
		onHit(target, source, move) {
			source.side.addSideCondition(this.dex.conditions.get('scatteredcoins'));
		},
	},
	gmaxgoldrush: {
		inherit: true,
		onHit(target, source, move) {
			source.side.addSideCondition(this.dex.conditions.get('scatteredcoins'));
		},
	},
	leechseed: {
		inherit: true,
		onTryImmunity(target) {
			return !target.hasType('Grass') && !target.hasAbility('Ivy Wall');
		},
	},
	gmaxsteelsurge: {
		inherit: true,
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('undeterred')) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
	},
	spikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('undeterred')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
	},
	stealthrock: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('undeterred')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
	},
	stickyweb: {
		inherit: true,
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('undeterred')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, pokemon.side.foe.active[0], this.dex.getActiveMove('stickyweb'));
			},
		},
	},
	toxicspikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('undeterred')) {
					return;
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
	},

	// Additions
	boxin: {
		num: 0,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Box In",
		desc: "Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Prevents both user and target from switching out.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1},
		onHit(target, source, move) {
			source.addVolatile('trapped', target, move, 'trapper');
			target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	runtimeexception: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Runtime Exception",
		desc: "The user randomly uses Flare Blitz, Iron Head, Psychic, or Wild Charge.",
		shortDesc: "Randomly executes one of 4 powerful moves.",
		pp: 10,
		priority: 0,
		flags: {failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failmimic: 1, failinstruct: 1},
		onHit(target, source, effect) {
			const moves = ['flareblitz', 'ironhead', 'psychic', 'wildcharge'];
			const randomMove = this.sample(moves);
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Steel",
		contestType: "Cute",
	},
	fibregraft: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fibre Graft",
		desc: "The user faints, and the Pokemon brought out receives the Fighting type, a +1 atk boost, and the effect of Focus Energy. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect.",
		shortDesc: "User faints. Switch-in has boost + Fighting type.",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onTryHit(source) {
			if (!this.canSwitch(source.side)) {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return this.NOT_FAIL;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'fibregraft',
		condition: {
			onSwap(target) {
				if (!target.fainted) {
					this.boost({atk: 1}, target, null, this.effect);
					target.addVolatile('focusenergy');
					target.addType('Fighting');
					this.add('-start', target, 'typeadd', 'Fighting', '[from] move: Fibre Graft');
					target.side.removeSlotCondition(target, 'fibregraft');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		contestType: "Beautiful",
	},
	bloomsday: {
		num: 0,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower * pokemon.hp / pokemon.maxhp;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Bloom's Day",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s).",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Beautiful",
	},
	deserttempest: {
		num: 0,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Desert Tempest",
		shortDesc: "Summons Sandstorm. 1.2x damage if user is holding a Smooth Rock.",
		pp: 15,
		priority: 0,
		onBasePower(basePower, pokemon, target) {
			if (pokemon.item === "smoothrock") {
				return this.chainModify(1.2);
			}
		},
		onHit(source) {
			this.field.setWeather('sandstorm');
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	subzerostorm: {
		num: 0,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Subzero Storm",
		shortDesc: "Summons Hail. 1.2x damage if user is holding an Icy Rock.",
		pp: 15,
		priority: 0,
		onBasePower(basePower, pokemon, target) {
			if (pokemon.item === "icyrock") {
				return this.chainModify(1.2);
			}
		},
		onHit(source) {
			this.field.setWeather('snow');
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	fierymaelstrom: {
		num: 0,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Fiery Maelstrom",
		shortDesc: "Summons Sun. 1.2x damage if user is holding a Heat Rock.",
		pp: 15,
		priority: 0,
		onBasePower(basePower, pokemon, target) {
			if (pokemon.item === "heatrock") {
				return this.chainModify(1.2);
			}
		},
		onHit(source) {
			this.field.setWeather('sunnyday');
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	bulwark: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulwark",
		shortDesc: "Sets the effects of Light Screen and Reflect.",
		pp: 5,
		priority: -1,
		flags: {protect: 1, mirror: 1},
		onHit(source) {
			source.side.addSideCondition('reflect');
			source.side.addSideCondition('lightscreen');
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Clever",
	},
	pixietrick: {
		num: 0,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Pixie Trick",
		shortDesc: "0.5x damage if foe isn't holding an item. Swaps items.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, failmefirst: 1, noassist: 1, failcopycat: 1},
		onBasePower(basePower, pokemon, target, move) {
			if (!target.getItem().exists) return this.chainModify([1, 2]);
		},
		onAfterHit(target, source, move) {
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
			this.add('-activate', source, 'move: Pixie Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Pixie Trick');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Pixie Trick');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Pixie Trick');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Pixie Trick');
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	mudslide: {
		num: 0,
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		name: "Mudslide",
		desc: "Has a 50% chance to lower the target's Speed by 1 stage.",
		shortDesc: "50% chance to lower the target's Speed by 1.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 50,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Tough",
	},
	packin: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pack In",
		desc: "The user restores 1/2 of its maximum HP, rounded half up. Defense is boosted by +1 if Hail or Snow is active.",
		shortDesc: "User heals 50% of its max HP. +1 Def in Hail/Snow.",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1, metronome: 1},
		heal: [1, 2],
		onAfterMove(source, target, move) {
			if (this.field.isWeather(['hail', 'snow'])) {
				this.boost({def: 1}, source, source);
			}
		},
		secondary: null,
		target: "self",
		type: "Ice",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	heal: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal",
		shortDesc: "Heals the target by 20HP.",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, distance: 1, heal: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			let success = false;
			success = !!this.heal(20);
			if (!success) {
				this.add('-fail', target, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	hyperheal: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hyper Heal",
		shortDesc: "Heals the target by 200HP.",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, distance: 1, heal: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			let success = false;
			success = !!this.heal(200);
			if (!success) {
				this.add('-fail', target, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	fullheal: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Full Heal",
		shortDesc: "Heals the target to full HP.",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, distance: 1, heal: 1, allyanim: 1, metronome: 1},
		onHit(target, source) {
			let success = false;
			success = !!this.heal(target.maxhp);
			if (!success) {
				this.add('-fail', target, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	foulstrike: {
		num: 0,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Foul Strike",
		shortDesc: "Ignores screens and substitutes.",
		pp: 10,
		priority: 0,
		infiltrates: true,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	sirensong: {
		num: 0,
		accuracy: 80,
		basePower: 120,
		category: "Special",
		name: "Siren Song",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fairy', type);
		},
		secondary: null,
		shortDesc: "This move combines Fairy in its type effectiveness against the target. Hits adjacent foes.",
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	mindwipe: {
		num: 0,
		accuracy: 95,
		basePower: 90,
		category: "Special",
		name: "Mindwipe",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	twingust: {
		num: 0,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twin Gust",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokemon and its ally once each. If hitting one of these Pokemon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokemon twice instead. If this move is redirected, it hits that target twice.",
		shortDesc: "Hits twice. Doubles: Tries to hit each foe once.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, noparentalbond: 1},
		multihit: 2,
		smartTarget: true,
		secondary: null,
		target: "normal",
		type: "Flying",
	},
	currencyflow: {
		num: 0,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Currency Flow",
		shortDesc: "1.5x damage if coins are scattered.",
		pp: 10,
		priority: 0,
		onBasePower(basePower, pokemon, target) {
			if (pokemon.side.getSideCondition('scatteredcoins')) {
				this.add('-activate', pokemon, 'move: Currency Flow');
				return this.chainModify(1.5);
			}
		},
		onAfterHit(source, target, move) {
			target.side.removeSideCondition('scatteredcoins');
		},
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Beautiful",
	},
	rocketgrab: {
		num: 0,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Rocket Grab",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Switch is cancelled if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn. Can't be used twice in a row.",
		shortDesc: "If a foe is switching out, cancels it.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('rocketgrab', pokemon);
				const data = side.getSideConditionData('rocketgrab');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('pursuit');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp || pokemon.hasType('Ghost')) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Rocket Grab');
						pokemon.addVolatile('preventswitch');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.actions.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('rocketgrab', source, source.getLocOf(pokemon));
				}
			},
			onSwitchOut(pokemon) {
				if (pokemon.getVolatile('preventswitch')) {
					pokemon.removeVolatile('preventswitch');
					return false;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
};
