export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	// Resubmissions
	soulply: {
		num: 6001,
		name: "Soulply",
		types: ["Ghost"],
		baseStats: {hp: 110, atk: 90, def: 90, spa: 20, spd: 119, spe: 33},
		abilities: {0: "Sticky Hold", 1: "Weak Armor", H: "Consumer Exchange"},
		heightm: 0.6,
		weightkg: 4,
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	imitotion: {
		num: 6002,
		name: "Imitotion",
		types: ["Bug"],
		baseStats: {hp: 70, atk: 50, def: 25, spa: 50, spd: 25, spe: 80},
		abilities: {0: "Swarm", H: "Rattled"},
		heightm: 1.85,
		weightkg: 95,
		color: "Purple",
		evoLevel: 45,
		evos: ["Aviotion"],
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	aviotion: {
		num: 6003,
		name: "Aviotion",
		types: ["Bug"],
		baseStats: {hp: 90, atk: 70, def: 45, spa: 70, spd: 45, spe: 100},
		abilities: {0: "Swarm", H: "Intimidate"},
		heightm: 1.85,
		weightkg: 95,
		color: "Purple",
		evoLevel: 55,
		prevo: "Imitotion",
		evos: ["Dracotion"],
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "NFE",
		natDexTier: "NFE",
		doublesTier: "NFE",
	},
	dracotion: {
		num: 6004,
		name: "Dracotion",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 120, atk: 100, def: 75, spa: 100, spd: 75, spe: 130},
		abilities: {0: "Windy Wall", H: "Intimidate"},
		heightm: 1.85,
		weightkg: 95,
		color: "Purple",
		prevo: "Aviotion",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	bunnor: {
		num: 6005,
		name: "Bunnor",
		types: ["Normal", "Ice"],
		baseStats: {hp: 30, atk: 75, def: 25, spa: 45, spd: 35, spe: 40},
		abilities: {0: "Snow Cloak", 1: "Ice Body", H: "Fluffy"},
		heightm: 0.4,
		weightkg: 2,
		color: "White",
		evos: ["Rabbicicle"],
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	rabbicicle: {
		num: 6006,
		name: "Rabbicicle",
		types: ["Normal", "Ice"],
		baseStats: {hp: 90, atk: 105, def: 65, spa: 65, spd: 75, spe: 100},
		abilities: {0: "Snow Cloak", 1: "Ice Body", H: "Fluffy"},
		heightm: 0.8,
		weightkg: 10,
		color: "White",
		prevo: "Bunnor",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	enchantobra: {
		num: 6007,
		name: "Enchantobra",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 117, atk: 40, def: 60, spa: 117, spd: 60, spe: 116},
		abilities: {0: "Cute Charm", 1: "Flame Body", H: "Magic Guard"},
		heightm: 1.3,
		weightkg: 31.5,
		color: "Red",
		tags: ["Pokeathlon"],
		eggGroups: ["Human-Like"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	eyespy: {
		num: 6008,
		name: "Eyespy",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 40, atk: 20, def: 20, spa: 40, spd: 20, spe: 40},
		abilities: {0: "Keen Eye", H: "Levitate"},
		heightm: 0.5,
		weightkg: 5,
		evos: ["Icyall"],
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	icyall: {
		num: 6009,
		name: "Icyall",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 100, atk: 80, def: 60, spa: 140, spd: 60, spe: 80},
		abilities: {0: "Multishot", H: "Compound Eyes"},
		heightm: 2,
		weightkg: 52,
		prevo: "Eyespy",
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	ironeverlasting: {
		num: 6010,
		name: "Iron Everlasting",
		types: ["Normal", "Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 114, def: 80, spa: 76, spd: 80, spe: 130},
		abilities: {0: "Quark Drive"},
		heightm: 0.9,
		weightkg: 68,
		color: "Gray",
		tags: ["Paradox", "Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "RU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	squice: {
		num: 6011,
		name: "Squice",
		types: ["Water", "Ice"],
		baseStats: {hp: 65, atk: 30, def: 30, spa: 60, spd: 60, spe: 60},
		abilities: {0: "Water Veil"},
		heightm: 0.5,
		weightkg: 7,
		color: "Blue",
		evos: ["Toxice"],
		tags: ["Pokeathlon"],
		eggGroups: ["Field"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	toxice: {
		num: 6012,
		name: "Toxice",
		types: ["Poison", "Ice"],
		baseStats: {hp: 92, atk: 92, def: 66, spa: 93, spd: 69, spe: 73},
		abilities: {0: "Levitate", 1: "Flash Fire", H: "Cloud Nine"},
		heightm: 1,
		weightkg: 22,
		color: "Purple",
		prevo: "Squice",
		tags: ["Pokeathlon"],
		eggGroups: ["Field"],
		tier: "RU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	golisopodshogun: {
		num: 768,
		name: "Golisopod-Shogun",
		baseSpecies: "Golisopod",
		forme: "Shogun",
		types: ["Bug", "Steel"],
		baseStats: {hp: 75, atk: 125, def: 140, spa: 60, spd: 90, spe: 40},
		abilities: {0: "Bushido", H: "Sharpness"},
		heightm: 2,
		weightkg: 108,
		color: "Gray",
		evoLevel: 30,
		tags: ["Pokeathlon"],
		eggGroups: ["Bug", "Water 3"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	tinkatonrhinian: {
		num: 959,
		name: "Tinkaton-Rhinian",
		baseSpecies: "Tinkaton",
		forme: "Rhinian",
		types: ["Fairy", "Normal"],
		gender: "F",
		baseStats: {hp: 85, atk: 70, def: 77, spa: 65, spd: 115, spe: 94},
		abilities: {0: "Fairy Law"},
		heightm: 0.7,
		weightkg: 112.8,
		color: "Pink",
		tags: ["Pokeathlon"],
		eggGroups: ["Fairy"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "DOU",
	},
	regimyo: {
		num: 6013,
		name: "Regimyo",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 80, atk: 150, def: 150, spa: 75, spd: 50, spe: 75},
		abilities: {0: "Clear Body", H: "Muscle Memory"},
		heightm: 1.2,
		weightkg: 255,
		color: "Red",
		tags: ["Sub-Legendary", "Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "UU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	jovianshk: {
		num: 6014,
		name: "Jovianshk",
		types: ["Dragon", "Psychic"],
		baseStats: {hp: 95, atk: 97, def: 72, spa: 123, spd: 95, spe: 98},
		abilities: {0: "Slow Light", H: "Levitate"},
		heightm: 1.0,
		weightkg: 50.2,
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "DUU",
	},
	lunachi: {
		num: 6015,
		name: "Lunachi",
		baseForme: "Aria",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 99, atk: 93, def: 82, spa: 93, spd: 92, spe: 121},
		abilities: {0: "Sacred Treasures"},
		heightm: 0.3,
		weightkg: 11,
		color: "White",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["Lunachi-Bestowed"],
		formeOrder: ["Lunachi", "Lunachi-Bestowed"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	lunachibestowed: {
		num: 6015,
		name: "Lunachi-Bestowed",
		baseSpecies: "Lunachi",
		forme: "Bestowed",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 99, atk: 93, def: 82, spa: 93, spd: 92, spe: 121},
		abilities: {0: "Sacred Treasures"},
		heightm: 0.3,
		weightkg: 11,
		color: "White",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		battleOnly: "Lunachi",
		tier: "Illegal",
		natDexTier: "Illegal",
		doublesTier: "Illegal",
	},
	ockthane: {
		num: 6016,
		name: "Ockthane",
		types: ["Ice", "Electric"],
		baseStats: {hp: 87, atk: 93, def: 62, spa: 144, spd: 116, spe: 78},
		abilities: {0: "Supreme Overlord", H: "Psychic Surge"},
		heightm: 0.6,
		weightkg: 17,
		color: "Yellow",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	porygon2rhinian: {
		num: 6017,
		name: "Porygon2-Rhinian",
		baseSpecies: "Porygon2",
		forme: "Rhinian",
		types: ["Grass", "Electric"],
		baseStats: {hp: 100, atk: 90, def: 95, spa: 100, spd: 90, spe: 40},
		abilities: {0: "Early Bird", 1: "Adaptability", H: "Electric Surge"},
		heightm: 0.6,
		weightkg: 32.5,
		color: "Green",
		evos: ["Porygon-Z-Rhinian"],
		tags: ["Pokeathlon"],
		eggGroups: ["Mineral"],
		tier: "UU",
		natDexTier: "LC",
		doublesTier: "DOU",
	},
	porygonzrhinian: {
		num: 6018,
		name: "Porygon-Z-Rhinian",
		baseSpecies: "Porygon-Z",
		forme: "Rhinian",
		types: ["Grass", "Electric"],
		baseStats: {hp: 100, atk: 95, def: 65, spa: 135, spd: 60, spe: 80},
		abilities: {0: "Early Bird", 1: "Adaptability", H: "Electric Surge"},
		heightm: 0.9,
		weightkg: 34,
		color: "Green",
		prevo: "Porygon2-Rhinian",
		evoType: "trade",
		evoItem: "Dubious Disc",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	incineroarolulian: {
		num: 727,
		name: "Incineroar-Olulian",
		baseSpecies: "Incineroar",
		forme: "Olulian",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 95, atk: 130, def: 110, spa: 65, spd: 80, spe: 50},
		abilities: {0: "Iron Fist", 1: "Steelworker"},
		heightm: 1.7,
		weightkg: 76.1,
		color: "Pink",
		tags: ["Pokeathlon"],
		eggGroups: ["Human-Like"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "(DUU)",
	},
	raikousupra: {
		num: 243,
		name: "Raikou-Supra",
		baseSpecies: "Raikou",
		forme: "Supra",
		types: ["Rock"],
		gender: "N",
		baseStats: {hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115},
		abilities: {0: "Sand Stream", 1: "Sandy Defense", H: "Adaptability"},
		heightm: 1.9,
		weightkg: 178,
		color: "Yellow",
		tags: ["Sub-Legendary", "Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	enteisupra: {
		num: 244,
		name: "Entei-Supra",
		baseSpecies: "Entei",
		forme: "Supra",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100},
		abilities: {0: "Snow Warning", 1: "Fur Coat", H: "Adaptability"},
		heightm: 2.1,
		weightkg: 198,
		color: "White",
		tags: ["Pokeathlon", "Sub-Legendary"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	suicunesupra: {
		num: 245,
		name: "Suicune-Supra",
		baseSpecies: "Suicune",
		forme: "Supra",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85},
		abilities: {0: "Drought", 1: "Vaporization", H: "Adaptability"},
		heightm: 2,
		weightkg: 187,
		color: "Red",
		tags: ["Pokeathlon", "Sub-Legendary"],
		eggGroups: ["Undiscovered"],
		tier: "Uber",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	heatransupra: {
		num: 485,
		name: "Heatran-Supra",
		baseSpecies: "Heatran",
		forme: "Supra",
		types: ["Fire", "Grass"],
		baseStats: {hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77},
		abilities: {0: "Dancer", H: "Chlorophyll"},
		heightm: 1.7,
		weightkg: 430,
		color: "Brown",
		tags: ["Sub-Legendary", "Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	mosster: {
		num: 6019,
		name: "Mosster",
		types: ["Rock", "Grass"],
		baseStats: {hp: 120, atk: 90, def: 120, spa: 50, spd: 100, spe: 30},
		abilities: {0: "Water Absorb", H: "Inertia"},
		heightm: 0.6,
		weightkg: 90,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DOU",
	},
	barrimander: {
		num: 6020,
		name: "Barrimander",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 50, atk: 70, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Own Tempo", 1: "Dry Skin", H: "Prankster"},
		heightm: 0.8,
		weightkg: 10,
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "Uber",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	staruhz: {
		num: 6021,
		name: "Staruhz",
		types: ["Water", "Psychic"],
		baseStats: {hp: 70, atk: 75, def: 85, spa: 110, spd: 95, spe: 125},
		abilities: {0: "Natural Cure", 1: "Starfall", H: "Analytic"},
		heightm: 0.8,
		weightkg: 10,
		prevo: "Starmie",
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	wrighvern: {
		num: 6022,
		name: "Wrighvern",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 80, spa: 125, spd: 85, spe: 130},
		abilities: {0: "Technician", 1: "Wind Rider", H: "Opportunist"},
		heightm: 0.6,
		weightkg: 90,
		color: "Purple",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	meditao: {
		num: 6023,
		name: "Meditao",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 80, atk: 55, def: 75, spa: 55, spd: 75, spe: 70},
		abilities: {0: "Inner Focus", H: "Muscle Memory"},
		heightm: 1.3,
		weightkg: 31.5,
		color: "Black",
		prevo: "Meditite",
		evoLevel: 37,
		tags: ["Pokeathlon"],
		eggGroups: ["Human-Like"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	electrodemega: {
		num: 101,
		name: "Electrode-Mega",
		baseSpecies: "Electrode",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 200, def: 10, spa: 110, spd: 10, spe: 200},
		abilities: {0: "Kablooey"},
		heightm: 1.7,
		weightkg: 80,
		color: "Red",
		tags: ["Pokeathlon"],
		eggGroups: ["Mineral"],
		requiredItem: "Electrodite",
		tier: "Uber",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	florgesmega: {
		num: 671,
		name: "Florges-Mega",
		baseSpecies: "Florges",
		forme: "Mega",
		types: ["Fairy"],
		gender: "F",
		baseStats: {hp: 78, atk: 55, def: 108, spa: 132, spd: 184, spe: 95},
		abilities: {0: "Ivy Wall"},
		heightm: 1.1,
		weightkg: 10,
		color: "White",
		eggGroups: ["Fairy"],
		tags: ["Pokeathlon"],
		requiredItem: "Florgesite",
		tier: "Uber",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	pandiz: {
		num: 6024,
		name: "Pandiz",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 110, def: 85, spa: 70, spd: 85, spe: 100},
		abilities: {0: "Own Tempo", 1: "Unaware", H: "Contrary"},
		heightm: 1.1,
		weightkg: 50,
		color: "Brown",
		prevo: "Spinda",
		tags: ["Pokeathlon"],
		eggGroups: ["Field", "Human-Like"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},

	// Pokeathlon
	bewitwing: {
		num: 6025,
		name: "Bewitwing",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 95, atk: 100, def: 85, spa: 85, spd: 130, spe: 90},
		abilities: {0: "Serene Grace", 1: "Cute Charm", H: "Prankster"},
		heightm: 0.5,
		weightkg: 9,
		color: "Purple",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "UU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	eidolburgh: {
		num: 6026,
		name: "Eidolburgh",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 93, atk: 72, def: 117, spa: 133, spd: 132, spe: 53},
		abilities: {0: "Sanctuary"},
		heightm: 2.1,
		weightkg: 266,
		color: "Gray",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "UU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	snorlaxfrost: {
		num: 143,
		name: "Snorlax-Frost",
		types: ["Ground", "Ice"],
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30},
		abilities: {0: "Thick Fat", 1: "Cursed Body", H: "Refrigerate"},
		heightm: 2.1,
		weightkg: 460,
		color: "Brown",
		tags: ["Pokeathlon"],
		eggGroups: ["Monster"],
		tier: "UU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	snorlaxfrostmega: {
		num: 143,
		name: "Snorlax-Frost-Mega",
		baseSpecies: "Snorlax-Frost",
		forme: "Mega",
		types: ["Ground", "Ice"],
		baseStats: {hp: 160, atk: 157, def: 80, spa: 80, spd: 123, spe: 40},
		abilities: {0: "Sheer Force"},
		heightm: 2.9,
		weightkg: 805,
		color: "White",
		eggGroups: ["Monster"],
		tags: ["Pokeathlon"],
		requiredItem: "Frosty Snorlaxite",
		tier: "Uber",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	heracrosssubarctic: {
		num: 214,
		name: "Heracross-Subarctic",
		baseSpecies: "Heracross",
		forme: "Subarctic",
		types: ["Bug", "Ice"],
		baseStats: {hp: 85, atk: 35, def: 75, spa: 135, spd: 90, spe: 80},
		abilities: {0: "Compound Eyes", 1: "Quick Feet", H: "Slush Rush"},
		heightm: 1.5,
		weightkg: 54,
		color: "Red",
		tags: ["Pokeathlon"],
		eggGroups: ["Bug"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	sirentom: {
		num: 6027,
		name: "Sirentom",
		types: ["Ghost", "Water"],
		baseStats: {hp: 140, atk: 70, def: 62, spa: 96, spd: 105, spe: 25},
		abilities: {0: "Comatose", 1: "Undeterred", H: "Pressure"},
		heightm: 3.4,
		weightkg: 449,
		color: "Gray",
		evoLevel: 44,
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous", "Water1"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DUU",
	},
	braskeptic: {
		num: 6028,
		name: "Braskeptic",
		types: ["Steel"],
		baseStats: {hp: 110, atk: 98, def: 93, spa: 98, spd: 87, spe: 73},
		abilities: {0: "Light Metal", 1: "Steam Engine", H: "Counterclockwise"},
		heightm: 1.2,
		weightkg: 163,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Field"],
		tier: "UU",
		natDexTier: "RU",
		doublesTier: "(DUU)",
	},
	maggony: {
		num: 6029,
		name: "Maggony",
		types: ["Bug"],
		baseStats: {hp: 35, atk: 11, def: 12, spa: 11, spd: 12, spe: 9},
		abilities: {0: "Necromancy"},
		heightm: 0.3,
		weightkg: 2.4,
		color: "Black",
		tags: ["Pokeathlon"],
		eggGroups: ["Bug"],
		tier: "UU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
	sweepdol: {
		num: 6030,
		name: "Sweepdol",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 80, atk: 55, def: 80, spa: 90, spd: 105, spe: 78},
		abilities: {0: "Clean Sweep", 1: "Frisk", H: "Infiltrator"},
		heightm: 1.3,
		weightkg: 24.5,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Field"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "(DUU)",
	},
	paldemaria: {
		num: 6031,
		name: "Paldemaria",
		types: ["Water", "Fairy"],
		baseStats: {hp: 90, atk: 59, def: 75, spa: 110, spd: 100, spe: 106},
		abilities: {0: "Liquid Voice", 1: "Regenerator", H: "Hospitality"},
		heightm: 1.8,
		weightkg: 60,
		color: "Blue",
		tags: ["Pokeathlon"],
		eggGroups: ["Water1", "Field"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DOU",
	},
	monetoad: {
		num: 6032,
		name: "Monetoad",
		types: ["Ground"],
		baseStats: {hp: 148, atk: 168, def: 74, spa: 56, spd: 94, spe: 48},
		abilities: {0: "Pickup"},
		heightm: 1.2,
		weightkg: 113,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Water 1"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	drifloonkitakami: {
		num: 425,
		name: "Drifloon-Kitakami",
		baseSpecies: "Drifloon",
		forme: "Kitakami",
		types: ["Ghost", "Water"],
		baseStats: {hp: 90, atk: 34, def: 50, spa: 44, spd: 60, spe: 70},
		abilities: {0: "Natural Cure", 1: "Cursed Body", H: "Flare Boost"},
		heightm: 1.1,
		weightkg: 1.1,
		color: "Green",
		evos: ["Drifbozu"],
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "LC",
		natDexTier: "LC",
		doublesTier: "LC",
	},
	drifbozu: {
		num: 6033,
		name: "Drifbozu",
		types: ["Ghost", "Water"],
		baseStats: {hp: 150, atk: 34, def: 60, spa: 74, spd: 70, spe: 120},
		abilities: {0: "Natural Cure", 1: "Cursed Body", H: "Flare Boost"},
		heightm: 2.5,
		weightkg: 2.5,
		color: "Green",
		prevo: "Drifloon-Kitakami",
		evoLevel: 28,
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	nestitan: {
		num: 6034,
		name: "Nestitan",
		types: ["Grass", "Flying"],
		baseStats: {hp: 100, atk: 52, def: 160, spa: 75, spd: 65, spe: 93},
		abilities: {0: "Overcoat", 1: "Zealous Flock", H: "Heatproof"},
		heightm: 12.3,
		weightkg: 364,
		color: "Brown",
		tags: ["Pokeathlon"],
		eggGroups: ["Grass", "Flying"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	loxicant: {
		num: 6035,
		name: "Loxicant",
		types: ["Steel", "Poison"],
		gender: "N",
		baseStats: {hp: 85, atk: 102, def: 120, spa: 45, spd: 100, spe: 68},
		abilities: {0: "Poison Point", 1: "Levitate"},
		heightm: 2.3,
		weightkg: 125,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	manacra: {
		num: 6036,
		name: "Manacra",
		baseForme: "Radial",
		types: ["Rock", "Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 60, def: 95, spa: 115, spd: 87, spe: 105},
		abilities: {0: "Levitate", 1: "Cursed Body", H: "Frisk"},
		heightm: 0.9,
		weightkg: 72,
		color: "Brown",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous", "Mineral"],
		otherFormes: ["Manacra-Plated"],
		formeOrder: ["Manacra", "Manacra-Plated"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	manacraplated: {
		num: 6036,
		name: "Manacra-Plated",
		baseSpecies: "Manacra",
		forme: "Plated",
		types: ["Steel", "Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 60, def: 152, spa: 80, spd: 120, spe: 50},
		abilities: {0: "Levitate", 1: "Cursed Body", H: "Frisk"},
		heightm: 0.9,
		weightkg: 159,
		color: "Brown",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous", "Mineral"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	feidan: {
		num: 6037,
		name: "Feidan",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 80, atk: 80, def: 130, spa: 80, spd: 130, spe: 25},
		abilities: {0: "Iron Barbs", 1: "Shadow Tag", H:"Unaware"},
		heightm: 2.3,
		weightkg: 125,
		color: "White",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DOU",
	},
	niandertroll: {
		num: 6038,
		name: "Niandertroll",
		types: ["Grass", "Steel"],
		baseStats: {hp: 108, atk: 127, def: 106, spa: 90, spd: 94, spe: 75},
		abilities: {0: "Seed Sower"},
		heightm: 4.3,
		weightkg: 345,
		color: "Green",
		tags: ["Pokeathlon"],
		eggGroups: ["Amorphous"],
		tier: "OU",
		natDexTier: "OU",
		doublesTier: "DUU",
	},
	scorchingkiln: {
		num: 6039,
		name: "Scorching Kiln",
		types: ["Ground", "Fire"],
		baseStats: {hp: 81, atk: 63, def: 105, spa: 99, spd: 135, spe: 87},
		abilities: {0: "Protosynthesis"},
		heightm: 2,
		weightkg: 120,
		color: "Brown",
		tags: ["Pokeathlon"],
		eggGroups: ["Undiscovered"],
		tier: "OU",
		natDexTier: "UU",
		doublesTier: "DUU",
	},
};
