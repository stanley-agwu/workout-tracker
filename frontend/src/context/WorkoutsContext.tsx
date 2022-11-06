import React, { FC, createContext, useReducer } from "react";
import { ACTIONS } from "../constants";
import { IWorkoutContext, WorkoutActions, IWorkoutState, Workout } from "../types";

export const WorkoutsContext = createContext<IWorkoutContext | null>(null);

const initState: IWorkoutState = { workouts: [] };

const workoutReducer = (state: IWorkoutState, action: WorkoutActions): IWorkoutState => {
  switch(action.type) {
    case ACTIONS.SET_WORKOUTS:
      const allWorkouts = action.payload as Workout[];
      return { workouts: allWorkouts };
    case ACTIONS.CREATE_WORKOUT:
      const createdWorkout = action.payload as Workout;
      const updatedState = [createdWorkout, ...state.workouts];
      return { workouts: updatedState };
    case ACTIONS.UPDATE_WORKOUT:
      const updatedWorkout = action.payload as Workout;
      const filteredState = state.workouts.filter((workout) => workout._id !== updatedWorkout._id)
      return { workouts: [updatedWorkout, ...filteredState ] };
    case ACTIONS.DELETE_WORKOUT:
      const deletedWorkout = action.payload as Workout;
      return { workouts: state.workouts.filter((workout) => workout._id !== deletedWorkout._id) };
    default: return state;
  }
}

export const WorkoutsContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initState);
  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  )
}