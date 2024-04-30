// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyLAzoFGpZ705IASL1zQWVpTTwy-SZUY8",
  authDomain: "quiz-2-aaada.firebaseapp.com",
  projectId: "quiz-2-aaada",
  storageBucket: "quiz-2-aaada.appspot.com",
  messagingSenderId: "421982643709",
  appId: "1:421982643709:web:286834b712d74bd3bb6594",
  measurementId: "G-C66QW4KQ4M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

export const storage = getStorage(firebaseApp);
