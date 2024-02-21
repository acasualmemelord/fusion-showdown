export const Moves: {[k: string]: ModdedMoveData} = {
	runtimeexception: {
		num: 0,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Runtime Exception",
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
					target.addType('Fighting');
					this.add('-start', target, 'typeadd', 'Fighting', '[from] move: Fibre Graft');
					target.addVolatile('focusenergy');
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
};
