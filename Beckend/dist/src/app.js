"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
