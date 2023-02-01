import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LocaleStorageService {
    static STORAGE_KEY = 'LOCALE';

    private readonly _subject: BehaviorSubject<string>;
    private _value: string;

    constructor() {
        this._value = this.readStorage();
        this._subject = new BehaviorSubject<string>(this._value);
        this._subject.subscribe(this.saveStorage);
    }

    private readStorage(): string {
        return (
            localStorage.getItem(LocaleStorageService.STORAGE_KEY) ??
            ((navigator && navigator.language.slice(0, 2)) || 'en')
        );
    }

    private saveStorage(storage: string): void {
        localStorage.setItem(LocaleStorageService.STORAGE_KEY, storage);
    }

    get subject(): BehaviorSubject<string> {
        return this._subject;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this._subject.next(this._value);
    }
}
