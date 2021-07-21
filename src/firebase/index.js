import firebase from "firebase"
import {firebaseConfig} from '../config'
// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()
const storage = firebase.storage()
const firestore = firebase.firestore()


export { auth,database,storage,firestore}