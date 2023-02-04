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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
