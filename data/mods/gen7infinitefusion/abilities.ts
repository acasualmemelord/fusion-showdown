const {Dex} = require('../../../sim/dex');
export const Abilities: {[k: string]: ModdedAbilityData} = Dex.deepClone(require('../gen9infinitefusion/abilities').Abilities);
