export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		const PoADex: {[k: string]: number} = {
			"soulply": 1,
			"imitotion": 2,
			"aviotion": 3,
			"dracotion": 4,
			"bunnor": 5,
			"rabbicicle": 6,
			"enchantobra": 7,
			"eyespy": 8,
			"icyall": 9,
			"ironeverlasting": 10,
			"golisopodshogun": 11,
			"tinkatonrhinian": 12,
			"regimyo": 13,
			"jovianshk": 14,
			"lunachi": 15,
			"ockthane": 16,
			"incineroarolulian": 17,
			"raikousupra": 18,
			"heatransupra": 19,
			"mosster": 20,
			"barrimander": 21,
			"meditao": 22,
		};
		for (const i in this.data.Pokedex) {
			if (i in PoADex) {
				this.data.Pokedex[i].num = PoADex[i];
				this.data.Pokedex[i].isNonstandard = null;
			} else {
				this.data.Pokedex[i].num = 0;
				this.data.Pokedex[i].isNonstandard = "Unobtainable";
			}
		}
	},
};
