"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Workout_1 = __importDefault(require("../models/Workout"));
const router = express_1.default.Router();
// Get all workouts
router.get('/', async (req, res) => {
    const workout = await Workout_1.default.find();
    res.status(200).json({ workout });
});
// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'This is a single workout' });
});
// Post a single workout
router.post('/', async (req, res) => {
    try {
        const workout = await Workout_1.default.create(req.body);
        res.status(200).json({ workout });
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
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
const _default = router;
export { _default as default };
