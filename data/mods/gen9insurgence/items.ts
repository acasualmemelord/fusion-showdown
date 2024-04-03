export const Items: {[k: string]: ModdedItemData} = {
	// Modded
	deepseascale: {
		inherit: true,
		onModifySpD(spd, pokemon) {
			if (['Clamperl', 'Clamperl-Delta'].includes(pokemon.baseSpecies.name)) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl", "Clamperl-Delta"],
	},
	deepseatooth: {
		inherit: true,
		onModifySpA(spa, pokemon) {
			if (['Clamperl', 'Clamperl-Delta'].includes(pokemon.baseSpecies.name)) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl", "Clamperl-Delta"],
	},
	lightball: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (['Pikachu', 'Pikachu-Delta'].includes(pokemon.baseSpecies.baseSpecies)) {
				return this.chainModify(2);
			}
		},
		onModifySpA(spa, pokemon) {
			if (['Pikachu', 'Pikachu-Delta'].includes(pokemon.baseSpecies.baseSpecies)) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikachu-Delta"],
	},
	metalpowder: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (['Ditto', 'Ditto-Delta'].includes(pokemon.species.name) && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto", "Ditto-Delta"],
	},
	quickpowder: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (['Ditto', 'Ditto-Delta'].includes(pokemon.species.name) && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto", "Ditto-Delta"],
	},

	// Additions
	crystalpiece: {
		name: "Crystal Piece",
		spritenum: 0,
		itemUser: ["Arceus", "Giratina", "Regigigas"],
		onSwitchIn(pokemon) {
			if (pokemon.isActive && ['Arceus', 'Giratina', 'Regigigas'].includes(pokemon.baseSpecies.name)) {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			if (['Arceus', 'Giratina', 'Regigigas'].includes(pokemon.baseSpecies.name)) {
				pokemon.formeChange(pokemon.baseSpecies.name + '-Primal', this.effect, true);
			}
		},
		onTakeItem(item, source) {
			return !['Arceus', 'Giratina', 'Regigigas'].includes(source.baseSpecies.baseSpecies);
		},
		num: 0,
	},
	flygonarmor: {
		name: "Flygon Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Flygon') || pokemon.baseSpecies.baseSpecies === 'Flygon');
		},
		forcedForme: "Flygon-Armor",
		itemUser: ["Flygon-Armor"],
		num: 0,
	},
	leavannyarmor: {
		name: "Leavanny Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Leavanny') || pokemon.baseSpecies.baseSpecies === 'Leavanny');
		},
		forcedForme: "Leavanny-Armor",
		itemUser: ["Leavanny-Armor"],
		num: 0,
	},
	mewtwoarmor: {
		name: "Mewtwo Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Mewtwo') || pokemon.baseSpecies.baseSpecies === 'Mewtwo');
		},
		forcedForme: "Mewtwo-Armor",
		itemUser: ["Mewtwo-Armor"],
		num: 0,
	},
	tyranitararmor: {
		name: "Tyranitar Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Tyranitar') || pokemon.baseSpecies.baseSpecies === 'Tyranitar');
		},
		forcedForme: "Tyranitar-Armor",
		itemUser: ["Tyranitar-Armor"],
		num: 0,
	},
	volcaronadeltaarmor: {
		name: "Volcarona-Delta Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Volcarona-Delta') || pokemon.baseSpecies.baseSpecies === 'Volcarona-Delta');
		},
		forcedForme: "Volcarona-Delta-Armor",
		itemUser: ["Volcarona-Delta-Armor"],
		num: 0,
	},
	zekromarmor: {
		name: "Zekrom Armor",
		spritenum: 0,
		onTakeItem(item, pokemon, source) {
			return !((source && source.baseSpecies.baseSpecies === 'Zekrom') || pokemon.baseSpecies.baseSpecies === 'Zekrom');
		},
		forcedForme: "Zekrom-Armor",
		itemUser: ["Zekrom-Armor"],
		num: 0,
	},

	// Mega Stones
	poliwrathite: {
		name: "Poliwrathite",
		spritenum: 0,
		megaStone: "Poliwrath-Mega",
		megaEvolves: "Poliwrath",
		itemUser: ["Poliwrath"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	marowakite: {
		name: "Marowakite",
		spritenum: 0,
		megaStone: "Marowak-Mega",
		megaEvolves: "Marowak",
		itemUser: ["Marowak"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	eevite: {
		name: "Eevite",
		spritenum: 0,
		megaStone: "Eevee-Mega",
		megaEvolves: "Eevee",
		itemUser: ["Eevee"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	mewtwonitex: {
		name: "Mewtwonite X",
		spritenum: 0,
		megaStone: "Mewtwo-Shadow",
		megaEvolves: "Mewtwo",
		itemUser: ["Mewtwo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	meganiumite: {
		name: "Meganiumite",
		spritenum: 0,
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		itemUser: ["Meganium"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	typhlosionite: {
		name: "Typhlosionite",
		spritenum: 0,
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		itemUser: ["Typhlosion"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	feraligatite: {
		name: "Feraligatite",
		spritenum: 0,
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		itemUser: ["Feraligatr"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	sudowoodite: {
		name: "Sudowoodite",
		spritenum: 0,
		megaStone: "Sudowoodo-Mega",
		megaEvolves: "Sudowoodo",
		itemUser: ["Sudowoodo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	politoedite: {
		name: "Politoedite",
		spritenum: 0,
		megaStone: "Politoed-Mega",
		megaEvolves: "Politoed",
		itemUser: ["Politoed"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	sunflorite: {
		name: "Sunflorite",
		spritenum: 0,
		megaStone: "Sunflora-Mega-M",
		megaEvolves: "Sunflora",
		itemUser: ["Sunflora"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	etigirafarigite: {
		name: "Etigirafarigite",
		spritenum: 0,
		megaStone: "Girafarig-Mega",
		megaEvolves: "Girafarig",
		itemUser: ["Girafarig"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	magcargonite: {
		name: "Magcargonite",
		spritenum: 0,
		megaStone: "Magcargo-Mega",
		megaEvolves: "Magcargo",
		itemUser: ["Magcargo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	donphanite: {
		name: "Donphanite",
		spritenum: 0,
		megaStone: "Donphan-Mega",
		megaEvolves: "Donphan",
		itemUser: ["Donphan"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	miltankite: {
		name: "Miltankite",
		spritenum: 0,
		megaStone: "Miltank-Mega",
		megaEvolves: "Miltank",
		itemUser: ["Miltank"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	shiftrite: {
		name: "Shiftrite",
		spritenum: 0,
		megaStone: "Shiftry-Mega",
		megaEvolves: "Shiftry",
		itemUser: ["Shiftry"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 0,
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	cacturnite: {
		name: "Cacturnite",
		spritenum: 0,
		megaStone: "Cacturne-Mega",
		megaEvolves: "Cacturne",
		itemUser: ["Cacturne"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	crawdauntite: {
		name: "Crawdauntite",
		spritenum: 0,
		megaStone: "Crawdaunt-Mega",
		megaEvolves: "Crawdaunt",
		itemUser: ["Crawdaunt"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	milotite: {
		name: "Milotite",
		spritenum: 0,
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		itemUser: ["Milotic"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	jirachite: {
		name: "Jirachite",
		spritenum: 0,
		megaStone: "Jirachi-Mega",
		megaEvolves: "Jirachi",
		itemUser: ["Jirachi"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	chatotite: {
		name: "Chatotite",
		spritenum: 0,
		megaStone: "Chatot-Mega",
		megaEvolves: "Chatot",
		itemUser: ["Chatot"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	spiritombite: {
		name: "Spiritombite",
		spritenum: 0,
		megaStone: "Spiritomb-Mega",
		megaEvolves: "Spiritomb",
		itemUser: ["Spiritomb"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	froslassite: {
		name: "Froslassite",
		spritenum: 0,
		megaStone: "Froslass-Mega",
		megaEvolves: "Froslass",
		itemUser: ["Froslass"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	zebstrikite: {
		name: "Zebstrikite",
		spritenum: 0,
		megaStone: "Zebstrika-Mega",
		megaEvolves: "Zebstrika",
		itemUser: ["Zebstrika"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	zoronite: {
		name: "Zoronite",
		spritenum: 0,
		megaStone: "Zoroark-Mega",
		megaEvolves: "Zoroark",
		itemUser: ["Zoroark"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	gothitite: {
		name: "Gothitite",
		spritenum: 0,
		megaStone: "Gothitelle-Mega",
		megaEvolves: "Gothitelle",
		itemUser: ["Gothitelle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	reuniclite: {
		name: "Reuniclite",
		spritenum: 0,
		megaStone: "Reuniclus-Mega",
		megaEvolves: "Reuniclus",
		itemUser: ["Reuniclus"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	haxorite: {
		name: "Haxorite",
		spritenum: 0,
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		itemUser: ["Haxorus"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	cryogonalite: {
		name: "Cryogonalite",
		spritenum: 0,
		megaStone: "Cryogonal-Mega",
		megaEvolves: "Cryogonal",
		itemUser: ["Cryogonal"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	stunfiskite: {
		name: "Stunfiskite",
		spritenum: 0,
		megaStone: "Stunfisk-Mega",
		megaEvolves: "Stunfisk",
		itemUser: ["Stunfisk"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	bisharpite: {
		name: "Bisharpite",
		spritenum: 0,
		megaStone: "Bisharp-Mega",
		megaEvolves: "Bisharp",
		itemUser: ["Bisharp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	hydreigonite: {
		name: "Hydreigonite",
		spritenum: 0,
		megaStone: "Hydreigon-Mega",
		megaEvolves: "Hydreigon",
		itemUser: ["Hydreigon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltavenusaurite: {
		name: "Delta Venusaurite",
		spritenum: 0,
		megaStone: "Venusaur-Delta-Mega",
		megaEvolves: "Venusaur-Delta",
		itemUser: ["Venusaur-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltacharizardite: {
		name: "Delta Charizardite",
		spritenum: 0,
		megaStone: "Charizard-Delta-Mega",
		megaEvolves: "Charizard-Delta",
		itemUser: ["Charizard-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltablastoisinite: {
		name: "Delta Blastoisinite",
		spritenum: 0,
		megaStone: "Blastoise-Delta-Mega",
		megaEvolves: "Blastoise-Delta",
		itemUser: ["Blastoise-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltabisharpite: {
		name: "Delta Bisharpite",
		spritenum: 0,
		megaStone: "Bisharp-Delta-Mega",
		megaEvolves: "Bisharp-Delta",
		itemUser: ["Bisharp-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltagardevoirite: {
		name: "Delta Gardevoirite",
		spritenum: 0,
		megaStone: "Gardevoir-Delta-Mega",
		megaEvolves: "Gardevoir-Delta",
		itemUser: ["Gardevoir-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltagalladite: {
		name: "Delta Galladite",
		spritenum: 0,
		megaStone: "Gallade-Delta-Mega",
		megaEvolves: "Gallade-Delta",
		itemUser: ["Gallade-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltasunflorite: {
		name: "Delta Sunflorite",
		spritenum: 0,
		megaStone: "Sunflora-Delta-Mega",
		megaEvolves: "Sunflora-Delta",
		itemUser: ["Sunflora-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltascizorite: {
		name: "Delta Scizorite",
		spritenum: 0,
		megaStone: "Scizor-Delta-Mega",
		megaEvolves: "Scizor-Delta",
		itemUser: ["Scizor-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltaglalitite: {
		name: "Delta Glalitite",
		spritenum: 0,
		megaStone: "Glalie-Delta-Mega",
		megaEvolves: "Glalie-Delta",
		itemUser: ["Glalie-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltafroslassite: {
		name: "Delta Froslassite",
		spritenum: 0,
		megaStone: "Froslass-Delta-Mega",
		megaEvolves: "Froslass-Delta",
		itemUser: ["Froslass-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltatyphlosionite: {
		name: "Delta Typhlosionite",
		spritenum: 0,
		megaStone: "Typhlosion-Delta-Mega",
		megaEvolves: "Typhlosion-Delta",
		itemUser: ["Typhlosion-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltapidgeotite: {
		name: "Delta Pidgeotite",
		spritenum: 0,
		megaStone: "Pidgeot-Delta-Mega",
		megaEvolves: "Pidgeot-Delta",
		itemUser: ["Pidgeot-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltagirafarigite: {
		name: "Delta Girafarigite",
		spritenum: 0,
		megaStone: "Girafarig-Delta-Mega",
		megaEvolves: "Girafarig-Delta",
		itemUser: ["Girafarig-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltasablenite: {
		name: "Delta Sablenite",
		spritenum: 0,
		megaStone: "Sableye-Delta-Mega",
		megaEvolves: "Sableye-Delta",
		itemUser: ["Sableye-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltamawilite: {
		name: "Delta Mawilite",
		spritenum: 0,
		megaStone: "Mawile-Delta-Mega",
		megaEvolves: "Mawile-Delta",
		itemUser: ["Mawile-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltamedichamite: {
		name: "Delta Medichamite",
		spritenum: 0,
		megaStone: "Medicham-Delta-Mega",
		megaEvolves: "Medicham-Delta",
		itemUser: ["Medicham-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltacameruptite: {
		name: "Delta Cameruptite",
		spritenum: 0,
		megaStone: "Camerupt-Delta-Mega",
		megaEvolves: "Camerupt-Delta",
		itemUser: ["Camerupt-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltamilotite: {
		name: "Delta Milotite",
		spritenum: 0,
		megaStone: "Milotic-Delta-Mega",
		megaEvolves: "Milotic-Delta",
		itemUser: ["Milotic-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltametagrossitespider: {
		name: "Delta Metagrossite (Spider)",
		spritenum: 0,
		megaStone: "Metagross-Delta-Spider-Mega",
		megaEvolves: "Metagross-Delta-Spider",
		itemUser: ["Metagross-Delta-Spider"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltametagrossiteruin: {
		name: "Delta Metagrossite (Ruin)",
		spritenum: 0,
		megaStone: "Metagross-Delta-Ruin-Mega",
		megaEvolves: "Metagross-Delta-Ruin",
		itemUser: ["Metagross-Delta-Ruin"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltalopunnite: {
		name: "Delta Lopunnite",
		spritenum: 0,
		megaStone: "Lopunny-Delta-Mega",
		megaEvolves: "Lopunny-Delta",
		itemUser: ["Lopunny-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
	deltalucarionite: {
		name: "Delta Lucarionite",
		spritenum: 0,
		megaStone: "Lucario-Delta-Mega",
		megaEvolves: "Lucario-Delta",
		itemUser: ["Lucario-Delta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 0,
	},
};
