import i18next from './i18n';
import { Inject, Injectable } from '@angular/core';
import { LocaleStorageServiceInterface } from '../@storages/locale-storage/locale-storage.service';

export interface TranslatorServiceInterface {
    t(key: string): string;
}

@Injectable({
    providedIn: 'root',
})
export class TranslatorService implements TranslatorServiceInterface {
    constructor(
        @Inject('LocaleStorageServiceInterface')
        private localeStorage: LocaleStorageServiceInterface
    ) {
        localeStorage.subject.subscribe(() => {
            i18next
                .changeLanguage(this.localeStorage.value)
                .catch(console.error);
        });
    }

    t(key: string): string {
        return i18next.t(key);
    }
}
