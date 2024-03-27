import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

const initialState = {
  user: null,
  signed: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.payload, signed: true };
    case "SIGN_OUT":
      return { ...state, user: null, signed: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = (user) => {
    dispatch({ type: "SIGN_IN", payload: user });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  const value = {
    state,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
