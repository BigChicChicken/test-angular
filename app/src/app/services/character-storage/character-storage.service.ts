import { BehaviorSubject } from 'rxjs';
import { Character } from '../../entities/character/character';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CharacterStorageService {
    static STORAGE_KEY = 'CHARACTERS';

    private readonly _subject: BehaviorSubject<Character[]>;
    private readonly _characters: Character[];

    constructor() {
        this._characters = this.readStorage();
        this._subject = new BehaviorSubject<Character[]>(this._characters);
        this._subject.subscribe(this.saveStorage);
    }

    private readStorage(): Character[] {
        let data;
        try {
            data = JSON.parse(
                localStorage.getItem(CharacterStorageService.STORAGE_KEY) ?? ''
            );
        } catch (e) {
            data = false;
        }

        if (Array.isArray(data)) {
            return data.map((item) => Character.fromJson(item));
        }

        return [];
    }

    private saveStorage(characters: Character[]): void {
        localStorage.setItem(
            CharacterStorageService.STORAGE_KEY,
            JSON.stringify(
                characters.map((character: Character) => character.toJson())
            )
        );
    }

    get subject() {
        return this._subject;
    }

    push(character: Character): void {
        this._characters.push(character);
        this._subject.next(this._characters);
    }
}
