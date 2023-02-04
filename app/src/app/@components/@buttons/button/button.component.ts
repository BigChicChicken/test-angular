import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
        <button
            [type]="type"
            class="bg-primary-dark text-primary uppercase border-2 border-primary px-2"
        >
            <app-translator [key]="label" />
        </button>
    `,
})
export class ButtonComponent {
    @Input() type?: 'button' | 'reset' | 'submit';
    @Input() label?: string;
}
