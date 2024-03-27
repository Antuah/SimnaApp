import React, { useReducer } from "react";
import AuthContext from "./auth.context";
import { authManager } from "./auth.manager";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authManager, {});

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

export default AuthProvider;
