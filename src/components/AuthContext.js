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
  const [additionalInfoSubmitted, setAdditonalInfoSubmitted] = useState(false);

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

  function submitAdditionalInfo(name, year, faculty, nusnetid) {
    console.log(`Name: ${name}\nYear: ${year}\nFaculty: ${faculty}\nNUSNET ID: ${nusnetid}`);
    if(name && year && faculty && nusnetid) {
      setAdditonalInfoSubmitted(true);
    }
  }

  function login(email, password) {
    console.log(email, password);
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
    additionalInfoSubmitted,
    signup,
    submitAdditionalInfo,
    login,
    logout,
    reset,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
