"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: './config/config.env' });
// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// route
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the App' });
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
