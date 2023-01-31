import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCInQK9VRCEPGGzoxg7-svgyNMNSdtbZY",
  authDomain: "test-login-fd72a.firebaseapp.com",
  projectId: "test-login-fd72a",
  storageBucket: "test-login-fd72a.appspot.com",
  messagingSenderId: "81595651140",
  appId: "1:81595651140:web:a64f83a35be08607801811",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
