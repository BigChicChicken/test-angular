import { Component, Inject, OnInit } from '@angular/core';
import { LocaleStorageServiceInterface } from '../../@services/@storages/locale-storage/locale-storage.service';

@Component({
    selector: 'app-switch-locale',
    template: `
        <select
            class="bg-primary-dark border-2 border-primary px-2 outline-none text-primary focus:text-secondary focus:border-secondary"
            (change)="onChange($event)"
            [value]="value"
        >
            <option value="en">EN</option>
            <option value="fr">FR</option>
        </select>
    `,
})
export class SwitchLocaleComponent implements OnInit {
    value = 'en';

    constructor(
        @Inject('LocaleStorageServiceInterface')
        private localeStorage: LocaleStorageServiceInterface
    ) {}

    ngOnInit() {
        this.localeStorage.subject.subscribe((value) => {
            console.log(value);
            this.value = value;
        });
    }

    onChange({ target: { value } }: any) {
        this.localeStorage.value = value;
    }
}
