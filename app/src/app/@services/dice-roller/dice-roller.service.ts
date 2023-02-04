import { Injectable } from '@angular/core';
import { DiceRollerMissingError } from '../../@errors/dice-roller-missing/dice-roller-missing.error';

export enum Dice {
    D6 = 'd6',
    D10 = 'd10',
}

@Injectable({
    providedIn: 'root',
})
export class DiceRollerService {
    roll(dice: Dice): number {
        switch (dice) {
            case Dice.D6:
                return this.randomNumber(1, 6);
            case Dice.D10:
                return this.randomNumber(1, 10);
            default:
                throw new DiceRollerMissingError(dice);
        }
    }

    private randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
