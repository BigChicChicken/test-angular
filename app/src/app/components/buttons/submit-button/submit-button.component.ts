import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    template:
        '<button type="submit" class="bg-primary-dark text-primary uppercase border-2 border-primary px-2">{{ label }}</button>',
})
export class SubmitButtonComponent {
    @Input() label?: string;
}
