import { Component, Inject, OnInit } from '@angular/core';

import { MenuStorageServiceInterface } from '../../@services/@storages/menu-storage/menu-storage.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit {
    static DEFAULT_CLASS = 'transition-all duration-500 overflow-hidden';

    class = MenuComponent.DEFAULT_CLASS;

    constructor(
        @Inject('MenuStorageServiceInterface')
        private menuStorage: MenuStorageServiceInterface
    ) {}

    ngOnInit() {
        this.menuStorage.subject.subscribe((state) => {
            switch (state) {
                case 'open':
                    this.class = `${MenuComponent.DEFAULT_CLASS} max-w-prose`;
                    break;
                case 'close':
                    this.class = `${MenuComponent.DEFAULT_CLASS} max-w-0`;
                    break;
            }
        });
    }
}
