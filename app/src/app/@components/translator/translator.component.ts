import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslatorServiceInterface } from '../../@services/translator/translator.service';
import { LocaleStorageServiceInterface } from '../../@services/@storages/locale-storage/locale-storage.service';

@Component({
    selector: 'app-translator',
    template: `{{ translation }}`,
})
export class TranslatorComponent implements OnInit {
    @Input() key?: string;
    translation = '';

    constructor(
        @Inject('TranslatorServiceInterface')
        private translator: TranslatorServiceInterface,
        @Inject('LocaleStorageServiceInterface')
        private localeStorage: LocaleStorageServiceInterface
    ) {}

    ngOnInit(): void {
        this.localeStorage.subject.subscribe(() => {
            if (this.key) {
                this.translation = this.translator.t(this.key);
            }
        });
    }
}
