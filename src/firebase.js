import firebase from 'firebase/compat/app';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC8bo_KHJKQ5IlidlApKScDoYiT6l4loEQ",
    authDomain: "auth-oddam.firebaseapp.com",
    projectId: "auth-oddam",
    storageBucket: "auth-oddam.appspot.com",
    messagingSenderId: "887228084392",
    appId: "1:887228084392:web:d38fb2d346693583f4129d"
})

export const auth = app.auth()
export default app