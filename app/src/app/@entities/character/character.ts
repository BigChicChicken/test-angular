import { CharacterParseError } from '../../@errors/character-parse/character-parse.error';
import { v4 as uuid } from 'uuid';

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
    private readonly _id: string = uuid();
    private readonly _version: string = '1.0';

    constructor(
        private _name: string = '',
        private _type: string = '',
        private _skills: { [key in Skills]: number } = {
            [Skills.Intelligence]: 2,
            [Skills.Reflexes]: 2,
            [Skills.Dexterity]: 2,
            [Skills.Technique]: 2,
            [Skills.Cool]: 2,
            [Skills.Will]: 2,
            [Skills.Luck]: 2,
            [Skills.Movement]: 2,
            [Skills.Body]: 2,
            [Skills.Empathy]: 2,
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

    get skills() {
        return this._skills;
    }

    set skills(skills: { [key in Skills]: number }) {
        this._skills = skills;
    }

    static fromJson(value: string): Character {
        let data = [];
        try {
            data = JSON.parse(value);
        } catch (error) {
            throw new CharacterParseError(value);
        }

        const character = new Character(data?._name, data?._skills);
        Object.assign(character, { _id: data?._id, _version: data?._version });

        return character;
    }
}
