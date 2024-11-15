"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        if (!data.name || !data.email) {
            throw new Error('Name and email are required');
        }
        this.name = data.name;
        this.email = data.email;
    }
}
exports.User = User;
