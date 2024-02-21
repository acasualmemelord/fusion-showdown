export const Abilities: {[k: string]: ModdedAbilityData} = {
	consumerexchange: {
		onSourceDamagingHit(damage, target, source, move) {
			if (this.effectState.exchange) {
				const yourItem = target.takeItem(source);
				const myItem = source.takeItem();

				if (target.item || source.item || (!yourItem && !myItem)) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				if (
					(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
					(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
				) {
					if (yourItem) target.item = yourItem.id;
					if (myItem) source.item = myItem.id;
					return false;
				}
				this.add('-activate', source, 'ability: Consumer Exchange', '[of] ' + target);
				if (myItem) {
					target.setItem(myItem);
					this.add('-item', target, myItem, '[from] ability: Consumer Exchange');
				} else {
					this.add('-enditem', target, yourItem, '[silent]', '[from] ability: Consumer Exchange');
				}
				if (yourItem) {
					source.setItem(yourItem);
					this.add('-item', source, yourItem, '[from] ability: Consumer Exchange');
				} else {
					this.add('-enditem', source, myItem, '[silent]', '[from] ability: Consumer Exchange');
				}

				this.effectState.exchange = false;
			}
		},
		onSwitchIn(pokemon) {
			this.effectState.exchange = true;
		},
		flags: {},
		name: "Consumer Exchange",
		rating: 3,
		num: 0,
	},
	windywall: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				this.add('-immune', target, '[from] ability: Windy Wall');
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Windy Wall",
		rating: 3.5,
		num: 0,
	},
	fairylaw: {
		condition: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectState.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		flags: {},
		name: "Fairy Law",
		rating: 4,
		num: 0,
	},
	musclememory: {
		onBeforeSwitchOut(pokemon) {
			this.effectState.muscleStats = pokemon.boosts;
		},
		onStart(pokemon) {
			if (this.effectState.muscleStats) {
				this.add('-activate', pokemon, 'ability: Muscle Memory');
				this.boost(this.effectState.muscleStats, pokemon, pokemon);
			}
		},
		flags: {},
		name: "Muscle Memory",
		rating: 4,
		num: 0,
	},
	bushido: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (defender.newlySwitched || this.queue.willMove(defender)) {
				this.debug('Bushido damage boost');
				return this.chainModify(1.3);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (defender.newlySwitched || this.queue.willMove(defender)) {
				this.debug('Bushido damage boost');
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Bushido",
		rating: 4,
		num: 0,
	},
	slowlight: {
		onStart(source) {
			this.field.addPseudoWeather('gravity');
		},
		flags: {},
		name: "Slow Light",
		rating: 4.5,
		num: 0,
	},
	sandydefense: {
		onModifySpD(spd, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.5);
			}
		},
		onModifyDef(def, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.5);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		flags: {breakable: 1},
		name: "Sandy Defense",
		rating: 3,
		num: 0,
	},
	inertia: {
		onAnyModifyPriority(priority, pokemon) {
			if (pokemon.activeMoveActions === 0) return priority - 1;
		},
		flags: {},
		name: "Inertia",
		rating: 4.5,
		num: 0,
	},
	multishot: {
		onModifyMove(move, pokemon, target) {
			if (move.category !== "Special") return;
			move.multihit = [2, 5];
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.category === "Special") return this.chainModify([3, 10]);
		},
		flags: {},
		name: "Multishot",
		rating: 4.5,
		num: 0,
	},
};
