import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="id && label" [for]="id">{{ label }}</label>
            <input
                [id]="id ?? ''"
                type="text"
                class="bg-primary-dark border-2 px-2 outline-none border-primary focus:border-secondary"
                [ngModel]="input"
                (ngModelChange)="onChange($event)"
                (blur)="onTouched()"
            />
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextInputComponent),
            multi: true,
        },
    ],
})
export class TextInputComponent implements ControlValueAccessor {
    @Input() id?: string;
    @Input() label?: string;
    input = '';
    onChange: any;
    onTouched: any;

    registerOnChange(fn: any): void {
        this.onChange = (newValue: string) => {
            this.writeValue(newValue);
            fn(newValue);
        };
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(input: string): void {
        this.input = input;
    }
}
