// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getVertexAI, getGenerativeModel } from "@firebase/vertexai";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCxNw1jsXNGBYUd3_ROnpDKTOSRzw7Z0yU",
  authDomain: "civico-13264.firebaseapp.com",
  projectId: "civico-13264",
  storageBucket: "civico-13264.firebasestorage.app",
  messagingSenderId: "835406368961",
  appId: "1:835406368961:web:016d426a8a66d2b61f8440",
  measurementId: "G-BBCWG3KPDC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const analytics = getAnalytics(app);
export const vertexAI = getVertexAI(app);

if (window.location.hostname === "localhost") {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcJRYMqAAAAAPupH6YhMAM1DM2_dRqrWtcsKv65"),
  isTokenAutoRefreshEnabled: true,
});

export const simplemodel = getGenerativeModel(vertexAI, {
  // model: "gemini-1.5-flash",
  model: "gemini-2.0-flash-exp",
});

export { database, analytics };
