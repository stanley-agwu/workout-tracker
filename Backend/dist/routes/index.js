"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
// Get all workouts
router.get('/', controllers_1.getAllWorkouts);
// Get a single workout
router.get('/:id', controllers_1.getWorkout);
// Post a single workout
router.post('/', controllers_1.createWorkout);
// Delete a single workout
router.delete('/:id', controllers_1.deleteWorkout);
// Update a single workout
router.patch('/:id', controllers_1.updateWorkout);
exports.default = router;
