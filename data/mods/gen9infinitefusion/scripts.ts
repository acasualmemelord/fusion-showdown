const doublesTiers = {
	"DUber": ["regieleki", "urshifurapidstrike", "urshifu", "fluttermane", "xurkitree", "smeargle", "slaking", "blissey", "blacephalon", "darmanitangalar", "landorus", "latios", "latias", "naganadel", "pheromosa", "regigigas", "spectrier", "tapukoko", "tapulele", "kartana"], // Mythical, Restricted Legendary
	"DOU": ["zapdosgalar", "maushold", "thundurustherian", "tapubulu", "tapufini", "amoonguss", "archaludon", "chienpao", "chiyu", "cresselia", "diancie", "dragonite", "excadrill", "farigiraf", "gholdengo", "glimmora", "gougingfire", "grimmsnarl", "incineroar", "indeedeef", "ironhands", "ironjugulis", "ironmoth", "kingambit", "landorustherian", "nihilego", "ogerponhearthflame", "ogerponwellspring", "pelipper", "ragingbolt", "rillaboom", "sinistcha","stakataka", "torkoal", "tornadus", "tyranitar", "ursaluna", "walkingwake", "whimsicott", "porygon2", "dusclops", "sableye", "arcanine", "arcaninehisui", "armarouge", "baxcalibur", "brutebonnet", "ceruledge", "chandelure", "clefairy", "dragapult", "enamorus", "entei", "garganacl", "gastrodon", "hatterene", "hitmontop", "ironboulder", "ironbundle", "ninetalesalola", "palafin", "porygonz", "thundurus", "ursalunabloodmoon", "heatran", "regieleki", "goodrahisui", "ironvaliant", "lilligant", "lilliganthisui"],
	"DUU": ["bastiodon", "dracovish", "dracozolt", "tinkaton", "moltresgalar", "ironcrown", "gothitelle", "tornadustherian", "pecharunt", "volcanion", "abomasnow", "alcremie", "araquanid", "blastoise", "celesteela", "cobalion", "comfey", "conkeldurr", "empoleon", "feraligatr", "flygon", "galvantula", "garchomp", "gliscor", "golurk", "greattusk", "greninja", "guzzlord", "gyarados", "hariyama", "hitmonlee", "hydrapple", "indeedeem", "kleavor", "kingdra", "meowstic", "metagross", "murkrow", "ogerponcornerstone", "oranguru", "politoed", "ninetales", "rampardos", "raikou", "registeel", "reuniclus", "roaringmoon", "samurotthisui", "slowbro", "slowking", "slowkinggalar", "suicune", "sylveon", "zapdos", "ambipom", "arboliva", "barraskweda", "breloom", "bronzong", "tsareena", "cetitan", "cinderace", "clodsire", "coalossal", "corviknight", "daschbun", "dondozo", "dudunsparce", "eiscue", "enamorustherian", "espathra", "espeon", "falinks", "frosmoth", "gallade", "gardevoir", "gengar", "goodra", "haxorus", "heracross", "hydreigon", "klawf", "klefki", "lokix", "lucario", "ludicolo", "luxray", "lycanroc", "magnezone", "noivern", "orthworm", "screamtail", "sneasler", "talonflame", "tinglu", "wochien", "toxapex", "umbreon", "uxie", "vaporeon", "volcarona", "weavile", "weezing", "weezinggalar", "zoroarkhisui"],
};

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		for (const i in this.data.Pokedex) {
			const species = this.mod(this.parentMod).species.get(i);
			const baseSpecies = this.mod(this.parentMod).species.get(species.baseSpecies);
			let finalTier: TierTypes.Other | TierTypes.Doubles | undefined = "(DUU)";
			if ((!species.isNonstandard || species.isNonstandard === "Past" || species.isNonstandard === "Unobtainable") && species.natDexTier !== "Illegal") {
				if (doublesTiers["DUber"].includes(i) || baseSpecies.tags?.includes('Mythical') || baseSpecies.tags?.includes('Restricted Legendary')) {
					finalTier = "DUber";
				} else if (doublesTiers["DOU"].includes(i)) {
					finalTier = "DOU";
				} else if (doublesTiers["DUU"].includes(i)) {
					finalTier = "DUU";
				} else if (this.data.Pokedex[i].nfe && this.data.Pokedex[i].prevo) {
					finalTier = "NFE";
				} else if (this.data.Pokedex[i].nfe && !this.data.Pokedex[i].prevo) {
					finalTier = "LC";
				}
				if (this.data.FormatsData[i]) {
					this.data.FormatsData[i].doublesTier = finalTier;
				} else if (!this.data.FormatsData[i] && !this.data.FormatsData[baseSpecies.id]) {
					this.data.FormatsData[i] = {doublesTier: finalTier};
				}
			}
		}
	},
	pokemon: {
		transformInto(pokemon, effect) {
			const species = pokemon.species;
			if (pokemon.fainted || this.illusion || pokemon.illusion || (pokemon.volatiles['substitute'] && this.battle.gen >= 5) ||
				(pokemon.transformed && this.battle.gen >= 2) || (this.transformed && this.battle.gen >= 5) ||
				species.name === 'Eternatus-Eternamax' || (['Ogerpon', 'Terapagos'].includes(species.baseSpecies) &&
				(this.terastallized || pokemon.terastallized)) || this.terastallized === 'Stellar') {
				return false;
			}

			if (this.battle.dex.currentMod === 'gen1stadium' && (
				species.name === 'Ditto' ||
				(this.species.name === 'Ditto' && pokemon.moves.includes('transform'))
			)) {
				return false;
			}

			if (!this.setSpecies(species, effect, true)) return false;

			this.transformed = true;
			this.weighthg = pokemon.weighthg;

			const types = pokemon.getTypes(true, true);
			this.setType(pokemon.volatiles['roost'] ? pokemon.volatiles['roost'].typeWas : types, true);
			this.addedType = pokemon.addedType;
			this.knownType = this.isAlly(pokemon) && pokemon.knownType;
			this.apparentType = pokemon.apparentType;

			let statName: StatIDExceptHP;
			const statTable = (pokemon.ability === 'Stance Change' && pokemon.fusion) ? pokemon.baseStoredStats : pokemon.storedStats;
			for (statName in this.storedStats) {
				this.storedStats[statName] = statTable[statName];
				if (this.modifiedStats) this.modifiedStats[statName] = pokemon.modifiedStats![statName]; // Gen 1: Copy modified stats.
			}
			this.moveSlots = [];
			this.hpType = (this.battle.gen >= 5 ? this.hpType : pokemon.hpType);
			this.hpPower = (this.battle.gen >= 5 ? this.hpPower : pokemon.hpPower);
			this.timesAttacked = pokemon.timesAttacked;
			for (const moveSlot of pokemon.moveSlots) {
				let moveName = moveSlot.move;
				if (moveSlot.id === 'hiddenpower') {
					moveName = 'Hidden Power ' + this.hpType;
				}
				this.moveSlots.push({
					move: moveName,
					id: moveSlot.id,
					pp: moveSlot.maxpp === 1 ? 1 : 5,
					maxpp: this.battle.gen >= 5 ? (moveSlot.maxpp === 1 ? 1 : 5) : moveSlot.maxpp,
					target: moveSlot.target,
					disabled: false,
					used: false,
					virtual: true,
				});
			}
			let boostName: BoostID;
			for (boostName in pokemon.boosts) {
				this.boosts[boostName] = pokemon.boosts[boostName];
			}
			if (this.battle.gen >= 6) {
				const volatilesToCopy = ['dragoncheer', 'focusenergy', 'gmaxchistrike', 'laserfocus'];
				for (const volatile of volatilesToCopy) {
					if (pokemon.volatiles[volatile]) {
						this.addVolatile(volatile);
						if (volatile === 'gmaxchistrike') this.volatiles[volatile].layers = pokemon.volatiles[volatile].layers;
					} else {
						this.removeVolatile(volatile);
					}
				}
			}
			if (effect) {
				this.battle.add('-transform', this, pokemon, '[from] ' + effect.fullname);
			} else {
				this.battle.add('-transform', this, pokemon);
			}
			if (this.terastallized) {
				this.knownType = true;
				this.apparentType = this.terastallized;
			}
			if (this.battle.gen > 2) this.setAbility(pokemon.ability, this, true, true);

			// Change formes based on held items (for Transform)
			// Only ever relevant in Generation 4 since Generation 3 didn't have item-based forme changes
			if (this.battle.gen === 4) {
				if (this.species.num === 487) {
					// Giratina formes
					if (this.species.name === 'Giratina' && this.item === 'griseousorb') {
						this.formeChange('Giratina-Origin');
					} else if (this.species.name === 'Giratina-Origin' && this.item !== 'griseousorb') {
						this.formeChange('Giratina');
					}
				}
				if (this.species.num === 493) {
					// Arceus formes
					const item = this.getItem();
					const targetForme = (item?.onPlate ? 'Arceus-' + item.onPlate : 'Arceus');
					if (this.species.name !== targetForme) {
						this.formeChange(targetForme);
					}
				}
			}

			// Pokemon transformed into Ogerpon cannot Terastallize
			// restoring their ability to tera after they untransform is handled ELSEWHERE
			if (this.species.baseSpecies === 'Ogerpon' && this.canTerastallize) this.canTerastallize = false;
			if (this.species.baseSpecies === 'Terapagos' && this.canTerastallize) this.canTerastallize = false;

			return true;
		},
	},
};
