import { Component, Input, OnInit } from '@angular/core';
import { TranslatorService } from '../../@services/translator/translator.service';
import { LocaleStorageService } from '../../@services/@storages/locale-storage/locale-storage.service';

@Component({
    selector: 'app-translator',
    template: `{{ translation }}`,
})
export class TranslatorComponent implements OnInit {
    @Input() key?: string;
    translation = '';

    constructor(
        private translator: TranslatorService,
        private localeStorage: LocaleStorageService
    ) {}

    ngOnInit(): void {
        this.localeStorage.subject.subscribe(() => {
            if (this.key) {
                this.translation = this.translator.t(this.key);
            }
        });
    }
}
