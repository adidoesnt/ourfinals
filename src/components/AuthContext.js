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
  const [additionalInfoSubmitted, setAdditonalInfoSubmitted] = useState(true); //CHANGE BACK TO FALSE
  const [submittingAssignment, setSubmittingAssignment] = useState(false);
  const [currentModule, setCurrentModule] = useState();
  const [currentAssignment, setCurrentAssignment] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe();
  }, []);

  function onAuthStateChanged(user) {
    setCurrentUser(user);
  }

  const isAuthenticated = !!currentUser;

  function changeAssignmentSubmissionStateToTrue() {
    setSubmittingAssignment(true);
  }

  function changeAssignmentSubmissionStateToFalse() {
    setSubmittingAssignment(false);
  }

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
    submittingAssignment,
    currentModule,
    currentAssignment,
    signup,
    submitAdditionalInfo,
    login,
    logout,
    reset,
    changeAssignmentSubmissionStateToFalse,
    changeAssignmentSubmissionStateToTrue,
    setCurrentModule,
    setCurrentAssignment
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
