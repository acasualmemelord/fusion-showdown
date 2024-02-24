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
			"golisopodshogun": 768,
			"tinkatonrhinian": 959,
			"regimyo": 6013,
			"jovianshk": 6014,
			"lunachi": 6015,
			"ockthane": 6016,
			"incineroarolulian": 727,
			"raikousupra": 243,
			"heatransupra": 485,
			"mosster": 6020,
			"barrimander": 6021,
			"meditao": 6022,
			"electrodemega": 101,
			"florgesmega": 671,
			"bewitwing": 6025,
			"eidolburgh": 6026,
			"snorlaxfrost": 143,
			"heracrosssubarctic": 214,
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
		for (const i in this.data.Moves) {
			if (this.data.Moves[i].isNonstandard === 'Past') {
				delete this.data.Moves[i].isNonstandard;
			}
		}
	},
};
