// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
    CACHE_SIZE_UNLIMITED,
    getFirestore,
    initializeFirestore,
    persistentLocalCache,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIza***************",
    authDomain: "*******.firebaseapp.com",
    projectId: "*******",
    storageBucket: "*******.appspot.com",
    messagingSenderId: "*******",
    appId: "*******",
    measurementId: "*******",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// const db = initializeFirestore(app, {
//     localCache: persistentLocalCache({ cacheSizeBytes: CACHE_SIZE_UNLIMITED }),
// });

export { app, analytics, auth, db };
