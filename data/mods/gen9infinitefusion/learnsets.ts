const baseLearnsets = require('../../learnsets').Learnsets;
export const Learnsets: {[k: string]: ModdedLearnsetData} = {
	bulbmantle: {
		learnset: {
			...baseLearnsets.bulbasaur.learnset,
			...baseLearnsets.charmander.learnset,
			...baseLearnsets.squirtle.learnset,
		}
	},
	ivymelortle: {
		learnset: {
			...baseLearnsets.ivysaur.learnset,
			...baseLearnsets.charmeleon.learnset,
			...baseLearnsets.wartortle.learnset,
		}
	},
	venustoizard: {
		learnset: {
			...baseLearnsets.venusaur.learnset,
			...baseLearnsets.blastoise.learnset,
			...baseLearnsets.charizard.learnset,
		}
	},
	totoritaquil: {
		learnset: {
			...baseLearnsets.totodile.learnset,
			...baseLearnsets.chikorita.learnset,
			...baseLearnsets.cyndaquil.learnset,
		}
	},
	baylavanaw: {
		learnset: {
			...baseLearnsets.bayleef.learnset,
			...baseLearnsets.quilava.learnset,
			...baseLearnsets.croconaw.learnset,
		}
	},
	megaligasion: {
		learnset: {
			...baseLearnsets.meganium.learnset,
			...baseLearnsets.feraligatr.learnset,
			...baseLearnsets.typhlosion.learnset,
		}
	},
	torkipcko: {
		learnset: {
			...baseLearnsets.torchic.learnset,
			...baseLearnsets.mudkip.learnset,
			...baseLearnsets.treecko.learnset,
		}
	},
	gromarshken: {
		learnset: {
			...baseLearnsets.grovyle.learnset,
			...baseLearnsets.marshtomp.learnset,
			...baseLearnsets.combusken.learnset,
		}
	},
	swamptiliken: {
		learnset: {
			...baseLearnsets.swampert.learnset,
			...baseLearnsets.sceptile.learnset,
			...baseLearnsets.blaziken.learnset,
		}
	},
	turcharlup: {
		learnset: {
			...baseLearnsets.turtwig.learnset,
			...baseLearnsets.chimchar.learnset,
			...baseLearnsets.piplup.learnset,
		}
	},
	prinfernotle: {
		learnset: {
			...baseLearnsets.prinplup.learnset,
			...baseLearnsets.monferno.learnset,
			...baseLearnsets.grotle.learnset,
		}
	},
	torterneon: {
		learnset: {
			...baseLearnsets.torterra.learnset,
			...baseLearnsets.infernape.learnset,
			...baseLearnsets.empoleon.learnset,
		}
	},
	zapmolticuno: {
		learnset: {
			...baseLearnsets.zapdos.learnset,
			...baseLearnsets.moltres.learnset,
			...baseLearnsets.articuno.learnset,
		}
	},
	enraicune: {
		learnset: {
			...baseLearnsets.entei.learnset,
			...baseLearnsets.raikou.learnset,
			...baseLearnsets.suicune.learnset,
		}
	},
	kyodonquaza: {
		learnset: {
			...baseLearnsets.kyogre.learnset,
			...baseLearnsets.groudon.learnset,
			...baseLearnsets.rayquaza.learnset,
		}
	},
	paldiatina: {
		learnset: {
			...baseLearnsets.palkia.learnset,
			...baseLearnsets.dialga.learnset,
			...baseLearnsets.giratina.learnset,
		}
	},
	zekyushiram: {
		learnset: {
			...baseLearnsets.zekrom.learnset,
			...baseLearnsets.kyurem.learnset,
			...baseLearnsets.reshiram.learnset,
		}
	},
	celemewchi: {
		learnset: {
			...baseLearnsets.celebi.learnset,
			...baseLearnsets.mew.learnset,
			...baseLearnsets.jirachi.learnset,
		}
	},
	regitrio: {
		learnset: {
			...baseLearnsets.registeel.learnset,
			...baseLearnsets.regirock.learnset,
			...baseLearnsets.regice.learnset,
		}
	},
	deosectwo: {
		learnset: {
			...baseLearnsets.deoxys.learnset,
			...baseLearnsets.genesect.learnset,
			...baseLearnsets.mewtwo.learnset,
		}
	},
};