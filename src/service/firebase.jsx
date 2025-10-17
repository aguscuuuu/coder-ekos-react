// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2Py6D5Hi1SWvjMqbi9ewcWQa7MCdkOns",
    authDomain: "coder-ekos-react.firebaseapp.com",
    projectId: "coder-ekos-react",
    storageBucket: "coder-ekos-react.firebasestorage.app",
    messagingSenderId: "962906139509",
    appId: "1:962906139509:web:102b6c39bdb4018a59c13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Firestore database
export const db = getFirestore(app);