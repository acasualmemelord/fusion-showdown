const {Dex} = require('../../../sim/dex');
export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	gengar: {
		inherit: true,
		abilities: {0: "Levitate"},
	},
	delibird: {
		inherit: true,
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Snow Warning"},
	},
	regigigas: {
		inherit: true,
		abilities: {0: "Slow Start", H: "Mold Breaker"},
	},
	zapdos: {
		inherit: true,
		abilities: {0: "Pressure", H: "Lightning Rod"},
	},
	raikou: {
		inherit: true,
		abilities: {0: "Pressure", H: "Volt Absorb"},
	},
	entei: {
		inherit: true,
		abilities: {0: "Pressure", H: "Flash Fire"},
	},
	suicune: {
		inherit: true,
		abilities: {0: "Pressure", H: "Water Absorb"},
	},
	chandelure: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"},
	},
	wigglytuff: {
		inherit: true,
		abilities: {0: "Cute Charm", H: "Frisk"},
	},
	feebas: {
		inherit: true,
		abilities: {0: "Swift Swim", H: "Adaptability"},
	},
	milotic: {
		inherit: true,
		abilities: {0: "Marvel Scale", H: "Cute Charm"},
	},
	ferrothorn: {
		inherit: true,
		abilities: {0: "Iron Barbs"},
	},
	unown: {
		inherit: true,
		abilities: {0: "Levitate", H: "Mummy"},
	},
	koffing: {
		inherit: true,
		abilities: {0: "Levitate", H: "Stench"},
	},
	weezing: {
		inherit: true,
		abilities: {0: "Levitate", H: "Stench"},
	},
	lycanrocmidnight: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Vital Spirit"},
	},
	...Dex.deepClone(require('../gen9infinitefusion/pokedex').Pokedex)
};
