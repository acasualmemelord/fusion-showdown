export const Formats: FormatList = [
	{
		section: "Infinite Fusion: Regional Dex",
	},
	{
		name: "[Gen 7] Infinite Fusion Dex AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Standard', 'Z-Move Clause', 
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause',
		],
		banlist: ['Mega'],
	},
	{
		name: "[Gen 7] Infinite Fusion Dex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: [
			'Standard', 'Z-Move Clause', '!Species Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Fusion Species Clause',
		],
		banlist: [
			'Mega', 'Uber',
			'King\'s Rock', 'Razor Fang', 'Light Ball',
			'Arena Trap', 'Shadow Tag', 'Speed Boost',
			'Baton Pass', 'Shell Smash', 'Belly Drum',
		],
	},
	{
		name: "[Gen 7] Infinite Fusion Dex Doubles",

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
		name: "[Gen 9] NatDex Infinite Fusion AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: [
			'Standard NatDex', 
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Species Reveal Clause',
		],
		banlist: [],
	},
	{
		name: "[Gen 9] NatDex Infinite Fusion OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', '!Species Clause',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Misc', '!Obtainable Abilities', 'Species Reveal Clause', 'Terastal Clause', 'Fusion Species Clause',
		],
		banlist: [
			'ND AG', 'ND Uber', 'Mega',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Light Ball',
			'Huge Power', 'Pure Power', 'Disguise', 'Moody', 'Contrary', 'Simple', 'Wonder Guard', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Speed Boost',
			'Shell Smash', 'Belly Drum', 'Last Respects', 'Population Bomb', 'Rage Fist', 'Assist', 'Baton Pass', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] NatDex Infinite Fusion Doubles",

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
		name: "[Gen 9] Infinite Fusion FFA",

		mod: 'gen9infinitefusion',
		gameType: 'freeforall',
		rated: false,
		ruleset: [
			'Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod',
			'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', '!Obtainable Misc', 'Fusion Species Clause',
		],
	},
	{
		name: "[Gen 9] Infinite Fusion Custom Game",

		mod: 'gen9infinitefusion',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Infinite Fusion Mod'],
	},
	{
		name: "[Gen 7] Infinite Fusion Custom Game",

		mod: 'gen7infinitefusion',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Infinite Fusion Mod'],
	},

];
