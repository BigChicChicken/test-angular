export class CharacterParseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CharacterParseError';
    }
}
