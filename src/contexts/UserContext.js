import React, {createContext, useEffect, useState} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    // Sign in with google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error.message);
            });
    };

    // Sign in with facebook
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // Create user with email and password
    const createUser = (fullName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                logOut();
                updateProfile(auth.currentUser, {
                    displayName: fullName
                }).then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            alert('Please check your email address!');
                        });
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Sign in user with user and password
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
            })
            .catch(error => console.log(error));
    };

    // Password reset
    const passwordReset = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert(`Send password reset email to ${email}`);
            })
            .catch((error) => {console.log(error);});
    };

    const logOut = () => {
        signOut(auth).then(() => {}).catch((error) => {});
    };

    // Current User Observer
    useEffect(() => {
        return () => onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
    }, [user]);

    const authInfo = {
        user,
        signInWithGoogle,
        signInWithFacebook,
        createUser,
        signInUser,
        logOut,
        passwordReset
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;