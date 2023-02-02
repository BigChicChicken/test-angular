import { FormControl, FormGroup } from '@angular/forms';
import { Character, Skill } from '../../@entities/character/character';

export const defaultCharacter = new Character();

export class CharacterForm extends FormGroup {
    private _backup: any;

    constructor(private _character: Character = defaultCharacter) {
        super({
            name: new FormControl(),
            role: new FormControl(),
            skills: new FormGroup(
                Object.fromEntries(
                    Object.values(Skill).map((skill) => [
                        skill,
                        new FormControl(),
                    ])
                )
            ),
        });

        this.initialiseValues();
        this.subscribe();
    }

    private initialiseValues() {
        this.setValue({
            name: this._character.name,
            role: this._character.role,
            skills: Object.fromEntries(
                Object.values(Skill).map((skill) => [
                    skill,
                    this._character.skills[skill],
                ])
            ),
        });

        this._backup = this.getRawValue();
    }

    private subscribe() {
        this.controls['name'].valueChanges.subscribe(
            (value) => (this._character.name = value)
        );

        this.controls['role'].valueChanges.subscribe(
            (value) => (this._character.role = value)
        );

        this.controls['skills'].valueChanges.subscribe(
            (value) => (this._character.skills = value)
        );
    }

    get character(): Character {
        return this._character;
    }

    set character(character: Character) {
        this._character = character;
        this.initialiseValues();
    }

    override reset() {
        super.reset(this._backup);
    }
}
