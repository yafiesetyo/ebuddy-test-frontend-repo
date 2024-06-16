import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBKTWOTPa0GuvyroPqde-oSup2_--OFdso",
  authDomain: "sandbox-70101.firebaseapp.com",
  projectId: "sandbox-70101",
  storageBucket: "sandbox-70101.appspot.com",
  messagingSenderId: "617641599252",
  appId: "1:617641599252:web:922926b83887194bf92201",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
