import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button[type][label]',
    template: `
        <button
            [attr.type]="type"
            class="bg-primary-dark text-primary uppercase border-2 border-primary px-2 active:text-secondary active:border-secondary"
        >
            <app-translator [key]="label" />
        </button>
    `,
})
export class ButtonComponent {
    @Input() type?: 'button' | 'reset' | 'submit';
    @Input() label?: string;
}
