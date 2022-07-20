// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQNZXcR6pcppon38u3HZRM6cyfmF6A54M",
    authDomain: "sage-shard-231817.firebaseapp.com",
    projectId: "sage-shard-231817",
    storageBucket: "sage-shard-231817.appspot.com",
    messagingSenderId: "969222765630",
    appId: "1:969222765630:web:9fc17d9cbb8b718c8aa56f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const register = async ({ name, email, password, image }) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const update = await updateProfile(response.user, {
            displayName: name,
            photoURL: image
        })
        return {
            success: true,
            message: "Registered Successfully",
            user: response.user
        }


    } catch (err) {
        return {
            success: false,
            message: err.message,
            user: null
        }
    }
}

export const logoutFirebase = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (err) {
        return false;
    }
};

export const loginFirebase = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        return {
            success: true,
            message: "Login Success",
            user: userCredential.user
        }
    } catch (err) {
        return {
            success: false,
            message: err.message,
            user: null
        }
    }
};
export default auth