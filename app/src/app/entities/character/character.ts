import { CharacterParseError } from '../../errors/character-parse/character-parse.error';

export enum Skills {
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
    private _version = '1.0';

    constructor(
        private _name: string = '',
        private _skills: { [key in Skills]: number } = {
            [Skills.Intelligence]: 3,
            [Skills.Reflexes]: 3,
            [Skills.Dexterity]: 3,
            [Skills.Technique]: 3,
            [Skills.Cool]: 3,
            [Skills.Will]: 3,
            [Skills.Luck]: 3,
            [Skills.Movement]: 3,
            [Skills.Body]: 3,
            [Skills.Empathy]: 3,
        }
    ) {}

    get version(): string {
        return this._version;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get skills() {
        return this._skills;
    }

    set skills(skills: { [key in Skills]: number }) {
        this._skills = skills;
    }

    toJson(): string {
        return JSON.stringify(this);
    }

    static fromJson(value: string): Character {
        let data = [];
        try {
            data = JSON.parse(value);
        } catch (error) {
            throw new CharacterParseError(`"${value}" isn't a valid JSON.`);
        }

        return new Character(data?._name, data?._skills);
    }
}
