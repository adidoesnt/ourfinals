import { createContext, useContext, useEffect, useState } from "react";
import {auth} from './Firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function reset(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
        reset
    }

    return <AuthContext.Provider value = {value}>
        {props.children}
    </AuthContext.Provider>
}