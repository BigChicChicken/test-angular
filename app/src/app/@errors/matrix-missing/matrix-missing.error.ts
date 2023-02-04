import { Role } from '../../@entities/character/character';

export class MatrixMissingError extends Error {
    constructor(role: Role) {
        super(`Missing matrix for role: ${role}.`);
    }
}
