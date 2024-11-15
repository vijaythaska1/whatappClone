"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = (name, email) => {
    // Mocking user creation logic
    if (!name || !email) {
        throw new Error("Name and email are required");
    }
    return { name, email };
};
exports.createUser = createUser;
