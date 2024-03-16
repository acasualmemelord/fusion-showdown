const baseLearnsets = require('../../learnsets').Learnsets;

function flattenLearnset(learnset: ModdedLearnsetData,removals: string[] = [],additions: string[] = []) {
	let finalLearnset: ModdedLearnsetData = {learnset: {}};
	let moves = learnset.learnset;
	if (finalLearnset.learnset) {
		for (const move in moves) {
			if (!removals.includes(move)) {
				finalLearnset.learnset[move] = ["9M"];
			}
		}
		for (const addition of additions) {
			if (!(addition in finalLearnset.learnset)) {
				finalLearnset.learnset[addition] = ["9M"];
			}
		}
	}
	return finalLearnset;
}

export const Learnsets: {[k: string]: ModdedLearnsetData} = {
};
