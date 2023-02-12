import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-number-input',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="label" [attr.for]="id">
                <app-translator [key]="label" />
            </label>
            <input
                [attr.id]="id"
                type="number"
                class="bg-primary-dark border-2 border-primary px-2 outline-none focus:border-secondary"
                [ngModel]="input"
                (ngModelChange)="onChange($event)"
                (blur)="onTouched()"
                [attr.min]="min"
                [attr.max]="max"
            />
        </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberInputComponent),
            multi: true,
        },
    ],
})
export class NumberInputComponent implements ControlValueAccessor {
    @Input() id?: string;
    @Input() label?: string;
    @Input() min?: number;
    @Input() max?: number;
    input = 0;
    onChange: any;
    onTouched: any;

    registerOnChange(fn: any): void {
        this.onChange = (newValue: number) => {
            this.writeValue(newValue);
            fn(newValue);
        };
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(input: number): void {
        this.input = input;
    }
}
