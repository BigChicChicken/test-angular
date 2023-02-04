import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterStorageService } from '../../@services/@storages/character-storage/character-storage.service';
import {
    CharacterForm,
    defaultCharacter,
} from '../../@forms/charater-form/character.form';
import {
    AutoSkillsMode,
    AutoSkillsService,
} from '../../@services/auto-skills/auto-skills.service';

@Component({
    selector: 'app-character-editor',
    templateUrl: 'character-editor.component.html',
})
export class CharacterEditorComponent {
    characterList: FormControl;
    characterForm: CharacterForm;

    constructor(
        private characterStorage: CharacterStorageService,
        private autoSkills: AutoSkillsService
    ) {
        this.characterList = new FormControl();
        this.characterForm = new CharacterForm();
    }

    loadCharacter() {
        const { value } = this.characterList;

        this.characterForm.character = value !== '' ? value : defaultCharacter;
    }

    onStreetratClick() {
        const { character } = this.characterForm;

        this.characterForm.setValue({
            ...this.characterForm.getRawValue(),
            skills: this.autoSkills.generate(
                character.role,
                AutoSkillsMode.Streetrat
            ),
        });
    }

    onEdgerunnerClick() {
        const { character } = this.characterForm;

        this.characterForm.setValue({
            ...this.characterForm.getRawValue(),
            skills: this.autoSkills.generate(
                character.role,
                AutoSkillsMode.Edgerunner
            ),
        });
    }

    onSubmit(): void {
        this.characterStorage.push(this.characterForm.character);
    }
}
