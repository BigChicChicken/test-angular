import { Component } from '@angular/core';

@Component({
    selector: 'app-reset-button',
    template: `
        <app-button type="button" i18n-label="@@button.reset" label="Reset" />
    `,
})
export class ResetButtonComponent {}
