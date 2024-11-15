"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/user', (req, res) => {
    const { name, email } = req.body;
    try {
        const user = (0, userController_1.createUser)(name, email);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.default = router;
