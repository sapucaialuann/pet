import firebase from "firebase";
import "firebase/database";
const config = {
  apiKey: "AIzaSyDZrIUvcxNtfcWBHqjqSG0sv8fKr06og_s",
  projectId: "pets-trabgdp",
  databaseURL: "https://pets-trabgdp-default-rtdb.firebaseio.com",
  authDomain: "pets-trabgdp.firebaseapp.com",
  storageBucket: "pets-trabgdp.appspot.com",
  messagingSenderId: "62137892728",
  appId: "1:62137892728:web:7323a7574b56460701928d",
  // measurementId: "G-DLK39QC6CY"
};
firebase.initializeApp(config);

export default firebase.database();












// Firebase Config
// Initialize Firebase
  // firebase.analytics();

  //will be necessary to use one const for each list of Object? I believe so
  // const [apiDogsAdoption, loadingDogs, errorDogs] = useList(firebase.database().ref);
  // const [apiAccomodation, loadingAccomodation, errorAccomodation] = useList(firebase.database().ref);
  // const [apiWalk, loadingWalk, errorWalk] = useList(firebase.database().ref);
