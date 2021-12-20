import React, { createContext, useReducer, useContext, useEffect } from "react";
import { getUserLogged } from "../../utils";

// reducer
import { reducer } from "../reducer/auth";

const auth = {
  isAuthenticated: false,
  user: null,
  token: null
}

const AuthContext = createContext(auth);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, auth);

  useEffect( () => {
    const user  = getUserLogged()
    const token = localStorage.getItem('@auth/token') || null

    if(user && token){
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token
        }
      })
    }
  }, []);

  const onLogout = () => dispatch({ type: 'LOGOUT', payload: auth });

  const onLogin = data => dispatch({ type: 'LOGIN', payload: data });

  return (
    <AuthContext.Provider value={{ auth: state, dispatch, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);