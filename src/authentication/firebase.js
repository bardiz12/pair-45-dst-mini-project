// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
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

export default auth