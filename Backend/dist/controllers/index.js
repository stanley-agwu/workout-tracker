"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkout = exports.deleteWorkout = exports.createWorkout = exports.getWorkout = exports.getAllWorkouts = void 0;
const Workout_1 = __importDefault(require("../models/Workout"));
const mongoose_1 = __importDefault(require("mongoose"));
// get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout_1.default.find({}).sort({ updatedAt: 'desc' });
    res.status(200).json({ workouts });
};
exports.getAllWorkouts = getAllWorkouts;
// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id, no such workout' });
    }
    const workout = await Workout_1.default.findById(id);
    if (!workout) {
        return res.status(404).json({ error: 'workout not found' });
    }
    res.status(200).json({ workout });
};
exports.getWorkout = getWorkout;
// create new workout
const createWorkout = async (req, res) => {
    const { title, repetitions, load } = req.body;
    const fields = [];
    if (!title)
        fields.push('title');
    if (!repetitions)
        fields.push('repetitions');
    if (!load)
        fields.push('load');
    if (fields.length)
        return res.status(400).json({ error: 'Please fill in all fields', fields });
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
};
exports.createWorkout = createWorkout;
// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id, no such workout' });
    }
    const workout = await Workout_1.default.findByIdAndDelete(id);
    if (!workout) {
        return res.status(404).json({ error: 'workout not found' });
    }
    res.status(200).json({ workout });
};
exports.deleteWorkout = deleteWorkout;
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id, no such workout' });
    }
    const workout = await Workout_1.default.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!workout) {
        return res.status(404).json({ error: 'workout not found' });
    }
    res.status(200).json({ workout });
};
exports.updateWorkout = updateWorkout;
