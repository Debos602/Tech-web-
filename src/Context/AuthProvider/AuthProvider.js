import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("");
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const updateUserData = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const handleEmailSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			// if (currentUser == null || currentUser.emailVerified) {
			// 	setUser(currentUser);
			// }
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	});
	const authInfo = {
		user,
		loading,
		createUser,
		updateUserData,
		handleEmailSignIn,
		logOut,
		googleSignIn,
		githubSignIn,
		resetPassword,
		verifyEmail,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
