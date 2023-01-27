import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-number-input',
    template: `
        <div class="grid grid-rows-2 text-primary focus-within:text-secondary">
            <label *ngIf="id && label" [for]="id">{{ label }}</label>
            <input
                [id]="id ?? ''"
                type="number"
                class="bg-primary-dark border-2 px-2 outline-none border-primary focus:border-secondary"
                [ngModel]="input"
                (ngModelChange)="onChange($event)"
                (blur)="onTouched()"
                [min]="min ?? ''"
                [max]="max ?? ''"
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
