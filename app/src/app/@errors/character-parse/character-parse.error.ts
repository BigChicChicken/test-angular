export class CharacterParseError extends Error {
    constructor(value: string) {
        super(`"${value}" isn't a valid JSON.`);
        this.name = 'CharacterParseError';
    }
}
