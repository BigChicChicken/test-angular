import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterEditorComponent } from './scenes/character-editor/character-editor.component';
import { CharacterListComponent } from './components/lists/character-list/character-list.component';
import { NumberInputComponent } from './components/inputs/number-input/number-input.component';
import { ResetButtonComponent } from './components/buttons/reset-button/reset-button.component';
import { SubmitButtonComponent } from './components/buttons/submit-button/submit-button.component';
import { TextInputComponent } from './components/inputs/textinput/text-input.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterEditorComponent,
        CharacterListComponent,
        NumberInputComponent,
        ResetButtonComponent,
        SubmitButtonComponent,
        TextInputComponent,
    ],
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
