import {
    Component,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { CharacterStorageServiceInterface } from '../../../@services/@storages/character-storage/character-storage.service';
import { Character } from '../../../@entities/character/character';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map } from 'rxjs';

@Component({
    selector: 'app-character-list',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="label" [attr.for]="id">
                <app-translator [key]="label" />
            </label>
            <select
                [attr.id]="id"
                class="bg-primary-dark border-2 border-primary px-2 outline-none focus:border-secondary"
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

    constructor(
        @Inject('CharacterStorageServiceInterface')
        private characterStorage: CharacterStorageServiceInterface
    ) {}

    ngOnInit(): void {
        this.characterStorage.subject
            .pipe(map((storage) => Object.values(storage)))
            .subscribe((characters: Character[]) => {
                this.characters = characters;
            });
    }

    ngOnDestroy(): void {
        this.characterStorage.subject.unsubscribe();
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
