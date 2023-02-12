import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MenuState = 'open' | 'close';

export interface MenuStorageServiceInterface {
    subject: BehaviorSubject<MenuState>;
    toggle: () => void;
}

@Injectable({
    providedIn: 'root',
})
export class MenuStorageService implements MenuStorageServiceInterface {
    static STORAGE_KEY = 'MENU';

    private readonly _subject: BehaviorSubject<MenuState>;
    private _value: MenuState;

    constructor() {
        this._value = this.readStorage();
        this._subject = new BehaviorSubject<MenuState>(this._value);
        this._subject.subscribe(this.saveStorage);
    }

    private readStorage(): MenuState {
        return (
            <MenuState>localStorage.getItem(MenuStorageService.STORAGE_KEY) ??
            'open'
        );
    }

    private saveStorage(storage: string): void {
        localStorage.setItem(MenuStorageService.STORAGE_KEY, storage);
    }

    get subject(): BehaviorSubject<MenuState> {
        return this._subject;
    }

    toggle(): void {
        this._value = this._value === 'close' ? 'open' : 'close';
        this._subject.next(this._value);
    }
}
