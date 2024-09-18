import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD3JifVfaT7znq53GbZUjzvUEKZiTADIWc",
    authDomain: "p-sit313.firebaseapp.com",
    projectId: "p-sit313",
    storageBucket: "p-sit313.appspot.com",
    messagingSenderId: "662361399945",
    appId: "1:662361399945:web:8a848a09764ce1702e9c58"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw error;
    }
};

export const signInWithEmail = async (email, password) => {
    if (!email || !password) return;
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in:", error.message);
        throw error;
    }
};

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.error('Error creating the user document', error.message);
            throw error; // Propagate the error to handle it in the UI
        }
    }
    return userDocRef;
};
