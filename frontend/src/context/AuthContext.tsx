import React, { FC, createContext, useReducer } from 'react';
import { ACTIONS } from '../constants';

import { IUser, UserActions, IUserContext } from '../types';

export const AuthContext = createContext({} as IUserContext);

const initState: IUser = { user: null };
const userReducer = (state: IUser, action: UserActions) => {
  switch(action.type) {
    case ACTIONS.SIGNIN:
      return { user: action.payload };
    case ACTIONS.SIGNOUT:
      return { user: null };
    default:
      return state;
  }
}

export const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(userReducer, initState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
};