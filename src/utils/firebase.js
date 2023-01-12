// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaJgP1xgLSIatsc-Lhkrdfiu0gdNUYJis",
  authDomain: "react-admin-panel-app.firebaseapp.com",
  projectId: "react-admin-panel-app",
  storageBucket: "react-admin-panel-app.appspot.com",
  messagingSenderId: "175651831399",
  appId: "1:175651831399:web:2b54ce1cabab546ad11ec2",
  measurementId: "G-L8RLV5DWMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLC_APP_ID,
//   measurementId: process.env.NEXT_PUBLC_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
