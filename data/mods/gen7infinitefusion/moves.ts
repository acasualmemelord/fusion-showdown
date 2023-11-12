const {Dex} = require('../../../sim/dex');
export const Moves: {[k: string]: ModdedMoveData} = {
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	geomancy: {
		inherit: true,
		isNonstandard: null,
	},
	oblivionwing: {
		inherit: true,
		isNonstandard: null,
	},
	moongeistbeam: {
		inherit: true,
		isNonstandard: null,
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: null,
	},
	...Dex.deepClone(require('../gen9infinitefusion/moves').Moves),
};