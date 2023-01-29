import { BehaviorSubject } from 'rxjs';
import { Character } from '../../entities/character/character';
import { Injectable } from '@angular/core';

export interface CharacterStorageInterface {
    [key: string]: Character;
}

@Injectable({
    providedIn: 'root',
})
export class CharacterStorageService {
    static STORAGE_KEY = 'CHARACTERS';

    private readonly _subject: BehaviorSubject<CharacterStorageInterface>;
    private readonly _storage: CharacterStorageInterface;

    constructor() {
        this._storage = this.readStorage();
        this._subject = new BehaviorSubject<CharacterStorageInterface>(
            this._storage
        );
        this._subject.subscribe(this.saveStorage);
    }

    private readStorage(): CharacterStorageInterface {
        let data;
        try {
            data = JSON.parse(
                localStorage.getItem(CharacterStorageService.STORAGE_KEY) ??
                    '{}'
            );
        } catch (e) {
            data = false;
        }

        return Object.fromEntries(
            Object.entries(data).map(([key, character]) => [
                key,
                Object.assign(new Character(), character),
            ])
        );
    }

    private saveStorage(storage: CharacterStorageInterface): void {
        localStorage.setItem(
            CharacterStorageService.STORAGE_KEY,
            JSON.stringify(storage)
        );
    }

    get subject() {
        return this._subject;
    }

    push(character: Character): void {
        this._storage[character.id] = character;
        this._subject.next(this._storage);
    }
}
