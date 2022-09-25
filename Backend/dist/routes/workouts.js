"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Get all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'This is all workouts' });
});
// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'This is a single workout' });
});
// Post a single workout
router.post('/', (req, res) => {
    res.json({ msg: 'This is a workout POST' });
});
// Delete a single workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'This is to delete a single workout' });
});
// Update a single workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'This is to update a single workout' });
});
exports.default = router;
