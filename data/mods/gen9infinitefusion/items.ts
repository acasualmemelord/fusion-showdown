export const Items: {[k: string]: ModdedItemData} = {

	// IF Additions
	mankeyspaw: {
		name: "Mankey\u2019s Paw",
		desc: "Critical hit ratio is raised by 3 stages, accuracy of moves is halved.",
		spritenum: 261,
		fling: {
			basePower: 10,
		},
		onSourceAccuracy(accuracy, target, source, move) {
			if (source.ability === 'noguard') return 50;
			return this.chainModify(0.5);
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 3;
		},
		num: -3,
		gen: 6,
	},

	// IF mods
	deepseascale: {
		inherit: true,
		isNonstandard: null,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl' || pokemon.fusion === 'Clamperl') {
				return this.chainModify(2);
			}
		},
	},
	deepseatooth: {
		inherit: true,
		isNonstandard: null,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl' || pokemon.fusion === 'Clamperl') {
				return this.chainModify(2);
			}
		},
	},
	eviolite: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe || this.dex.species.get(pokemon.fusion).nfe || pokemon.baseSpecies.id === 'dipplin') {
				return this.chainModify(1.5);
			}
		},
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe || this.dex.species.get(pokemon.fusion).nfe || pokemon.baseSpecies.id === 'dipplin') {
				return this.chainModify(1.5);
			}
		},
	},
	leek: {
		inherit: true,
		isNonstandard: null,
		onModifyCritRatio(critRatio, user) {
			if (["farfetchd", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies)) ||
				["farfetchd", "sirfetchd", "farfetchdgalar"].includes(this.toID(user.fusion))) {
				return critRatio + 2;
			}
		},
	},
	lightball: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu' || Dex.species.get(pokemon.fusion).baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu' || Dex.species.get(pokemon.fusion).baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
	},
	luckypunch: {
		inherit: true,
		isNonstandard: null,
		onModifyCritRatio(critRatio, user) {
			if (user.baseSpecies.name === 'Chansey' || user.fusion === 'Chansey') {
				return critRatio + 2;
			}
		},
	},
	metalpowder: {
		inherit: true,
		isNonstandard: null,
		onModifyDef(def, pokemon) {
			if ((pokemon.species.name === 'Ditto' || pokemon.fusion === 'Ditto') && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
	},
	quickpowder: {
		inherit: true,
		isNonstandard: null,
		onModifySpe(spe, pokemon) {
			if ((pokemon.species.name === 'Ditto' || pokemon.fusion === 'Ditto') && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
	},
	thickclub: {
		inherit: true,
		isNonstandard: null,
		onModifyAtk(atk, pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies === 'Cubone' ||
				pokemon.baseSpecies.baseSpecies === 'Marowak' ||
				Dex.species.get(pokemon.fusion).baseSpecies === 'Cubone' ||
				Dex.species.get(pokemon.fusion).baseSpecies === 'Marowak'
			) {
				return this.chainModify(2);
			}
		},
	},
};
