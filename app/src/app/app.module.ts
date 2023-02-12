import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterEditorComponent } from './@scenes/character-editor/character-editor.component';
import { CharacterListComponent } from './@components/@lists/character-list/character-list.component';
import { GameToolsComponent } from './@scenes/game-tools/game-tools.component';
import { MenuComponent } from './@scenes/menu/menu.component';
import { MenuToggleComponent } from './@components/menu-toggle/menu-toggle.component';
import { NavButtonComponent } from './@components/@buttons/nav-button/nav-button.component';
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
import { MenuStorageService } from './@services/@storages/menu-storage/menu-storage.service';
import { LocaleStorageService } from './@services/@storages/locale-storage/locale-storage.service';
import { PdfService } from './@services/pdf/pdf.service';
import { TranslatorService } from './@services/translator/translator.service';

@NgModule({
    declarations: [
        AppComponent,
        CharacterEditorComponent,
        CharacterListComponent,
        GameToolsComponent,
        MenuComponent,
        MenuToggleComponent,
        NavButtonComponent,
        NumberInputComponent,
        ResetButtonComponent,
        SubmitButtonComponent,
        TextInputComponent,
        TranslatorComponent,
        SwitchLocaleComponent,
        RoleListComponent,
        ButtonComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
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
            provide: 'MenuStorageServiceInterface',
            useExisting: MenuStorageService,
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
