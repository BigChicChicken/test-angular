import { Injectable } from '@angular/core';
import { Role, Skill, Skills } from '../../@entities/character/character';
import { Dice, DiceRollerService } from '../dice-roller/dice-roller.service';
import { MatrixMissingError } from '../../@errors/matrix-missing/matrix-missing.error';
import RockerboyMatrix from './matrix/rockerboy.matrix.json';
import SoloMatrix from './matrix/solo.matrix.json';
import NetrunnerMatrix from './matrix/netrunner.matrix.json';
import TechieMatrix from './matrix/techie.matrix.json';
import MedtechMatrix from './matrix/medtech.matrix.json';
import MediaMatrix from './matrix/media.matrix.json';
import CorporateMatrix from './matrix/coporate.matrix.json';
import CopMatrix from './matrix/cop.matrix.json';
import FixerMatrix from './matrix/fixer.matrix.json';
import NomadMatrix from './matrix/nomad.matrix.json';

export enum AutoSkillsMode {
    Streetrat = 'streetrat',
    Edgerunner = 'edgerunner',
}

const matrices = {
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

@Injectable({
    providedIn: 'root',
})
export class AutoSkillsService {
    constructor(private diceRoller: DiceRollerService) {}

    generate(role: Role, mode: AutoSkillsMode): Skills {
        if (!Object.hasOwn(matrices, role)) {
            throw new MatrixMissingError(role);
        }

        switch (mode) {
            case AutoSkillsMode.Streetrat:
                return this.convertArrayToSkills(
                    Array.from(
                        { length: 10 },
                        (_, i) =>
                            matrices[role][this.diceRoller.roll(Dice.D10) - 1][
                                i
                            ]
                    )
                );
            case AutoSkillsMode.Edgerunner:
                return this.convertArrayToSkills(
                    matrices[role][this.diceRoller.roll(Dice.D10) - 1]
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
