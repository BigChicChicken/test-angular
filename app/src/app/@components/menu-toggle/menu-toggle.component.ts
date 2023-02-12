import { Component, Inject, OnInit } from '@angular/core';
import {
    faBars,
    faChevronLeft,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { MenuStorageServiceInterface } from '../../@services/@storages/menu-storage/menu-storage.service';

@Component({
    selector: 'app-menu-toggle',
    template: `
        <div [attr.class]="class">
            <button
                class="bg-primary-dark text-primary border-2 border-primary w-14 h-14 m-4 rounded-full"
                type="button"
                (click)="toggle()"
            >
                <fa-icon class="fa-2x fa-fw" [icon]="icon"></fa-icon>
            </button>
        </div>
    `,
})
export class MenuToggleComponent implements OnInit {
    static DEFAULT_CLASS = 'transition-all duration-500 delay-100';

    class = MenuToggleComponent.DEFAULT_CLASS;
    icon: IconDefinition = faBars;

    constructor(
        @Inject('MenuStorageServiceInterface')
        private menuStorage: MenuStorageServiceInterface
    ) {}

    ngOnInit() {
        this.menuStorage.subject.subscribe((state) => {
            switch (state) {
                case 'open':
                    this.icon = faChevronLeft;
                    this.class = `${MenuToggleComponent.DEFAULT_CLASS} -translate-x-1/2`;
                    break;
                case 'close':
                    this.icon = faBars;
                    this.class = MenuToggleComponent.DEFAULT_CLASS;
                    break;
            }
        });
    }

    toggle() {
        this.menuStorage.toggle();
    }
}
