export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen7',
	gen: 7,
	init () {
		for (const i in this.data.Pokedex) {
			if (this.data.Pokedex[i].num <= 10000) {
				this.data.Pokedex[i].num *= -1;
				this.data.Pokedex[i].isNonstandard = "Unobtainable";
			} else {
				this.data.Pokedex[i].num -= 10000;
				this.data.Pokedex[i].isNonstandard = null;
			}
		}
	},
};
