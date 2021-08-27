import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDZrIUvcxNtfcWBHqjqSG0sv8fKr06og_s",
  projectId: "pets-trabgdp",
  databaseURL: "https://pets-trabgdp-default-rtdb.firebaseio.com",
  authDomain: "pets-trabgdp.firebaseapp.com",
  storageBucket: "pets-trabgdp.appspot.com",
  messagingSenderId: "62137892728",
  appId: "1:62137892728:web:7323a7574b56460701928d",
  // measurementId: "G-DLK39QC6CY"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);