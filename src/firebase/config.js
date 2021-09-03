import  {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH11SVouq6Zh15XWpN5sxByt2EcnSdDug",
  authDomain: "firegram-c55b6.firebaseapp.com",
  projectId: "firegram-c55b6",
  storageBucket: "firegram-c55b6.appspot.com",
  messagingSenderId: "137313231956",
  appId: "1:137313231956:web:762dd10a0c0757a13279c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);
export { db,storage };