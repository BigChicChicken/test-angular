import { v4 as uuid } from 'uuid';

export enum Role {
    Rockerboy = 'rockerboy',
    Solo = 'solo',
    Netrunner = 'netrunner',
    Techie = 'techie',
    Medtech = 'medtech',
    Media = 'media',
    Corporate = 'corporate',
    Cop = 'cop',
    Fixer = 'fixer',
    Nomad = 'nomad',
}

export enum Skill {
    Intelligence = 'intelligence',
    Reflexes = 'reflexes',
    Dexterity = 'dexterity',
    Technique = 'technique',
    Cool = 'cool',
    Will = 'will',
    Luck = 'luck',
    Movement = 'movement',
    Body = 'body',
    Empathy = 'empathy',
}

export class Character {
    private readonly _id: string = uuid();
    private readonly _version: string = '1.0';

    constructor(
        private _name: string = '',
        private _role: Role = Role.Rockerboy,
        private _skills: { [key in Skill]: number } = {
            [Skill.Intelligence]: 2,
            [Skill.Reflexes]: 2,
            [Skill.Dexterity]: 2,
            [Skill.Technique]: 2,
            [Skill.Cool]: 2,
            [Skill.Will]: 2,
            [Skill.Luck]: 2,
            [Skill.Movement]: 2,
            [Skill.Body]: 2,
            [Skill.Empathy]: 2,
        }
    ) {}

    get id(): string {
        return this._id;
    }

    get version(): string {
        return this._version;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get role(): Role {
        return this._role;
    }

    set role(role: Role) {
        this._role = role;
    }

    get skills() {
        return this._skills;
    }

    set skills(skills: { [key in Skill]: number }) {
        this._skills = skills;
    }
}
