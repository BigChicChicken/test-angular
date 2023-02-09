import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterStorageServiceInterface } from '../../@services/@storages/character-storage/character-storage.service';
import {
    CharacterForm,
    defaultCharacter,
} from '../../@forms/charater-form/character.form';
import {
    AutoSkillsMode,
    AutoSkillsServiceInterface,
} from '../../@services/auto-skills/auto-skills.service';
import { PdfServiceInterface } from '../../@services/pdf/pdf.service';

@Component({
    selector: 'app-character-editor',
    templateUrl: 'character-editor.component.html',
})
export class CharacterEditorComponent {
    characterList: FormControl;
    characterForm: CharacterForm;

    constructor(
        @Inject('CharacterStorageServiceInterface')
        private characterStorage: CharacterStorageServiceInterface,
        @Inject('AutoSkillsServiceInterface')
        private autoSkills: AutoSkillsServiceInterface,
        @Inject('PdfServiceInterface')
        private pdf: PdfServiceInterface
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

    onPdfClick(): void {
        const { character } = this.characterForm;

        this.pdf.download(
            new URL(
                './assets/pdf/character_sheet/character_sheet.fr.pdf',
                document.baseURI
            ),
            character.name,
            {
                name: character.name,
                role: character.role,
            }
        );
    }
}
