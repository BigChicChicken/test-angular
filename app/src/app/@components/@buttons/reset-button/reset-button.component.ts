import { Component } from '@angular/core';

@Component({
    selector: 'app-reset-button',
    template: `
        <button
            type="button"
            class="bg-primary-dark text-primary uppercase border-2 border-primary px-2"
        >
            <app-translator i18n-key="@@button.reset" key="Reset" />
        </button>
    `,
})
export class ResetButtonComponent {}
