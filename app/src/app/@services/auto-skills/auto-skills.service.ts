import { Role, Skill, Skills } from '../../@entities/character/character';
import {
    Dice,
    DiceRollerServiceInterface,
} from '../dice-roller/dice-roller.service';
import { MatrixMissingError } from '../../@errors/matrix-missing/matrix-missing.error';
import RockerboyMatrix from './matrices/rockerboy.matrix.json';
import SoloMatrix from './matrices/solo.matrix.json';
import NetrunnerMatrix from './matrices/netrunner.matrix.json';
import TechieMatrix from './matrices/techie.matrix.json';
import MedtechMatrix from './matrices/medtech.matrix.json';
import MediaMatrix from './matrices/media.matrix.json';
import CorporateMatrix from './matrices/coporate.matrix.json';
import CopMatrix from './matrices/cop.matrix.json';
import FixerMatrix from './matrices/fixer.matrix.json';
import NomadMatrix from './matrices/nomad.matrix.json';
import { Inject, Injectable } from '@angular/core';

export enum AutoSkillsMode {
    Streetrat = 'streetrat',
    Edgerunner = 'edgerunner',
}

const Matrices = {
    [Role.Rockerboy]: RockerboyMatrix,
    [Role.Solo]: SoloMatrix,
    [Role.Netrunner]: NetrunnerMatrix,
    [Role.Techie]: TechieMatrix,
    [Role.Medtech]: MedtechMatrix,
    [Role.Media]: MediaMatrix,
    [Role.Corporate]: CorporateMatrix,
    [Role.Cop]: CopMatrix,
    [Role.Fixer]: FixerMatrix,
    [Role.Nomad]: NomadMatrix,
};

export interface AutoSkillsServiceInterface {
    generate(role: Role, mode: AutoSkillsMode): Skills;
}

@Injectable({
    providedIn: 'root',
})
export class AutoSkillsService implements AutoSkillsServiceInterface {
    constructor(
        @Inject('DiceRollerServiceInterface')
        private diceRoller: DiceRollerServiceInterface
    ) {}

    generate(role: Role, mode: AutoSkillsMode): Skills {
        if (!Object.hasOwn(Matrices, role)) {
            throw new MatrixMissingError(role);
        }

        switch (mode) {
            case AutoSkillsMode.Streetrat:
                return this.convertArrayToSkills(
                    Array.from(
                        { length: 10 },
                        (_, i) =>
                            Matrices[role][this.diceRoller.roll(Dice.D10) - 1][
                                i
                            ]
                    )
                );
            case AutoSkillsMode.Edgerunner:
                return this.convertArrayToSkills(
                    Matrices[role][this.diceRoller.roll(Dice.D10) - 1]
                );
        }
    }

    private convertArrayToSkills(values: number[]): Skills {
        if (values.length !== 10) {
            throw new Error('An array of 10 numbers is expected.');
        }

        return {
            [Skill.Intelligence]: values[0],
            [Skill.Reflexes]: values[1],
            [Skill.Dexterity]: values[2],
            [Skill.Technique]: values[3],
            [Skill.Cool]: values[4],
            [Skill.Will]: values[5],
            [Skill.Luck]: values[6],
            [Skill.Movement]: values[7],
            [Skill.Body]: values[8],
            [Skill.Empathy]: values[9],
        };
    }
}
