import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';


const firebaseConfig = {
  apiKey: "AIzaSyDZrIUvcxNtfcWBHqjqSG0sv8fKr06og_s",
  authDomain: "pets-trabgdp.firebaseapp.com",
  databaseURL: "https://pets-trabgdp-default-rtdb.firebaseio.com",
  projectId: "pets-trabgdp",
  storageBucket: "pets-trabgdp.appspot.com",
  messagingSenderId: "62137892728",
  appId: "1:62137892728:web:7323a7574b56460701928d",
  measurementId: "G-DLK39QC6CY"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //will be necessary to use one const for each list of Object? I believe so
  const [apiDogsAdoption, loadingDogs, errorDogs] = useList(firebase.database().ref);
  const [apiAccomodation, loadingAccomodation, errorAccomodation] = useList(firebase.database().ref);
  const [apiWalk, loadingWalk, errorWalk] = useList(firebase.database().ref);