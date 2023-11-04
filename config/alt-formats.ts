export const Formats: FormatList = [
	{
		section: "Infinite Fusion: Regional Dex",
	},
	{
		name: "[Gen 7] Infinite Fusion Dex",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: ['Standard', 'Z-Move Clause', 'Infinite Fusion Mod', 'IF Move Legality', 'Ignore Events', '!Obtainable Abilities', 'Species Reveal Clause'],
		banlist: ['Mega'],
	},
	{
		name: "[Gen 7] Infinite Fusion Dex OU",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen7infinitefusion',
		ruleset: ['Standard', 'Z-Move Clause', 'Infinite Fusion Mod', 'IF Move Legality', 'Ignore Events', '!Obtainable Abilities', 'Species Reveal Clause'],
		banlist: [
			'Mega', 'Uber',
			'King\'s Rock', 'Razor Fang', 'Light Ball',
			'Arena Trap', 'Shadow Tag', 
			'Baton Pass', 'Shell Smash', 'Belly Drum',
		],
	},
	{
		name: "[Gen 7] Infinite Fusion Dex Doubles",

		mod: 'gen7infinitefusion',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', 'Ignore Events', 'Species Reveal Clause'],
	},
	{
		section: "Infinite Fusion: National Dex",
	},
	{
		name: "[Gen 9] NatDex Infinite Fusion AG",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: ['Standard NatDex', 'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', 'Ignore Events', 'Species Reveal Clause'],
		banlist: [],
	},
	{
		name: "[Gen 9] NatDex Infinite Fusion",
		desc: "Pok&eacute;mon can fuse with other Pok&eacute;mon!",

		mod: 'gen9infinitefusion',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', 'Infinite Fusion Mod', 'IF Move Legality', 'Ignore Events', '!Obtainable Abilities', 'Species Reveal Clause'],
		banlist: [
			'ND AG', 'ND Uber', 'Mega',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Light Ball',
			'Huge Power', 'Pure Power', 'Disguise', 'Moody', 'Contrary', 'Simple', 'Wonder Guard', 'Arena Trap', 'Power Construct', 'Shadow Tag',
			'Shell Smash', 'Belly Drum', 'Last Respects', 'Population Bomb', 'Rage Fist', 'Assist', 'Baton Pass', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] NatDex Infinite Fusion Doubles",

		mod: 'gen9infinitefusion',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Infinite Fusion Mod', 'IF Move Legality', '!Obtainable Abilities', 'Ignore Events', 'Species Reveal Clause'],
	},
];
