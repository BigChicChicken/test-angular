import i18next from 'i18next';
import { TranslatorKeyMissingError } from '../../@errors/translator-key-missing/translator-key-missing.error';
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
                            throw new TranslatorKeyMissingError(key, locale);
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

export default i18next;
