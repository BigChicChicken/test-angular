import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterStorageService } from '../../services/character-storage/character-storage.service';
import {
    CharacterForm,
    defaultCharacter,
} from '../../forms/charater-form/character.form';

@Component({
    selector: 'app-character-editor',
    templateUrl: './character-editor.component.html',
})
export class CharacterEditorComponent {
    characterList: FormControl;
    characterForm: CharacterForm;

    constructor(private characterStorageService: CharacterStorageService) {
        this.characterList = new FormControl();
        this.characterForm = new CharacterForm();
    }

    loadCharacter() {
        const { value } = this.characterList;

        this.characterForm.character = value !== '' ? value : defaultCharacter;
    }

    onSubmit(): void {
        this.characterStorageService.push(this.characterForm.character);
    }
}
