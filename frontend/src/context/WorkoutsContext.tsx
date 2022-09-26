import React, { FC, createContext, useReducer } from "react";
import { IContextProps, Actions, IState } from "../types";

export const WorkoutsContext = createContext({} as IContextProps);

const initState: IState = { workouts: [] };

const workoutReducer = (state: IState, action: Actions) => {
  switch(action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload };
    case 'CREATE_WORKOUT':
      return { workouts: [action.payload, ...state.workouts]};
    default: return state;
  }
}

export const WorkoutContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initState);
  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  )
}