import { DiceRollerMissingError } from '../../@errors/dice-roller-missing/dice-roller-missing.error';
import { Injectable } from '@angular/core';

export enum Dice {
    D6 = 'd6',
    D10 = 'd10',
}

export interface DiceRollerServiceInterface {
    roll(dice: Dice): number;
}

@Injectable({
    providedIn: 'root',
})
export class DiceRollerService implements DiceRollerServiceInterface {
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
