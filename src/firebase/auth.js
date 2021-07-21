
import {auth} from './index'

const login = async(data) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
    .then((res)=>{
        console.log(res.user)
        if(!res.user.emailVerified){
            res.user.sendEmailVerification()
            auth.signOut()
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
    })
}

const register = (data) => {
    auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential)=>{
            // send verification mail.
            console.log(userCredential)
            userCredential.user.sendEmailVerification()
            auth.signOut()
            return {status:'sent_email'}
        })
        .catch(error=>{
            console.log(error)
            return {status:'error'}
        })
}

const logOut = () => {
    auth.signOut()
    .then(()=>{
        localStorage.clear()
        return true
    })
}

const user = () => {
    return auth.currentUser
}

export {login,register,logOut,user}