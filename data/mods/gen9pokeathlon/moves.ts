export const Moves: {[k: string]: ModdedMoveData} = {
	// Mods
	leechseed: {
		inherit: true,
		onTryImmunity(target) {
			return !target.hasType('Grass') || !target.hasAbility('Ivy Wall');
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
		shortDesc: "Summons sandstorm. 1.2x damage if user is holding a Smooth Rock.",
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
		desc: "The user restores 1/2 of its maximum HP, rounded half up. Defense is boost by +1 if Hail or Snow is active.",
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
};
