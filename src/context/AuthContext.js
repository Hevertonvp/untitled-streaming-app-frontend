import React from 'react';
import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN': {
      return { user: payload.user };
    }
    case 'LOGOUT': {
      return { user: null };
    }
    default: {
      return state;
    }
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });
}

export default AuthContext;
