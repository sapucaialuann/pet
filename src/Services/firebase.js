import { initializeApp } from 'firebase/app';
import { getDatabase, ref} from "firebase/database";


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
const app = initializeApp(firebaseConfig);

const databaseConnection = ref(getDatabase(app));

export default databaseConnection