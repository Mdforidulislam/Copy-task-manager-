// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2dQvnh9Lq1V6ink7sAQB7bEp0IEF2X9k",
  authDomain: "my-thard-project.firebaseapp.com",
  projectId: "my-thard-project",
  storageBucket: "my-thard-project.appspot.com",
  messagingSenderId: "963606447833",
  appId: "1:963606447833:web:1300289b0f6b17d1ee20c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;