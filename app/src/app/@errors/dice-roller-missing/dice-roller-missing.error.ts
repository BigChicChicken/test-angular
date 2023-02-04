import { Dice } from '../../@services/dice-roller/dice-roller.service';

export class DiceRollerMissingError extends Error {
    constructor(dice: Dice) {
        super(`Missing dice roller for: ${dice}.`);
    }
}
