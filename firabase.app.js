// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHyzP_h7TiuN1Y8NY--BctD0lYImYh2Hc",
  authDomain: "ctg-ranchodasaudade.firebaseapp.com",
  projectId: "ctg-ranchodasaudade",
  storageBucket: "ctg-ranchodasaudade.appspot.com",
  messagingSenderId: "855520302427",
  appId: "1:855520302427:web:0aa2d0076fd31a9e95367e",
  measurementId: "G-L3K77GL0TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);