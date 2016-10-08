/*List of flags and their descriptions:authentic: Ignores a target's substitute.bite: Power is multiplied by 1.5 when used by a Pokemon with the Ability Strong Jaw.bullet: Has no effect on Pokemon with the Ability Bulletproof.charge: The user is unable to make a move between turns.contact: Makes contact.defrost: Thaws the user if executed successfully while the user is frozen.distance: Can target a Pokemon positioned anywhere in a Triple Battle.gravity: Prevented from being executed or selected during Gravity's effect.heal: Prevented from being executed or selected during Heal Block's effect.mirror: Can be copied by Mirror Move.nonsky: Prevented from being executed or selected in a Sky Battle.powder: Has no effect on Grass-type Pokemon, Pokemon with the Ability Overcoat, and Pokemon holding Safety Goggles.protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.pulse: Power is multiplied by 1.5 when used by a Pokemon with the Ability Mega Launcher.punch: Power is multiplied by 1.2 when used by a Pokemon with the Ability Iron Fist.recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.reflectable: Bounced back to the original user by Magic Coat or the Ability Magic Bounce.snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.sound: Has no effect on Pokemon with the Ability Soundproof.*/

'use strict';

exports.BattleMovedex = {
    "aircutter": {
        inherit: true,
        basePower: 110,
        critRatio: 1,
        accuracy: 85,
        //UNABLE TO DO 1.2x IF HITTING SINGLE FOE.
    },
    "razorwind": {
        inherit: true,
        type: "Flying",
        critRatio: 1,
        flags: {protect: 1, mirror: 1},
        desc: "Has a 10% chance to lower the foes special defense by 1.",
        shortDesc: "10% chance to lower foes spd by 1.",
        secondary: {
            chance: 10,
            target: {boosts: {spd: -1}},
        }
    },
    "focusblast": {
        inherit: true,
        basePower: 100,
        accuracy: 100
    },
    "aurasphere": {
        inherit: true,
        critRate: 2
    },
    "forcepalm": {
        inherit: true,
        basePower: 90,
        secondary: {
            chance: 15,
            status: "par",
        }
    },
    "closecombat": {
        inherit: true,
        basePower: 150,
        self: {
            boosts: {def: -1, spd: -1, spe: -1}
        }
    },
    "extremespeed": { //FAILED TO WORK
        inherit: true,
  		breaksProtection: true,
    },
    "toxic": {
        inherit: true,
        accuracy: 80
    },
    "wildcharge": {
        inherit: true,
        basePower: 120,
        recoil: [1, 3]
    },
    "xscissor": {
        inherit: true,
        basePower: 100,
        critRatio: 2,
    },
    "dragonrush": {
        inherit: true,
        basePower: 135,
        accuracy: 85,
        recoil: [1, 4],
        secondary: {
            chance: 10,
            volatileStatus: 'flinch'
        }
    }
}
