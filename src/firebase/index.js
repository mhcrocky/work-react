import firebase from "firebase";
import {firebaseConfig} from '../config'
// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const login = async(data) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
    .then((res)=>{
        console.log(res.user)
        if(!res.user.emailVerified){
            res.user.sendEmailVerification();
            auth.signOut();
            return {
                status:'unverified'
            }
            
        }else{
            localStorage.setItem('token',res.user.refreshToken)
            return {
                data:res.user,
                status:'success'
            }
        }
    })
    .catch(error=>{
        console.log(error)
        return {
            error:error,
            status:'error'
        }
    });
}

const register = (data) => {
    auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential)=>{
            // send verification mail.
            console.log(userCredential)
            userCredential.user.sendEmailVerification();
            auth.signOut();
            return {status:'sent_email'}
        })
        .catch(error=>{
            console.log(error)
            return {status:'error'}
        });
}

const logOut = () => {
    auth.signOut()
    .then(()=>{
        localStorage.clear()
        return true
    })
}
export {login, register, logOut, auth}