export const Formats: FormatList = [
	{
		section: "Infinite Fusion: Regional Dex",
	},
	{
		name: "[Gen 7] IF Dex AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Standard', 'Z-Move Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause',
		],
		banlist: ['Mega'],
	},
	{
		name: "[Gen 7] IF Dex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Standard', 'Z-Move Clause', '!Species Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Fusion Species Clause',
		],
		banlist: [
			'Mega', 'Uber',
			'item:kingsrock', 'item:quickclaw', 'item:razorfang',
			'ability:arenatrap', 'ability:shadowtag', 'ability:speedboost',
			'move:batonpass', 'move:shellsmash', 'move:bellydrum',
		],
	},
	{
		name: "[Gen 7] IF Dex Doubles",

		mod: 'gen7infinitefusion',
		gameType: 'doubles',
		ruleset: [
			'Standard Doubles', 
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause',
		],
	},

	{
		section: "Infinite Fusion: National Dex",
	},
	{
		name: "[Gen 9] IF NatDex AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: [
			'Standard NatDex', 
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause',
		],
		banlist: [],
	},
	{
		name: "[Gen 9] IF NatDex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', '!Species Clause', 'Z-Move Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Terastal Clause', 'Fusion Species Clause',
		],
		banlist: [
			'ND AG', 'ND Uber', 'Mega',
			'item:kingsrock', 'item:quickclaw', 'item:razorfang', 'item:lightball',
			'ability:hugepower', 'ability:purepower', 'ability:disguise', 'ability:moody', 'ability:contrary', 'ability:simple', 'ability:wonderguard', 'ability:arenatrap', 'ability:powerconstruct', 'ability:shadowtag', 'ability:speedboost',
			'move:shellsmash', 'move:bellydrum', 'move:lastrespects', 'move:populationbomb', 'move:ragefist', 'move:assist', 'move:batonpass', 'move:shedtail',
		],
	},
	{
		name: "[Gen 9] IF NatDex Doubles",

		mod: 'gen9infinitefusion',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex', 
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause',
		],
	},
	
	{
		section: "Infinite Fusion: Extra",
	},
	{
		name: "[Gen 9] IF Free-for-all",

		mod: 'gen9infinitefusion',
		gameType: 'freeforall',
		rated: false,
		ruleset: [
			'Obtainable', 'HP Percentage Mod', 'Cancel Mod',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Fusion Species Clause',
		],
	},
	{
		name: "[Gen 9] IF Custom Game",

		mod: 'gen9infinitefusion',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Infinite Fusion Mod'],
	},
	{
		name: "[Gen 7] IF Custom Game",

		mod: 'gen7infinitefusion',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Infinite Fusion Mod'],
	},

];
