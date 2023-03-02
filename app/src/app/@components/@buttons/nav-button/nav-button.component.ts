import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav-button[label][routerLink]',
    template: `
        <a
            *ngIf="label"
            class="block text-center bg-primary-dark text-primary uppercase border-2 border-primary px-2"
            [routerLink]="routerLink"
            routerLinkActive="text-secondary border-secondary"
        >
            <app-translator [key]="label" />
        </a>
    `,
})
export class NavButtonComponent {
    @Input() label?: string;
    @Input() routerLink?: string;
}
