export class TranslatorMissingKeyError extends Error {
    constructor(key: string, locale: string) {
        super(`Missing "${key}" from local translation file "${locale}".`);
        this.name = 'TranslatorMissingKeyError';
    }
}
