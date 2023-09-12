/* eslint-disable react/prop-types */
import React from 'react';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/authReducer';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});

  function handleAuthForm() {
    dispatch({
      type: 'SET_REGISTER_FORM_OPEN',
      payload: !state.loginFormIsOpen,
    });
  }
  const formIsOpen = state.loginFormIsOpen;
  return (
    <AuthContext.Provider value={[handleAuthForm, formIsOpen]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
