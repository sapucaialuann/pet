import { useAuthState } from 'react-firebase-hooks/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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
  
  
  
  // <!-- The core Firebase JS SDK is always required and must be listed first -->
  // <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
  
  // <!-- TODO: Add SDKs for Firebase products that you want to use
  //      https://firebase.google.com/docs/web/setup#available-libraries -->
  // <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>
  
  //   // Your web app's Firebase configuration
  //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional