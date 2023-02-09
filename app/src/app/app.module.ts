import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterEditorComponent } from './@scenes/character-editor/character-editor.component';
import { CharacterListComponent } from './@components/@lists/character-list/character-list.component';
import { HeaderComponent } from './@scenes/header/header.component';
import { NumberInputComponent } from './@components/@inputs/number-input/number-input.component';
import { ResetButtonComponent } from './@components/@buttons/reset-button/reset-button.component';
import { SubmitButtonComponent } from './@components/@buttons/submit-button/submit-button.component';
import { TextInputComponent } from './@components/@inputs/text-input/text-input.component';
import { TranslatorComponent } from './@components/translator/translator.component';
import { SwitchLocaleComponent } from './@components/switch-locale/switch-locale.component';
import { RoleListComponent } from './@components/@lists/role-list/role-list.component';
import { ButtonComponent } from './@components/@buttons/button/button.component';

import { AutoSkillsService } from './@services/auto-skills/auto-skills.service';
import { CharacterStorageService } from './@services/@storages/character-storage/character-storage.service';
import { DiceRollerService } from './@services/dice-roller/dice-roller.service';
import { LocaleStorageService } from './@services/@storages/locale-storage/locale-storage.service';
import { PdfService } from './@services/pdf/pdf.service';
import { TranslatorService } from './@services/translator/translator.service';

@NgModule({
    declarations: [
        AppComponent,
        CharacterEditorComponent,
        CharacterListComponent,
        HeaderComponent,
        NumberInputComponent,
        ResetButtonComponent,
        SubmitButtonComponent,
        TextInputComponent,
        TranslatorComponent,
        SwitchLocaleComponent,
        RoleListComponent,
        ButtonComponent,
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [
        {
            provide: 'AutoSkillsServiceInterface',
            useExisting: AutoSkillsService,
        },
        {
            provide: 'CharacterStorageServiceInterface',
            useExisting: CharacterStorageService,
        },
        {
            provide: 'DiceRollerServiceInterface',
            useExisting: DiceRollerService,
        },
        {
            provide: 'LocaleStorageServiceInterface',
            useExisting: LocaleStorageService,
        },
        {
            provide: 'PdfServiceInterface',
            useExisting: PdfService,
        },
        {
            provide: 'TranslatorServiceInterface',
            useExisting: TranslatorService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
