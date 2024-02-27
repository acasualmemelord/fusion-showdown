export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		const PoADex: {[k: string]: number} = {
			// "syclar": 5001,
			// "syclant": 5002,
			// "revenankh": 5003,
			// "embirch": 5004,
			// "flarelm": 5005,
			// "pyroak": 5006,
			// "breezi": 5007,
			// "fidgit": 5008,
			// "rebble": 5009,
			// "tactite": 5010,
			// "stratagem": 5011,
			// "privatyke": 5012,
			// "arghonaut": 5013,
			// "nohface": 5014,
			// "kitsunoh": 5015,
			// "monohm": 5016,
			// "duohm": 5017,
			// "cyclohm": 5018,
			// "dorsoil": 5019,
			// "colossoil": 5020,
			// "protowatt": 5021,
			// "krilowatt": 5022,
			// "voodoll": 5023,
			// "voodoom": 5024,
			// "scratchet": 5025,
			// "tomohawk": 5026,
			// "necturine": 5027,
			// "necturna": 5028,
			// "mollux": 5029,
			// "cupra": 5030,
			// "argalis": 5031,
			// "aurumoth": 5032,
			// "brattler": 5033,
			// "malaconda": 5034,
			// "cawdet": 5035,
			// "cawmodore": 5036,
			// "volkritter": 5037,
			// "volkraken": 5038,
			// "snugglow": 5039,
			// "plasmanta": 5040,
			// "floatoy": 5041,
			// "caimanoe": 5042,
			// "naviathan": 5043,
			// "crucibelle": 5044,
			// "crucibellemega": 5045,
			// "pluffle": 5046,
			// "kerfluffle": 5047,
			// "pajantom": 5048,
			// "mumbao": 5049,
			// "jumbao": 5050,
			// "fawnifer": 5051,
			// "electrelk": 5052,
			// "caribolt": 5053,
			// "smogecko": 50554,
			// "smoguana": 5055,
			// "smokomodo": 5056,
			// "swirlpool": 5057,
			// "coribalis": 5058,
			// "snaelstrom": 5059,
			// "justyke": 5060,
			// "equilibra": 5061,
			// "solotl": 5062,
			// "astrolotl": 5063,
			// "miasmite": 5064,
			// "miasmaw": 5065,
			// "chromera": 5066,
			// "venomicon": 5067,
			// "venomiconepilogue": 5068,
			// "saharascal": 5069,
			// "saharaja": 5070,
			// "ababo": 5071,
			// "scattervein": 5072,
			// "hemogoblin": 5073,
			// "cresceidon": 5074,
			"soulply": 6001,
			"imitotion": 6002,
			"aviotion": 6003,
			"dracotion": 6004,
			"bunnor": 6005,
			"rabbicicle": 6006,
			"enchantobra": 6007,
			"eyespy": 6008,
			"icyall": 6009,
			"ironeverlasting": 6010,
			"golisopodshogun": 768,
			"tinkatonrhinian": 959,
			"regimyo": 6011,
			"jovianshk": 6012,
			"lunachi": 6013,
			"ockthane": 6014,
			"incineroarolulian": 727,
			"raikousupra": 243,
			"heatransupra": 485,
			"mosster": 6015,
			"barrimander": 6016,
			"meditao": 6017,
			"electrodemega": 101,
			"florgesmega": 671,
			"bewitwing": 6018,
			"eidolburgh": 6019,
			"snorlaxfrost": 143,
			"snorlaxfrostmega": 143,
			"heracrosssubarctic": 214,
			"sirentom": 6020,
			"braskeptic": 6021,
			"maggony": 6022,
		};
		for (const i in this.data.Pokedex) {
			if (i in PoADex) {
				this.data.Pokedex[i].num = PoADex[i];
				delete this.data.Pokedex[i].isNonstandard;
			} else {
				delete this.data.Pokedex[i];
			}
		}
		for (const i in this.data.Moves) {
			if (this.data.Moves[i].isNonstandard === 'Past' || this.data.Moves[i].isNonstandard === 'Unobtainable') {
				delete this.data.Moves[i].isNonstandard;
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
		formeChange(speciesId, source, isPermanent, message) {
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
					(this.gender === '' ? '' : ', ' + this.gender) + (this.set.shiny ? ', shiny' : '') +
					(this.set.fusion ? ', fusion: ' + this.set.fusion : '');
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
			if (isPermanent && (!source || !['disguise', 'iceface'].includes(source.id))) {
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
		},
	},
};
