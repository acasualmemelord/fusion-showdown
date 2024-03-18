// Data for computer-generated teams

export const MOVE_PAIRINGS: {[moveID: string]: string} = {
	rest: 'sleeptalk',
	sleeptalk: 'rest',
};

// Bonuses to move ratings by ability
export const ABILITY_MOVE_BONUSES: {[abilityID: string]: {[moveID: string]: number}} = {
	drought: {sunnyday: 0.2, solarbeam: 2},
	contrary: {terablast: 2},
};
// Bonuses to move ratings by move type
export const ABILITY_MOVE_TYPE_BONUSES: {[abilityID: string]: {[typeID: string]: number}} = {
	darkaura: {Dark: 1.33},
	dragonsmaw: {Dragon: 1.5},
	fairyaura: {Fairy: 1.33},
	steelworker: {Steel: 1.5},
	steelyspirit: {Steel: 1.5},
	transistor: {Electric: 1.3},

	// -ate moves
	pixilate: {Normal: 1.5 * 1.2},
	refrigerate: {Normal: 1.5 * 1.2},
	aerilate: {Normal: 1.5 * 1.2},
	normalize: {Normal: 1.2},

	// weather
	drizzle: {Water: 1.4, Fire: 0.6},
	drought: {Fire: 1.4, Water: 0.6},
};

export const TYPE_PAIRINGS: {[typeID: string]: {[typeID: string]}} = {
	Bug: {},
	Dark: {Fighting: 2, Normal: 1},
	Dragon: {},
	Electric: {Fairy: 1, Ground: 1, Ice: 2},
	Fairy: {Dark: 1, Electric: 1, Fire: 1, Psychic: 1, Water: 1},
	Fighting: {Bug: 1, Dark: 2, Dragon: 1, Fairy: 1, Flying: 1, Ghost: 2, Grass: 1, Ice: 2, Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 1},
	Fire: {Bug: 1, Dragon: 1, Electric: 1, Fairy: 1, Flying: 1, Grass: 1, Ground: 1, Ice: 1, Psychic: 1, Rock: 1, Steel: 1, Water: 1},
	Flying: {Fighting: 1, Ground: 1, Water: 1},
	Ghost: {Normal: 1, Psychic: 1},
	Grass: {Electric: 1, Fire: 1, Ice: 1, Water: 1},
	Ground: {Bug: 1, Dragon: 2, Fairy: 2, Fire: 1, Flying: 1, Grass: 1, Ice: 2, Normal: 1, Poison: 1, Psychic: 1, Rock: 2, Steel: 1, Water: 1},
	Ice: {Electric: 2, Fighting: 2, Fire: 1, Grass: 1, Ground: 1, Rock: 1, Water: 2},
	Normal: {},
	Poison: {Dark: 1, Dragon: 1, Fighting: 1},
	Psychic: {Fighting: 1},
	Rock: {Fairy: 1, Fighting: 1, Grass: 1, Ground: 1, Ice: 1},
	Steel: {Dark: 1, Dragon: 1, Fighting: 1},
	Water: {Electric: 1, Fairy: 1, Fire: 1, Grass: 1, Ice: 1},
};

// For moves whose quality isn't obvious from data
// USE SPARINGLY!
export const HARDCODED_MOVE_WEIGHTS: {[moveID: string]: number} = {
	// Fails unless user is asleep
	snore: 0,
	
	//fails
	teleport: 0,
	
	//probably shouldn't be selected first
	sleeptalk: 0,
	
	//doubles moves
	allyswitch: 0, wideguard: 0, ragepowder: 0, followme: 0, quash: 0,
	helpinghand: 0, quickguard: 0, healpulse: 0, tailwind: 0.1,
	
	// Hard to use
	lastresort: 0.1, dreameater: 0, synchronoise: 0, focuspunch: 0.01,
	skyattack: 0.1, skullbash: 0.1, eruption: 0.5, waterspout: 0.5, 
	swagger: 0.2, captivate: 0.1, confide: 0.2, flatter: 0.1, futuresight: 0.2, doomdesire: 0.2,
	
	// Useless without Berry + sucks even then
	belch: 0.2,

	// Power increases in conditions out of our control that may occur
	avalanche: 1.2,
	ficklebeam: 1.3,
	hex: 1.2,
	stompingtantrum: 1.2,
	temperflare: 1.2,
	
	//strong priority
	firstimpression: 2,
	extremespeed: 2.5,
	suckerpunch: 1.5,
	
	//useful side effects
	spectralthief: 3,
	coreenforcer: 3,

	// mess with the opponent
	taunt: 3, disable: 1.5, encore: 3, pursuit: 3, knockoff: 4,

	// healing moves
	// TODO: should healing moves be more common on bulkier pokemon?
	// 25%
	junglehealing: 3, lifedew: 3,
	// 50%
	milkdrink: 5, moonlight: 5, morningsun: 5, recover: 5, roost: 5,
	shoreup: 5, slackoff: 5, softboiled: 5, synthesis: 5, healorder: 5,
	// delayed/consequence
	rest: 1.5, // has sleeptalk potential
	wish: 2,

	// requires terrain
	steelroller: 0.1,
};

export const WEIGHT_BASED_MOVES = ['heatcrash', 'heavyslam', 'lowkick', 'grassknot'];
export const TARGET_HP_BASED_MOVES = ['crushgrip', 'wringout', 'hardpress'];
