const baseLearnsets = require('../../learnsets').Learnsets;
export const Learnsets: {[k: string]: ModdedLearnsetData} = {
	bulbmantle: {
		learnset: {
			...baseLearnsets.bulbasaur.learnset,
			...baseLearnsets.charmander.learnset,
			...baseLearnsets.squirtle.learnset,
		},
		eventData: [].concat (
			baseLearnsets.bulbasaur.eventData,
			baseLearnsets.charmander.eventData,
			baseLearnsets.squirtle.eventData,
		),
	},
	ivymelortle: {
		learnset: {
			...baseLearnsets.ivysaur.learnset,
			...baseLearnsets.charmeleon.learnset,
			...baseLearnsets.wartortle.learnset,
			...baseLearnsets.bulbasaur.learnset,
			...baseLearnsets.charmander.learnset,
			...baseLearnsets.squirtle.learnset,
		},
		eventData: [].concat (
			baseLearnsets.ivysaur.eventData,
			baseLearnsets.charmeleon.eventData,
			baseLearnsets.wartortle.eventData,
			baseLearnsets.bulbasaur.eventData,
			baseLearnsets.charmander.eventData,
			baseLearnsets.squirtle.eventData,
		),
	},
	venustoizard: {
		learnset: {
			...baseLearnsets.venusaur.learnset,
			...baseLearnsets.blastoise.learnset,
			...baseLearnsets.charizard.learnset,
			...baseLearnsets.ivysaur.learnset,
			...baseLearnsets.charmeleon.learnset,
			...baseLearnsets.wartortle.learnset,
			...baseLearnsets.bulbasaur.learnset,
			...baseLearnsets.charmander.learnset,
			...baseLearnsets.squirtle.learnset,
		},
		eventData: [].concat (
			baseLearnsets.venusaur.eventData,
			baseLearnsets.blastoise.eventData,
			baseLearnsets.charizard.eventData,
			baseLearnsets.ivysaur.eventData,
			baseLearnsets.charmeleon.eventData,
			baseLearnsets.wartortle.eventData,
			baseLearnsets.bulbasaur.eventData,
			baseLearnsets.charmander.eventData,
			baseLearnsets.squirtle.eventData,
		),
	},
	totoritaquil: {
		learnset: {
			...baseLearnsets.totodile.learnset,
			...baseLearnsets.chikorita.learnset,
			...baseLearnsets.cyndaquil.learnset,
		},
		eventData: [].concat (
			baseLearnsets.totodile.eventData,
			baseLearnsets.chikorita.eventData,
			baseLearnsets.cyndaquil.eventData,
		),
	},
	baylavanaw: {
		learnset: {
			...baseLearnsets.bayleef.learnset,
			...baseLearnsets.quilava.learnset,
			...baseLearnsets.croconaw.learnset,
			...baseLearnsets.totodile.learnset,
			...baseLearnsets.chikorita.learnset,
			...baseLearnsets.cyndaquil.learnset,
		},
		eventData: [].concat (
			baseLearnsets.bayleef.eventData,
			baseLearnsets.quilava.eventData,
			baseLearnsets.croconaw.eventData,
			baseLearnsets.totodile.eventData,
			baseLearnsets.chikorita.eventData,
			baseLearnsets.cyndaquil.eventData,
		),
	},
	megaligasion: {
		learnset: {
			...baseLearnsets.meganium.learnset,
			...baseLearnsets.feraligatr.learnset,
			...baseLearnsets.typhlosion.learnset,
			...baseLearnsets.bayleef.learnset,
			...baseLearnsets.quilava.learnset,
			...baseLearnsets.croconaw.learnset,
			...baseLearnsets.totodile.learnset,
			...baseLearnsets.chikorita.learnset,
			...baseLearnsets.cyndaquil.learnset,
		},
		eventData: [].concat (
			baseLearnsets.meganium.eventData,
			baseLearnsets.feraligatr.eventData,
			baseLearnsets.typhlosion.eventData,
			baseLearnsets.bayleef.eventData,
			baseLearnsets.quilava.eventData,
			baseLearnsets.croconaw.eventData,
			baseLearnsets.totodile.eventData,
			baseLearnsets.chikorita.eventData,
			baseLearnsets.cyndaquil.eventData,
		),
	},
	torkipcko: {
		learnset: {
			...baseLearnsets.torchic.learnset,
			...baseLearnsets.mudkip.learnset,
			...baseLearnsets.treecko.learnset,
		},
		eventData: [].concat (
			baseLearnsets.torchic.eventData,
			baseLearnsets.mudkip.eventData,
			baseLearnsets.treecko.eventData,
		),
	},
	gromarshken: {
		learnset: {
			...baseLearnsets.grovyle.learnset,
			...baseLearnsets.marshtomp.learnset,
			...baseLearnsets.combusken.learnset,
			...baseLearnsets.torchic.learnset,
			...baseLearnsets.mudkip.learnset,
			...baseLearnsets.treecko.learnset,
		},
		eventData: [].concat (
			baseLearnsets.grovyle.eventData,
			baseLearnsets.marshtomp.eventData,
			baseLearnsets.combusken.eventData,
			baseLearnsets.torchic.eventData,
			baseLearnsets.mudkip.eventData,
			baseLearnsets.treecko.eventData,
		),
	},
	swamptiliken: {
		learnset: {
			...baseLearnsets.swampert.learnset,
			...baseLearnsets.sceptile.learnset,
			...baseLearnsets.blaziken.learnset,
			...baseLearnsets.grovyle.learnset,
			...baseLearnsets.marshtomp.learnset,
			...baseLearnsets.combusken.learnset,
			...baseLearnsets.torchic.learnset,
			...baseLearnsets.mudkip.learnset,
			...baseLearnsets.treecko.learnset,
		},
		eventData: [].concat (
			baseLearnsets.swampert.eventData,
			baseLearnsets.sceptile.eventData,
			baseLearnsets.blaziken.eventData,
			baseLearnsets.grovyle.eventData,
			baseLearnsets.marshtomp.eventData,
			baseLearnsets.combusken.eventData,
			baseLearnsets.torchic.eventData,
			baseLearnsets.mudkip.eventData,
			baseLearnsets.treecko.eventData,
		),
	},
	turcharlup: {
		learnset: {
			...baseLearnsets.turtwig.learnset,
			...baseLearnsets.chimchar.learnset,
			...baseLearnsets.piplup.learnset,
		},
		eventData: [].concat (
			baseLearnsets.turtwig.eventData,
			baseLearnsets.chimchar.eventData,
			baseLearnsets.piplup.eventData,
		),
	},
	prinfernotle: {
		learnset: {
			...baseLearnsets.prinplup.learnset,
			...baseLearnsets.monferno.learnset,
			...baseLearnsets.grotle.learnset,
			...baseLearnsets.turtwig.learnset,
			...baseLearnsets.chimchar.learnset,
			...baseLearnsets.piplup.learnset,
		},
		eventData: [].concat (
			baseLearnsets.prinplup.eventData,
			baseLearnsets.monferno.eventData,
			baseLearnsets.grotle.eventData,
			baseLearnsets.turtwig.eventData,
			baseLearnsets.chimchar.eventData,
			baseLearnsets.piplup.eventData,
		),
	},
	torterneon: {
		learnset: {
			...baseLearnsets.torterra.learnset,
			...baseLearnsets.infernape.learnset,
			...baseLearnsets.empoleon.learnset,
			...baseLearnsets.prinplup.learnset,
			...baseLearnsets.monferno.learnset,
			...baseLearnsets.grotle.learnset,
			...baseLearnsets.turtwig.learnset,
			...baseLearnsets.chimchar.learnset,
			...baseLearnsets.piplup.learnset,
		},
		eventData: [].concat (
			baseLearnsets.torterra.eventData,
			baseLearnsets.infernape.eventData,
			baseLearnsets.empoleon.eventData,
			baseLearnsets.prinplup.eventData,
			baseLearnsets.monferno.eventData,
			baseLearnsets.grotle.eventData,
			baseLearnsets.turtwig.eventData,
			baseLearnsets.chimchar.eventData,
			baseLearnsets.piplup.eventData,
		),
	},
	zapmolticuno: {
		learnset: {
			...baseLearnsets.zapdos.learnset,
			...baseLearnsets.moltres.learnset,
			...baseLearnsets.articuno.learnset,
		},
		eventData: [].concat (
			baseLearnsets.zapdos.eventData,
			baseLearnsets.moltres.eventData,
			baseLearnsets.articuno.eventData,
		),
	},
	enraicune: {
		learnset: {
			...baseLearnsets.entei.learnset,
			...baseLearnsets.raikou.learnset,
			...baseLearnsets.suicune.learnset,
		},
		eventData: [].concat (
			baseLearnsets.entei.eventData,
			baseLearnsets.raikou.eventData,
			baseLearnsets.suicune.eventData,
		),
	},
	kyodonquaza: {
		learnset: {
			...baseLearnsets.kyogre.learnset,
			...baseLearnsets.groudon.learnset,
			...baseLearnsets.rayquaza.learnset,
		},
		eventData: [].concat (
			baseLearnsets.kyogre.eventData,
			baseLearnsets.groudon.eventData,
			baseLearnsets.rayquaza.eventData,
		),
	},
	paldiatina: {
		learnset: {
			...baseLearnsets.palkia.learnset,
			...baseLearnsets.dialga.learnset,
			...baseLearnsets.giratina.learnset,
		},
		eventData: [].concat (
			baseLearnsets.palkia.eventData,
			baseLearnsets.dialga.eventData,
			baseLearnsets.giratina.eventData,
		),
	},
	zekyushiram: {
		learnset: {
			...baseLearnsets.zekrom.learnset,
			...baseLearnsets.kyurem.learnset,
			...baseLearnsets.reshiram.learnset,
		},
		eventData: [].concat (
			baseLearnsets.zekrom.eventData,
			baseLearnsets.kyurem.eventData,
			baseLearnsets.reshiram.eventData,
		),
	},
	celemewchi: {
		learnset: {
			...baseLearnsets.celebi.learnset,
			...baseLearnsets.mew.learnset,
			...baseLearnsets.jirachi.learnset,
		},
		eventData: [].concat (
			baseLearnsets.celebi.eventData,
			baseLearnsets.mew.eventData,
			baseLearnsets.jirachi.eventData,
		),
	},
	regitrio: {
		learnset: {
			...baseLearnsets.registeel.learnset,
			...baseLearnsets.regirock.learnset,
			...baseLearnsets.regice.learnset,
		},
		eventData: [].concat (
			baseLearnsets.registeel.eventData,
			baseLearnsets.regirock.eventData,
			baseLearnsets.regice.eventData,
		),
	},
	deosectwo: {
		learnset: {
			...baseLearnsets.deoxys.learnset,
			...baseLearnsets.genesect.learnset,
			...baseLearnsets.mewtwo.learnset,
		},
		eventData: [].concat (
			baseLearnsets.deoxys.eventData,
			baseLearnsets.genesect.eventData,
			baseLearnsets.mewtwo.eventData,
		),
	},
};
