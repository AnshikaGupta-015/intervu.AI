
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervu-eafee.firebaseapp.com",
  projectId: "intervu-eafee",
  storageBucket: "intervu-eafee.firebasestorage.app",
  messagingSenderId: "1001008419074",
  appId: "1:1001008419074:web:b86d7aaaf220021afc321b",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };