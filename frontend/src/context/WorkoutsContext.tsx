import React, { FC, createContext, useReducer } from "react";
import { ACTIONS } from "../constants";
import { IContextProps, Actions, IState } from "../types";

export const WorkoutsContext = createContext({} as IContextProps);

const initState: IState = { workouts: [] };

const workoutReducer = (state: IState, action: Actions) => {
  switch(action.type) {
    case ACTIONS.SET_WORKOUTS:
      return { workouts: action.payload };
    case ACTIONS.CREATE_WORKOUT:
      return { workouts: [action.payload, ...state.workouts]};
    case ACTIONS.UPDATE_WORKOUT:
      //@ts-ignore
      const filteredState = state.workouts.filter((workout) => workout._id !== action.payload._id)
      return { workouts: [action.payload, ...filteredState ] };
    case ACTIONS.DELETE_WORKOUT:
      //@ts-ignore
      return { workouts: state.workouts.filter((workout) => workout._id !== action.payload._id) };
    default: return state;
  }
}

export const WorkoutContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(workoutReducer, initState);
  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  )
}