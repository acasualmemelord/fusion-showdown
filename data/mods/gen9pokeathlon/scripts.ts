export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		const PoADex: {[k: string]: number} = {
			"soulply": 6001,
			"imitotion": 6002,
			"aviotion": 6003,
			"dracotion": 6004,
			"bunnor": 6005,
			"rabbicicle": 6006,
			"enchantobra": 6007,
			"eyespy": 6008,
			"icyall": 6009,
			"ironeverlasting": 6010,
			"golisopodshogun": 6011,
			"tinkatonrhinian": 6012,
			"regimyo": 6013,
			"jovianshk": 6014,
			"lunachi": 6015,
			"ockthane": 6016,
			"incineroarolulian": 6017,
			"raikousupra": 6018,
			"heatransupra": 6019,
			"mosster": 6020,
			"barrimander": 6021,
			"meditao": 6022,
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
