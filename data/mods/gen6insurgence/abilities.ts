const {Dex} = require('../../../sim/dex');

const eeveelutions: {[k: string]: string} = {
	"Water": "vaporeon",
	"Fire": "flareon",
	"Grass": "leafeon",
	"Dark": "umbreon",
	"Fairy": "sylveon",
	"Psychic": "espeon",
	"Ice": "glaceon",
	"Electric": "jolteon",
	"Normal": "eeveemega",
};

const eeveeabilities: {[k: string]: string} = {
	"vaporeon": "waterabsorb",
	"flareon": "flashfire",
	"leafeon": "chlorophyll",
	"umbreon": "synchronize",
	"sylveon": "cutecharm",
	"espeon": "magicbounce",
	"glaceon": "snowcloak",
	"jolteon": "voltabsorb",
	"eeveemega": "proteanmaxima",
};

export const Abilities: {[k: string]: ModdedAbilityData} = Dex.deepClone(require('../gen9insurgence/abilities').Abilities);