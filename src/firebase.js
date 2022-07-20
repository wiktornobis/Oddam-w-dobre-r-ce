
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8bo_KHJKQ5IlidlApKScDoYiT6l4loEQ",
  authDomain: "auth-oddam.firebaseapp.com",
  projectId: "auth-oddam",
  storageBucket: "auth-oddam.appspot.com",
  messagingSenderId: "887228084392",
  appId: "1:887228084392:web:d38fb2d346693583f4129d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app