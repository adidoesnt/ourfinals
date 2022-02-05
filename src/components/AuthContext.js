import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  /* Firebase user
  This user is NOT from the database, it is the user from Firebase Auth
  */
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe();
  }, []);

  function onAuthStateChanged(user) {
    setCurrentUser(user);
  }

  const isAuthenticated = !!currentUser;

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    console.log("trying to sign in");
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function reset(email) {
    return auth.sendPasswordResetEmail(email);
  }

  const value = {
    currentUser,
    isAuthenticated,
    signup,
    login,
    logout,
    reset,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
