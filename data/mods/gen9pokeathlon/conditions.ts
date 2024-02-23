const treasures: {[k: string]: string} = {
	abilityshield: 'klutz',
	absorbbulb: 'waterabsorb',
	adrenalineorb: 'defiant',
	airballoon: 'windrider',
	amuletcoin: 'goodasgold',
	assaultvest: 'bulletproof',
	bigroot: 'sapsipper',
	bindingband: 'suctioncups',
	blackbelt: 'unseenfist',
	blackglasses: 'darkaura',
	blacksludge: 'liquidooze',
	blunderpolicy: 'hustle',
	brightpowder: 'dazzling',
	cellbattery: 'lightningrod',
	charcoal: 'drought',
	choiceband: 'toughclaws',
	choicescarf: 'bushido',
	choicespecs: 'tintedlens',
	clearamulet: 'unaware',
	covertcloak: 'magicguard',
	damprock: 'swiftswim',
	destinyknot: 'perishbody',
	dragonfang: 'dragonsmaw',
	ejectbutton: 'regenerator',
	ejectpack: 'clearbody',
	electricseed: 'electricsurge',
	eviolite: 'imposter',
	expertbelt: 'neuroforce',
	flameorb: 'flareboost',
	floatstone: 'levitate',
	focusband: 'stamina',
	focussash: 'angershell',
	grassyseed: 'grassysurge',
	gripclaw: 'persistent',
	heatrock: 'chlorophyll',
	heavydutyboots: 'mountaineer',
	icyrock: 'slushrush',
	ironball: 'slowlight',
	kingsrock: 'stench',
	laggingtail: 'stall',
	leftovers: 'harvest',
	lifeorb: 'sheerforce',
	lightclay: 'filter',
	loadeddice: 'superluck',
	luminousmoss: 'stormdrain',
	magnet: 'magnetpull',
	mail: 'consumerexchange',
	mentalherb: 'oblivious',
	metalcoat: 'filter',
	metronome: 'skilllink',
	miracleseed: 'overcoat',
	mirrorherb: 'opportunist',
	mistyseed: 'mistysurge',
	mysticwater: 'drizzle',
	nevermeltice: 'snowwarning',
	poisonbarb: 'poisontouch',
	powerherb: 'soulheart',
	protectivepads: 'rockhead',
	psychicseed: 'pyschicsurge',
	punchingglove: 'ironfist',
	quickclaw: 'quickdraw',
	razorclaw: 'sharpness',
	redcard: 'fairylaw',
	ringtarget: 'moldbreaker',
	rockyhelmet: 'ironbarbs',
	roomservice: 'inertia',
	safetygoggles: 'keeneye',
	scopelens: 'sniper',
	sharpbeak: 'galewings',
	shedshell: 'shedskin',
	shellbell: 'healer',
	silkscarf: 'adaptability',
	silverpowder: 'swarm',
	smoothrock: 'sandrush',
	softsand: 'sandstream',
	spelltag: 'cursedbody',
	stickybarb: 'fluffy',
	terrainextender: 'neutralizinggas',
	throatspray: 'punkrock',
	toxicorb: 'poisonheal',
	twistedspoon: 'analytic',
	utilityumbrella: 'cloudnine',
	weaknesspolicy: 'weakarmor',
	whiteherb: 'unburden',
	widelens: 'compoundeyes',
	wiseglasses: 'innerfocus',
	zoomlens: 'sniper',
};

export const Conditions: {[k: string]: ModdedConditionData} = {
	lunachi: {
		name: 'Lunachi',
		onUpdate(pokemon) {
			if (pokemon.baseAbility !== 'sacredtreasures') return;
			const curItem = pokemon.getItem();
			if (curItem.id in treasures) {
				const ability = this.dex.abilities.get(treasures[curItem.id]);
				if (pokemon.hasAbility(ability.name)) {
					return;
				} else {
					if (pokemon.species.id === 'lunachi') {
						pokemon.formeChange('lunachibestowed');
					}
					pokemon.setAbility(ability);
					this.add('-ability', pokemon, ability, '[from] ability: Sacred Treasures', '[of] ' + pokemon);
				}
			} else {
				if (pokemon.species.id === 'lunachibestowed') {
					pokemon.formeChange('lunachi');
					pokemon.setAbility('Sacred Treasures');
					this.add('-ability', pokemon, 'Sacred Treasures', '[from] ability: Sacred Treasures', '[of] ' + pokemon);
				}
			}
		},
	},
};
