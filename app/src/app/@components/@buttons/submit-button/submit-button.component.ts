import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-submit-button[label]',
    template: `<app-button type="submit" [label]="label" />`,
})
export class SubmitButtonComponent {
    @Input() label?: string;
}
