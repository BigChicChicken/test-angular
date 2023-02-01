import i18next from 'i18next';
import { Injectable } from '@angular/core';
import { TranslatorMissingKeyError } from '../../@errors/translator-missing-key/translator-missing-key.error';
import { LocaleStorageService } from '../@storages/locale-storage/locale-storage.service';
import messagesEN from '../../@translations/messages.json';
import messagesFR from '../../@translations/messages.fr.json';

export interface TranslationFile {
    locale: string;
    translations: { [key: string]: string };
}

const normalizeResources = (translationFiles: {
    [key: string]: TranslationFile;
}) => {
    const data = Object.entries(translationFiles);
    const ref = data[0][1].translations;

    return Object.fromEntries(
        data.map(([locale, { translations }]) => [
            locale,
            {
                translation: Object.fromEntries(
                    Object.keys(ref).map((key) => {
                        if (!Object.hasOwn(translations, key)) {
                            throw new TranslatorMissingKeyError(key, locale);
                        }

                        return [ref[key], translations[key]];
                    })
                ),
            },
        ])
    );
};

i18next
    .init({
        fallbackLng: 'en',
        resources: normalizeResources({ en: messagesEN, fr: messagesFR }),
        load: 'languageOnly',
        lowerCaseLng: true,
    })
    .catch(console.error);

@Injectable({
    providedIn: 'root',
})
export class TranslatorService {
    constructor(private localeStorageService: LocaleStorageService) {
        localeStorageService.subject.subscribe(() => {
            i18next
                .changeLanguage(this.localeStorageService.value)
                .catch(console.error);
        });
    }

    t(key: string): string {
        return i18next.t(key);
    }
}
