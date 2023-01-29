import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { CharacterStorageService } from '../../../services/character-storage/character-storage.service';
import { Character } from '../../../entities/character/character';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-character-list',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="id && label" [for]="id">{{ label }}</label>
            <select
                [id]="id ?? ''"
                class="bg-primary-dark border-2 px-2 outline-none border-primary focus:border-secondary"
                [ngModel]="input"
                (ngModelChange)="onChange($event)"
                (blur)="onTouched()"
            >
                <option class="bg-primary-dark" value=""></option>
                <option
                    class="bg-primary-dark"
                    *ngFor="let character of characters"
                    [ngValue]="character"
                >
                    {{ character.name }}
                </option>
            </select>
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CharacterListComponent),
            multi: true,
        },
    ],
})
export class CharacterListComponent
    implements ControlValueAccessor, OnInit, OnDestroy
{
    @Input() id?: string;
    @Input() label?: string;
    input = '';
    characters: Character[] = [];
    onChange: any;
    onTouched: any;

    constructor(private characterStorageService: CharacterStorageService) {}

    ngOnInit(): void {
        this.characterStorageService.subject
            .pipe(map((storage) => Object.values(storage)))
            .subscribe((characters: Character[]) => {
                this.characters = characters;
            });
    }

    ngOnDestroy(): void {
        this.characterStorageService.subject.unsubscribe();
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(input: string) {
        this.input = input;
    }
}
