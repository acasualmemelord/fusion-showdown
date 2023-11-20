export const Formats: FormatList = [
	{
		section: "Infinite Fusion: Regional Dex",
	},
	{
		name: "[Gen 7] IF Dex AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Z-Move Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause',
		],
		banlist: ['Mega'],
	},
	{
		name: "[Gen 7] IF Dex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Standard', 'Evasion Abilities Clause', 'Z-Move Clause', '!Species Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Fusion Species Clause', '!Nickname Clause',
		],
		banlist: [
			'Mega', 'Uber',
			'item:kingsrock', 'item:razorfang', 'item:lightball', 'item:thickclub',
			'ability:arenatrap', 'ability:shadowtag', 'ability:speedboost', 'ability:disguise',
			'move:batonpass', 'move:shellsmash', 'move:bellydrum', 'move:geomancy', 'move:doubleironbash',
		],
	},
	{
		name: "[Gen 7] IF Dex Doubles",

		mod: 'gen7infinitefusion',
		gameType: 'doubles',
		ruleset: [
			'Standard Doubles',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause', '!Nickname Clause',
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
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause', '!Nickname Clause',
		],
		banlist: [],
	},
	{
		name: "[Gen 9] IF NatDex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', '!Species Clause', 'Z-Move Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Terastal Clause', 'Fusion Species Clause', '!Nickname Clause',
		],
		banlist: [
			'ND AG', 'ND Uber', 'Mega',
			'item:kingsrock', 'item:quickclaw', 'item:razorfang', 'item:lightball', 'item:thickclub',
			'ability:hugepower', 'ability:purepower', 'ability:disguise', 'ability:moody', 'ability:contrary', 'ability:simple', 'ability:wonderguard', 'ability:arenatrap', 'ability:powerconstruct', 'ability:shadowtag', 'ability:speedboost',
			'move:shellsmash', 'move:bellydrum', 'move:lastrespects', 'move:populationbomb', 'move:ragefist', 'move:assist', 'move:batonpass', 'move:shedtail', 'move:geomancy', 'move:doubleironbash',
		],
	},
	{
		name: "[Gen 9] IF NatDex Doubles",

		mod: 'gen9infinitefusion',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause', '!Nickname Clause',
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
			'Standard NatDex',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause', '!Nickname Clause',
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
