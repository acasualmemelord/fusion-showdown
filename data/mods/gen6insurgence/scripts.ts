const cantLearnTM = ['beldum', 'blipbug', 'burmy', 'cascoon', 'caterpie', 'combee', 'cosmoem', 'cosmog', 'ditto', 'kakuna', 'kricketot', 'magikarp', 'metapod', 'scatterbug', 'silcoon', 'smeargle', 'tynamo', 'unown', 'weedle', 'wobbuffet', 'wurmple', 'wynaut'];
const InsgDex: {[k: string]: number} = {
	"bulbasaur": 1,
	"ivysaur": 2,
	"venusaur": 3,
	"venusaurmega": 3,
	"charmander": 4,
	"charmeleon": 5,
	"charizard": 6,
	"charizardmegax": 6,
	"charizardmegay": 6,
	"squirtle": 7,
	"wartortle": 8,
	"blastoise": 9,
	"blastoisemega": 9,
	"caterpie": 10,
	"metapod": 11,
	"butterfree": 12,
	"weedle": 13,
	"kakuna": 14,
	"beedrill": 15,
	"beedrillmega": 15,
	"pidgey": 16,
	"pidgeotto": 17,
	"pidgeot": 18,
	"pidgeotmega": 18,
	"rattata": 19,
	"raticate": 20,
	"spearow": 21,
	"fearow": 22,
	"ekans": 23,
	"arbok": 24,
	"pikachu": 25,
	"raichu": 26,
	"sandshrew": 27,
	"sandslash": 28,
	"nidoranf": 29,
	"nidorina": 30,
	"nidoqueen": 31,
	"nidoranm": 32,
	"nidorino": 33,
	"nidoking": 34,
	"clefairy": 35,
	"clefable": 36,
	"vulpix": 37,
	"ninetales": 38,
	"jigglypuff": 39,
	"wigglytuff": 40,
	"zubat": 41,
	"golbat": 42,
	"oddish": 43,
	"gloom": 44,
	"vileplume": 45,
	"paras": 46,
	"parasect": 47,
	"venonat": 48,
	"venomoth": 49,
	"diglett": 50,
	"dugtrio": 51,
	"meowth": 52,
	"persian": 53,
	"psyduck": 54,
	"golduck": 55,
	"mankey": 56,
	"primeape": 57,
	"growlithe": 58,
	"arcanine": 59,
	"poliwag": 60,
	"poliwhirl": 61,
	"poliwrath": 62,
	"poliwrathmega": 62,
	"abra": 63,
	"kadabra": 64,
	"alakazam": 65,
	"alakazammega": 65,
	"machop": 66,
	"machoke": 67,
	"machamp": 68,
	"bellsprout": 69,
	"weepinbell": 70,
	"victreebel": 71,
	"tentacool": 72,
	"tentacruel": 73,
	"geodude": 74,
	"graveler": 75,
	"golem": 76,
	"ponyta": 77,
	"rapidash": 78,
	"slowpoke": 79,
	"slowbro": 80,
	"slowbromega": 80,
	"magnemite": 81,
	"magneton": 82,
	"farfetchd": 83,
	"doduo": 84,
	"dodrio": 85,
	"seel": 86,
	"dewgong": 87,
	"grimer": 88,
	"muk": 89,
	"shellder": 90,
	"cloyster": 91,
	"gastly": 92,
	"haunter": 93,
	"gengar": 94,
	"gengarmega": 94,
	"onix": 95,
	"drowzee": 96,
	"hypno": 97,
	"krabby": 98,
	"kingler": 99,
	"voltorb": 100,
	"electrode": 101,
	"exeggcute": 102,
	"exeggutor": 103,
	"cubone": 104,
	"marowak": 105,
	"marowakmega": 105,
	"hitmonlee": 106,
	"hitmonchan": 107,
	"lickitung": 108,
	"koffing": 109,
	"weezing": 110,
	"rhyhorn": 111,
	"rhydon": 112,
	"chansey": 113,
	"tangela": 114,
	"kangaskhan": 115,
	"kangaskhanmega": 115,
	"horsea": 116,
	"seadra": 117,
	"goldeen": 118,
	"seaking": 119,
	"staryu": 120,
	"starmie": 121,
	"mimemr": 122,
	"scyther": 123,
	"jynx": 124,
	"electabuzz": 125,
	"magmar": 126,
	"pinsir": 127,
	"pinsirmega": 127,
	"tauros": 128,
	"magikarp": 129,
	"gyarados": 130,
	"gyaradosmega": 130,
	"lapras": 131,
	"ditto": 132,
	"eevee": 133,
	"eeveemega": 133,
	"vaporeon": 134,
	"jolteon": 135,
	"flareon": 136,
	"porygon": 137,
	"omanyte": 138,
	"omastar": 139,
	"kabuto": 140,
	"kabutops": 141,
	"aerodactyl": 142,
	"aerodactylmega": 142,
	"snorlax": 143,
	"articuno": 144,
	"zapdos": 145,
	"moltres": 146,
	"dratini": 147,
	"dragonair": 148,
	"dragonite": 149,
	"mewtwo": 150,
	"mewtwoarmor": 150,
	"mewtwomegax": 150,
	"mewtwomegay": 150,
	"mew": 151,
	"chikorita": 152,
	"bayleef": 153,
	"meganium": 154,
	"meganiummega": 154,
	"cyndaquil": 155,
	"quilava": 156,
	"typhlosion": 157,
	"typhlosionmega": 157,
	"totodile": 158,
	"croconaw": 159,
	"feraligatr": 160,
	"feraligatrmega": 160,
	"sentret": 161,
	"furret": 162,
	"hoothoot": 163,
	"noctowl": 164,
	"ledyba": 165,
	"ledian": 166,
	"spinarak": 167,
	"ariados": 168,
	"crobat": 169,
	"chinchou": 170,
	"lanturn": 171,
	"pichu": 172,
	"cleffa": 173,
	"igglybuff": 174,
	"togepi": 175,
	"togetic": 176,
	"natu": 177,
	"xatu": 178,
	"mareep": 179,
	"flaaffy": 180,
	"ampharos": 181,
	"ampharosmega": 181,
	"bellossom": 182,
	"marill": 183,
	"azumarill": 184,
	"sudowoodo": 185,
	"sudowoodomega": 185,
	"politoed": 186,
	"politoedmega": 186,
	"hoppip": 187,
	"skiploom": 188,
	"jumpluff": 189,
	"aipom": 190,
	"sunkern": 191,
	"sunflora": 192,
	"sunfloramegam": 192,
	"sunfloramegaf": 192,
	"yanma": 193,
	"wooper": 194,
	"quagsire": 195,
	"espeon": 196,
	"umbreon": 197,
	"murkrow": 198,
	"slowking": 199,
	"misdreavus": 200,
	"unown": 201,
	"wobbuffet": 202,
	"girafarig": 203,
	"pineco": 204,
	"forretress": 205,
	"dunsparce": 206,
	"gligar": 207,
	"steelix": 208,
	"steelixmega": 208,
	"steelixmegaf": 208,
	"snubbull": 209,
	"granbull": 210,
	"qwilfish": 211,
	"scizor": 212,
	"scizormega": 212,
	"shuckle": 213,
	"heracross": 214,
	"heracrossmega": 214,
	"sneasel": 215,
	"teddiursa": 216,
	"ursaring": 217,
	"slugma": 218,
	"magcargo": 219,
	"magcargomega": 219,
	"swinub": 220,
	"piloswine": 221,
	"corsola": 222,
	"remoraid": 223,
	"octillery": 224,
	"delibird": 225,
	"mantine": 226,
	"skarmory": 227,
	"houndour": 228,
	"houndoom": 229,
	"houndoommega": 229,
	"kingdra": 230,
	"phanpy": 231,
	"donphan": 232,
	"donphanmega": 232,
	"porygon2": 233,
	"stantler": 234,
	"smeargle": 235,
	"tyrogue": 236,
	"hitmontop": 237,
	"smoochum": 238,
	"elekid": 239,
	"magby": 240,
	"miltank": 241,
	"miltankmega": 241,
	"blissey": 242,
	"raikou": 243,
	"entei": 244,
	"suicune": 245,
	"larvitar": 246,
	"pupitar": 247,
	"tyranitar": 248,
	"tyranitararmor": 248,
	"tyranitarmega": 248,
	"lugia": 249,
	"hooh": 250,
	"celebi": 251,
	"treecko": 252,
	"grovyle": 253,
	"sceptile": 254,
	"sceptilemega": 254,
	"torchic": 255,
	"combusken": 256,
	"blaziken": 257,
	"blazikenmega": 257,
	"mudkip": 258,
	"marshtomp": 259,
	"swampert": 260,
	"swampertmega": 260,
	"poochyena": 261,
	"mightyena": 262,
	"zigzagoon": 263,
	"linoone": 264,
	"wurmple": 265,
	"silcoon": 266,
	"beautifly": 267,
	"cascoon": 268,
	"dustox": 269,
	"lotad": 270,
	"lombre": 271,
	"ludicolo": 272,
	"seedot": 273,
	"nuzleaf": 274,
	"shiftry": 275,
	"shiftrymega": 275,
	"taillow": 276,
	"swellow": 277,
	"wingull": 278,
	"pelipper": 279,
	"ralts": 280,
	"kirlia": 281,
	"gardevoir": 282,
	"gardevoirmega": 282,
	"surskit": 283,
	"masquerain": 284,
	"shroomish": 285,
	"breloom": 286,
	"slakoth": 287,
	"vigoroth": 288,
	"slaking": 289,
	"nincada": 290,
	"ninjask": 291,
	"shedinja": 292,
	"whismur": 293,
	"loudred": 294,
	"exploud": 295,
	"makuhita": 296,
	"hariyama": 297,
	"azurill": 298,
	"nosepass": 299,
	"skitty": 300,
	"delcatty": 301,
	"sableye": 302,
	"sableyemega": 302,
	"mawile": 303,
	"mawilemega": 303,
	"aron": 304,
	"lairon": 305,
	"aggron": 306,
	"aggronmega": 306,
	"meditite": 307,
	"medicham": 308,
	"medichammega": 308,
	"electrike": 309,
	"manectric": 310,
	"manectricmega": 310,
	"plusle": 311,
	"minun": 312,
	"volbeat": 313,
	"illumise": 314,
	"roselia": 315,
	"gulpin": 316,
	"swalot": 317,
	"carvanha": 318,
	"sharpedo": 319,
	"sharpedomega": 319,
	"wailmer": 320,
	"wailord": 321,
	"numel": 322,
	"camerupt": 323,
	"cameruptmega": 323,
	"torkoal": 324,
	"spoink": 325,
	"grumpig": 326,
	"spinda": 327,
	"trapinch": 328,
	"vibrava": 329,
	"flygon": 330,
	"flygonarmor": 330,
	"flygonmega": 330,
	"cacnea": 331,
	"cacturne": 332,
	"cacturnemega": 332,
	"swablu": 333,
	"altaria": 334,
	"altariamega": 334,
	"zangoose": 335,
	"seviper": 336,
	"lunatone": 337,
	"solrock": 338,
	"barboach": 339,
	"whiscash": 340,
	"corphish": 341,
	"crawdaunt": 342,
	"crawdauntmega": 342,
	"baltoy": 343,
	"claydol": 344,
	"lileep": 345,
	"cradily": 346,
	"anorith": 347,
	"armaldo": 348,
	"feebas": 349,
	"milotic": 350,
	"miloticmega": 350,
	"castform": 351,
	"kecleon": 352,
	"shuppet": 353,
	"banette": 354,
	"banettemega": 354,
	"duskull": 355,
	"dusclops": 356,
	"tropius": 357,
	"chimecho": 358,
	"absol": 359,
	"absolmega": 359,
	"wynaut": 360,
	"snorunt": 361,
	"glalie": 362,
	"glaliemega": 362,
	"spheal": 363,
	"sealeo": 364,
	"walrein": 365,
	"clamperl": 366,
	"huntail": 367,
	"gorebyss": 368,
	"relicanth": 369,
	"luvdisc": 370,
	"bagon": 371,
	"shelgon": 372,
	"salamence": 373,
	"salamencemega": 373,
	"beldum": 374,
	"metang": 375,
	"metagross": 376,
	"metagrossmega": 376,
	"regirock": 377,
	"regice": 378,
	"registeel": 379,
	"latias": 380,
	"latiasmega": 380,
	"latios": 381,
	"latiosmega": 381,
	"kyogre": 382,
	"groudon": 383,
	"rayquaza": 384,
	"rayquazamega": 384,
	"jirachi": 385,
	"jirachimega": 385,
	"deoxys": 386,
	"turtwig": 387,
	"grotle": 388,
	"torterra": 389,
	"chimchar": 390,
	"monferno": 391,
	"infernape": 392,
	"piplup": 393,
	"prinplup": 394,
	"empoleon": 395,
	"starly": 396,
	"staravia": 397,
	"staraptor": 398,
	"bidoof": 399,
	"bibarel": 400,
	"kricketot": 401,
	"kricketune": 402,
	"shinx": 403,
	"luxio": 404,
	"luxray": 405,
	"budew": 406,
	"roserade": 407,
	"cranidos": 408,
	"rampardos": 409,
	"shieldon": 410,
	"bastiodon": 411,
	"burmy": 412,
	"wormadam": 413,
	"mothim": 414,
	"combee": 415,
	"vespiquen": 416,
	"pachirisu": 417,
	"buizel": 418,
	"floatzel": 419,
	"cherubi": 420,
	"cherrim": 421,
	"shellos": 422,
	"gastrodon": 423,
	"ambipom": 424,
	"drifloon": 425,
	"drifblim": 426,
	"buneary": 427,
	"lopunny": 428,
	"lopunnymega": 428,
	"mismagius": 429,
	"honchkrow": 430,
	"glameow": 431,
	"purugly": 432,
	"chingling": 433,
	"stunky": 434,
	"skuntank": 435,
	"bronzor": 436,
	"bronzong": 437,
	"bonsly": 438,
	"jrmime": 439,
	"happiny": 440,
	"chatot": 441,
	"chatotmega": 441,
	"spiritomb": 442,
	"spiritombmega": 442,
	"gible": 443,
	"gabite": 444,
	"garchomp": 445,
	"garchompmega": 445,
	"munchlax": 446,
	"riolu": 447,
	"lucario": 448,
	"lucariomega": 448,
	"hippopotas": 449,
	"hippowdon": 450,
	"skorupi": 451,
	"drapion": 452,
	"croagunk": 453,
	"toxicroak": 454,
	"carnivine": 455,
	"finneon": 456,
	"lumineon": 457,
	"mantyke": 458,
	"snover": 459,
	"abomasnow": 460,
	"abomasnowmega": 460,
	"weavile": 461,
	"magnezone": 462,
	"lickilicky": 463,
	"rhyperior": 464,
	"tangrowth": 465,
	"electivire": 466,
	"magmortar": 467,
	"togekiss": 468,
	"yanmega": 469,
	"leafeon": 470,
	"glaceon": 471,
	"gliscor": 472,
	"mamoswine": 473,
	"porygonz": 474,
	"gallade": 475,
	"gallademega": 475,
	"probopass": 476,
	"dusknoir": 477,
	"froslass": 478,
	"froslassmega": 478,
	"rotom": 479,
	"uxie": 480,
	"mesprit": 481,
	"azelf": 482,
	"dialga": 483,
	"palkia": 484,
	"heatran": 485,
	"regigigas": 486,
	"regigigasprimal": 486,
	"giratina": 487,
	"giratinaprimal": 487,
	"cresselia": 488,
	"phione": 489,
	"manaphy": 490,
	"darkrai": 491,
	"shaymin": 492,
	"arceus": 493,
	"arceusprimal": 493,
	"victini": 494,
	"snivy": 495,
	"servine": 496,
	"serperior": 497,
	"tepig": 498,
	"pignite": 499,
	"emboar": 500,
	"oshawott": 501,
	"dewott": 502,
	"samurott": 503,
	"patrat": 504,
	"watchog": 505,
	"lillipup": 506,
	"herdier": 507,
	"stoutland": 508,
	"purrloin": 509,
	"liepard": 510,
	"pansage": 511,
	"simisage": 512,
	"pansear": 513,
	"simisear": 514,
	"panpour": 515,
	"simipour": 516,
	"munna": 517,
	"musharna": 518,
	"pidove": 519,
	"tranquill": 520,
	"unfezant": 521,
	"blitzle": 522,
	"zebstrika": 523,
	"zebstrikamega": 523,
	"roggenrola": 524,
	"boldore": 525,
	"gigalith": 526,
	"woobat": 527,
	"swoobat": 528,
	"drilbur": 529,
	"excadrill": 530,
	"audino": 531,
	"audinomega": 531,
	"timburr": 532,
	"gurdurr": 533,
	"conkeldurr": 534,
	"tympole": 535,
	"palpitoad": 536,
	"seismitoad": 537,
	"throh": 538,
	"sawk": 539,
	"sewaddle": 540,
	"swadloon": 541,
	"leavanny": 542,
	"leavannyarmor": 542,
	"venipede": 543,
	"whirlipede": 544,
	"scolipede": 545,
	"cottonee": 546,
	"whimsicott": 547,
	"petilil": 548,
	"lilligant": 549,
	"basculin": 550,
	"sandile": 551,
	"krokorok": 552,
	"krookodile": 553,
	"darumaka": 554,
	"darmanitan": 555,
	"maractus": 556,
	"dwebble": 557,
	"crustle": 558,
	"scraggy": 559,
	"scrafty": 560,
	"sigilyph": 561,
	"yamask": 562,
	"cofagrigus": 563,
	"tirtouga": 564,
	"carracosta": 565,
	"archen": 566,
	"archeops": 567,
	"trubbish": 568,
	"garbodor": 569,
	"zorua": 570,
	"zoroark": 571,
	"zoroarkmega": 571,
	"minccino": 572,
	"cinccino": 573,
	"gothita": 574,
	"gothorita": 575,
	"gothitelle": 576,
	"gothitellemega": 576,
	"solosis": 577,
	"duosion": 578,
	"reuniclus": 579,
	"reuniclusmega": 579,
	"ducklett": 580,
	"swanna": 581,
	"vanillite": 582,
	"vanillish": 583,
	"vanilluxe": 584,
	"deerling": 585,
	"sawsbuck": 586,
	"emolga": 587,
	"karrablast": 588,
	"escavalier": 589,
	"foongus": 590,
	"amoonguss": 591,
	"frillish": 592,
	"jellicent": 593,
	"alomomola": 594,
	"joltik": 595,
	"galvantula": 596,
	"ferroseed": 597,
	"ferrothorn": 598,
	"klink": 599,
	"klang": 600,
	"klinklang": 601,
	"tynamo": 602,
	"eelektrik": 603,
	"eelektross": 604,
	"elgyem": 605,
	"beheeyem": 606,
	"litwick": 607,
	"lampent": 608,
	"chandelure": 609,
	"axew": 610,
	"fraxure": 611,
	"haxorus": 612,
	"haxorusmega": 612,
	"cubchoo": 613,
	"beartic": 614,
	"cryogonal": 615,
	"cryogonalmega": 615,
	"shelmet": 616,
	"accelgor": 617,
	"stunfisk": 618,
	"stunfiskmega": 618,
	"mienfoo": 619,
	"mienshao": 620,
	"druddigon": 621,
	"golett": 622,
	"golurk": 623,
	"pawniard": 624,
	"bisharp": 625,
	"bisharpmega": 625,
	"bouffalant": 626,
	"rufflet": 627,
	"braviary": 628,
	"vullaby": 629,
	"mandibuzz": 630,
	"heatmor": 631,
	"durant": 632,
	"deino": 633,
	"zweilous": 634,
	"hydreigon": 635,
	"hydreigonmega": 635,
	"larvesta": 636,
	"volcarona": 637,
	"cobalion": 638,
	"terrakion": 639,
	"virizion": 640,
	"tornadus": 641,
	"thundurus": 642,
	"reshiram": 643,
	"zekrom": 644,
	"zekromarmor": 644,
	"landorus": 645,
	"kyurem": 646,
	"keldeo": 647,
	"meloetta": 648,
	"genesect": 649,
	"chespin": 650,
	"quilladin": 651,
	"chesnaught": 652,
	"fennekin": 653,
	"braixen": 654,
	"delphox": 655,
	"froakie": 656,
	"frogadier": 657,
	"greninja": 658,
	"bunnelby": 659,
	"diggersby": 660,
	"fletchling": 661,
	"fletchinder": 662,
	"talonflame": 663,
	"scatterbug": 664,
	"spewpa": 665,
	"vivillon": 666,
	"litleo": 667,
	"pyroar": 668,
	"flabb": 669,
	"floette": 670,
	"florges": 671,
	"skiddo": 672,
	"gogoat": 673,
	"pancham": 674,
	"pangoro": 675,
	"furfrou": 676,
	"espurr": 677,
	"meowstic": 678,
	"honedge": 679,
	"doublade": 680,
	"aegislash": 681,
	"spritzee": 682,
	"aromatisse": 683,
	"swirlix": 684,
	"slurpuff": 685,
	"inkay": 686,
	"malamar": 687,
	"binacle": 688,
	"barbaracle": 689,
	"skrelp": 690,
	"dragalge": 691,
	"clauncher": 692,
	"clawitzer": 693,
	"helioptile": 694,
	"heliolisk": 695,
	"tyrunt": 696,
	"tyrantrum": 697,
	"amaura": 698,
	"aurorus": 699,
	"sylveon": 700,
	"hawlucha": 701,
	"dedenne": 702,
	"carbink": 703,
	"goomy": 704,
	"sliggoo": 705,
	"goodra": 706,
	"klefki": 707,
	"phantump": 708,
	"trevenant": 709,
	"pumpkaboo": 710,
	"gourgeist": 711,
	"bergmite": 712,
	"avalugg": 713,
	"noibat": 714,
	"noivern": 715,
	"xerneas": 716,
	"yveltal": 717,
	"zygarde": 718,
	"diancie": 719,
	"dianciemega": 719,
	"hoopa": 720,
	"volcanion": 721,
	"missingno": 722,
	"bulbasaurdelta": 727,
	"ivysaurdelta": 728,
	"venusaurdelta": 729,
	"venusaurdeltamega": 729,
	"charmanderdelta": 730,
	"charmeleondelta": 731,
	"charizarddelta": 732,
	"charizarddeltamega": 732,
	"squirtledelta": 733,
	"wartortledelta": 734,
	"blastoisedelta": 735,
	"blastoisedeltamega": 735,
	"pawniarddelta": 736,
	"bisharpdelta": 737,
	"bisharpdeltamega": 737,
	"raltsdelta": 738,
	"kirliadelta": 739,
	"gardevoirdelta": 740,
	"gardevoirdeltamega": 740,
	"galladedelta": 741,
	"galladedeltamega": 741,
	"sunkerndelta": 742,
	"sunfloradelta": 743,
	"sunfloradeltamega": 743,
	"bergmitedelta": 744,
	"avaluggdelta": 745,
	"scytherdelta": 746,
	"scizordelta": 747,
	"scizordeltamega": 747,
	"scraggydelta": 748,
	"scraftydelta": 749,
	"combeedelta": 750,
	"vespiquendelta": 751,
	"koffingdelta": 752,
	"weezingdelta": 753,
	"purrloindelta": 754,
	"lieparddelta": 755,
	"phantumpdelta": 756,
	"trevenantdelta": 757,
	"snoruntdelta": 758,
	"glaliedelta": 759,
	"glaliedeltamega": 759,
	"froslassdelta": 760,
	"froslassdeltamega": 760,
	"shinxdelta": 761,
	"luxiodelta": 762,
	"luxraydelta": 763,
	"noibatdelta": 764,
	"noiverndelta": 765,
	"budewdelta": 766,
	"roseliadelta": 767,
	"roseradedelta": 768,
	"drifloondelta": 769,
	"drifblimdelta": 770,
	"grimerdelta": 771,
	"mukdelta": 772,
	"wooperdelta": 773,
	"quagsiredelta": 774,
	"munchlaxdelta": 775,
	"snorlaxdelta": 776,
	"misdreavusdelta": 777,
	"mismagiusdelta": 778,
	"cyndaquildelta": 779,
	"quilavadelta": 780,
	"typhlosiondelta": 781,
	"typhlosiondeltamega": 781,
	"treeckodelta": 782,
	"grovyledelta": 783,
	"sceptiledelta": 784,
	"torchicdelta": 785,
	"combuskendelta": 786,
	"blazikendelta": 787,
	"turtwigdelta": 788,
	"grotledelta": 789,
	"torterradelta": 790,
	"snivydelta": 791,
	"servinedelta": 792,
	"serperiordelta": 793,
	"froakiedelta": 794,
	"frogadierdelta": 795,
	"greninjadelta": 796,
	"pidgeydelta": 797,
	"pidgeottodelta": 798,
	"pidgeotdelta": 799,
	"pidgeotdeltamega": 799,
	"diglettdelta": 800,
	"dugtriodelta": 801,
	"growlithedelta": 802,
	"arcaninedelta": 803,
	"geodudedelta": 804,
	"gravelerdelta": 805,
	"golemdelta": 806,
	"tentacooldelta": 807,
	"tentacrueldelta": 808,
	"doduodelta": 809,
	"dodriodelta": 810,
	"tangeladelta": 811,
	"tangrowthdelta": 812,
	"dittodelta": 813,
	"kabutodelta": 814,
	"kabutopsdelta": 815,
	"dratinidelta": 816,
	"dragonairdelta": 817,
	"dragonitedelta": 818,
	"hoothootdelta": 819,
	"noctowldelta": 820,
	"chinchoudelta": 821,
	"lanturndelta": 822,
	"pichudelta": 823,
	"pikachudelta": 824,
	"raichudelta": 825,
	"aipomdelta": 826,
	"ambipomdelta": 827,
	"yanmadelta": 828,
	"yanmegadelta": 829,
	"girafarigdelta": 830,
	"girafarigdeltamega": 830,
	"dunsparcedelta": 831,
	"shuckledelta": 832,
	"remoraiddelta": 833,
	"octillerydelta": 834,
	"elekiddelta": 835,
	"electabuzzdelta": 836,
	"electiviredelta": 837,
	"magbydelta": 838,
	"magmardelta": 839,
	"magmortardelta": 840,
	"lotaddelta": 841,
	"lombredelta": 842,
	"ludicolodelta": 843,
	"seedotdelta": 844,
	"nuzleafdelta": 845,
	"shiftrydelta": 846,
	"sableyedelta": 847,
	"sableyedeltamega": 847,
	"mawiledelta": 848,
	"mawiledeltamega": 848,
	"arondelta": 849,
	"lairondelta": 850,
	"aggrondelta": 851,
	"medititedelta": 852,
	"medichamdelta": 853,
	"medichamdeltamega": 853,
	"numeldelta": 854,
	"cameruptdelta": 855,
	"cameruptdeltamega": 855,
	"plusledelta": 856,
	"minundelta": 857,
	"wailmerdelta": 858,
	"wailorddelta": 859,
	"feebasdelta": 860,
	"miloticdelta": 861,
	"miloticdeltamega": 861,
	"clamperldelta": 862,
	"huntaildelta": 863,
	"gorebyssdelta": 864,
	"beldumdeltaspider": 865,
	"metangdeltaspider": 866,
	"metagrossdeltaspider": 867,
	"metagrossdeltaspidermega": 867,
	"beldumdeltaruin": 868,
	"metangdeltaruin": 869,
	"metagrossdeltaruin": 870,
	"metagrossdeltaruincrystal": 870,
	"metagrossdeltaruinmega": 870,
	"bunearydelta": 871,
	"lopunnydelta": 872,
	"lopunnydeltamega": 872,
	"rioludelta": 873,
	"lucariodelta": 874,
	"lucariodeltamega": 874,
	"croagunkdelta": 875,
	"toxicroakdelta": 876,
	"venipededelta": 877,
	"whirlipededelta": 878,
	"scolipededelta": 879,
	"petilildeltawater": 880,
	"lilligantdeltawater": 881,
	"petilildeltafairy": 882,
	"lilligantdeltafairy": 883,
	"solosisdelta": 884,
	"duosiondelta": 885,
	"reuniclusdelta": 886,
	"darumakadelta": 887,
	"darmanitandelta": 888,
	"maractusdelta": 889,
	"dwebbledeltaberry": 890,
	"crustledeltaberry": 891,
	"dwebbledeltacake": 892,
	"crustledeltacake": 893,
	"yamaskdelta": 894,
	"cofagrigusdelta": 895,
	"emolgadelta": 896,
	"karrablastdelta": 897,
	"escavalierdelta": 898,
	"foongusdelta": 899,
	"amoongussdelta": 900,
	"litwickdelta": 901,
	"lampentdelta": 902,
	"chandeluredelta": 903,
	"axewdelta": 904,
	"fraxuredelta": 905,
	"haxorusdelta": 906,
	"golettdelta": 907,
	"golurkdelta": 908,
	"heatmordelta": 909,
	"deinodelta": 910,
	"zweilousdelta": 911,
	"hydreigondelta": 912,
	"larvestadelta": 913,
	"volcaronadelta": 914,
	"volcaronadeltaarmor": 914,
	"amauradelta": 915,
	"aurorusdelta": 916,
	"goomydelta": 917,
	"sliggoodelta": 918,
	"goodradelta": 919,
	"regirockdelta": 920,
	"regicedelta": 921,
	"registeeldelta": 922,
	"meloettadelta": 923,
	"hoopadelta": 924,
	"ufi": 925,
};

export const Scripts: ModdedBattleScriptsData = {
	gen: 6,
	inherit: 'gen6',
	init() {
		for (const i in this.data.Pokedex) {
			if (!cantLearnTM.includes(i) && i in this.data.Learnsets && this.modData('Learnsets', i).learnset) {
				this.modData('Learnsets', i).learnset.achillesheel = ["6M"];
			}
			if (i in InsgDex) {
				this.data.Pokedex[i].num = InsgDex[i];
				this.data.Pokedex[i].gen = 6;
				delete this.data.Pokedex[i].isNonstandard;
			} else {
				if (this.data.Pokedex[i].num > 0) this.data.Pokedex[i].num *= -1;
				this.data.Pokedex[i].isNonstandard = "Unobtainable";
			}
		}
	},
	actions: {
		canMegaEvo(pokemon: Pokemon) {
			const species = pokemon.baseSpecies;
			const altForme = species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			const item = pokemon.getItem();
			// Mega Rayquaza
			if ((this.battle.gen <= 7 || this.battle.ruleTable.has('+pokemontag:past')) &&
				altForme?.isMega && altForme?.requiredMove &&
				pokemon.baseMoves.includes(toID(altForme.requiredMove)) && !item.zMove) {
				return altForme.name;
			}
			// a hacked-in Megazard X can mega evolve into Megazard Y, but not into Megazard X
			if (item.megaEvolves === species.baseSpecies && item.megaStone !== species.name) {
				// Mega Sunfloras
				if (species.id === 'sunflora' && pokemon.gender === 'F') return 'Sunflora-Mega-F';
				return item.megaStone;
			}
			return null;
		}
	},
	pokemon: {
		setStatus(
			status: string | Condition,
			source: Pokemon | null = null,
			sourceEffect: Effect | null = null,
			ignoreImmunities = false
		) {
			if (!this.hp) return false;
			status = this.battle.dex.conditions.get(status);
			if (this.battle.event) {
				if (!source) source = this.battle.event.source;
				if (!sourceEffect) sourceEffect = this.battle.effect;
			}
			if (!source) source = this;
	
			if (this.status === status.id) {
				if ((sourceEffect as Move)?.status === this.status) {
					this.battle.add('-fail', this, this.status);
				} else if ((sourceEffect as Move)?.status) {
					this.battle.add('-fail', source);
					this.battle.attrLastMove('[still]');
				}
				return false;
			}
			
			if (source?.hasAbility('venomous') && status.id === 'psn') status = this.battle.dex.conditions.get('tox');

			if (!ignoreImmunities && status.id &&
					!(source?.hasAbility('corrosion') && ['tox', 'psn'].includes(status.id))) {
				// the game currently never ignores immunities
				if (!this.runStatusImmunity(status.id === 'tox' ? 'psn' : status.id)) {
					this.battle.debug('immune to status');
					if ((sourceEffect as Move)?.status) {
						this.battle.add('-immune', this);
					}
					return false;
				}
			}
			const prevStatus = this.status;
			const prevStatusState = this.statusState;
			if (status.id) {
				const result: boolean = this.battle.runEvent('SetStatus', this, source, sourceEffect, status);
				if (!result) {
					this.battle.debug('set status [' + status.id + '] interrupted');
					return result;
				}
			}
	
			this.status = status.id;
			this.statusState = {id: status.id, target: this};
			if (source) this.statusState.source = source;
			if (status.duration) this.statusState.duration = status.duration;
			if (status.durationCallback) {
				this.statusState.duration = status.durationCallback.call(this.battle, this, source, sourceEffect);
			}
	
			if (status.id && !this.battle.singleEvent('Start', status, this.statusState, this, source, sourceEffect)) {
				this.battle.debug('status start [' + status.id + '] interrupted');
				// cancel the setstatus
				this.status = prevStatus;
				this.statusState = prevStatusState;
				return false;
			}
			if (status.id && !this.battle.runEvent('AfterSetStatus', this, source, sourceEffect, status)) {
				return false;
			}
			return true;
		},
		formeChange(
			speciesId: string | Species, source: Effect | null = null,
			isPermanent?: boolean, message?: string
		) {
			const rawSpecies = this.battle.dex.species.get(speciesId);
	
			const species = this.setSpecies(rawSpecies, source);
			if (!species) return false;
	
			if (this.battle.gen <= 2) return true;
	
			// The species the opponent sees
			const apparentSpecies =
				this.illusion ? this.illusion.species.name : species.baseSpecies;
			if (isPermanent) {
				this.baseSpecies = rawSpecies;
				this.details = species.name + (this.level === 100 ? '' : ', L' + this.level) +
					(this.gender === '' ? '' : ', ' + this.gender) + (this.set.shiny ? ', shiny' : '');
				let details = (this.illusion || this).details;
				if (this.terastallized) details += `, tera:${this.terastallized}`;
				this.battle.add('detailschange', this, details);
				if (!source) {
					// Tera forme
					// Ogerpon/Terapagos text goes here
				} else if (source.effectType === 'Item') {
					this.canTerastallize = null; // National Dex behavior
					if (source.zMove) {
						this.battle.add('-burst', this, apparentSpecies, species.requiredItem);
						this.moveThisTurnResult = true; // Ultra Burst counts as an action for Truant
					} else if (source.onPrimal) {
						if (this.illusion) {
							this.ability = '';
							this.battle.add('-primal', this.illusion, species.requiredItem);
						} else {
							this.battle.add('-primal', this, species.requiredItem);
						}
					} else {
						this.battle.add('-mega', this, apparentSpecies, species.requiredItem);
						this.moveThisTurnResult = true; // Mega Evolution counts as an action for Truant
					}
				} else if (source.effectType === 'Status') {
					// Shaymin-Sky -> Shaymin
					this.battle.add('-formechange', this, species.name, message);
				}
			} else {
				if (source?.effectType === 'Ability') {
					this.battle.add('-formechange', this, species.name, message, `[from] ability: ${source.name}`);
				} else {
					this.battle.add('-formechange', this, this.illusion ? this.illusion.species.name : species.name, message);
				}
			}
			if (isPermanent && (!source || !['disguise', 'iceface', 'proteanmaxima'].includes(source.id))) {
				if (this.illusion) {
					this.ability = ''; // Don't allow Illusion to wear off
				}
				// Ogerpon's forme change doesn't override permanent abilities
				if (source || !this.getAbility().flags['cantsuppress']) this.setAbility(species.abilities['0'], null, true);
				// However, its ability does reset upon switching out
				this.baseAbility = Dex.toID(species.abilities['0']);
			}
			if (this.terastallized) {
				this.knownType = true;
				this.apparentType = this.terastallized;
			}
			return true;
		}
	},
};
