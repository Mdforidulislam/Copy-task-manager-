import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, GithubAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


 export const usecontextHook = createContext(null)
 
 const Context = ({children}) => {
     const [userInfo,setUserInfo] = useState([])
     const [loading,setLoading] = useState(false)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const loginWithGoogle = () =>{
    return  signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () =>{
      return  signInWithPopup(auth, githubProvider)
    }
     const userCratewithEmail = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
     }
     const userLoginwithEmail = (email,password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
     }
     const singOutUser = () => {
        setLoading(true)
       return signOut(auth)
     }

     useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUserInfo(currentUser)
            setLoading(false)
            console.log(currentUser);
         })
        return ()=> unsubscribe()
     },[auth])

    const authconfig = {userCratewithEmail,userLoginwithEmail,userInfo,singOutUser,loginWithGithub,auth,loginWithGoogle,loading}
    return (
        <usecontextHook.Provider value={authconfig}>
               {children}
        </usecontextHook.Provider>
    );
};

export default Context;