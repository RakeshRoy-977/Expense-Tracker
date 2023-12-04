import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9N6HZ-QNCbw9VDRjF3QUKHHfdLOw1WwE",
  authDomain: "expense-tracker-ea863.firebaseapp.com",
  projectId: "expense-tracker-ea863",
  storageBucket: "expense-tracker-ea863.appspot.com",
  messagingSenderId: "1032729256392",
  appId: "1:1032729256392:web:12e37ced9151f7c33ba0fd"
};

const app = initializeApp(firebaseConfig);
export default app