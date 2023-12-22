import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const shareAuth = createContext(null);

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const Authentication = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userinfo, currentUser] = useState([]);

  const userCreateWithEmail = (email, Password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, Password);
  };

  const singinPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const singInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  const logoutUser = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsuscripber = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        currentUser(user);
        setLoading(false);
      }
    });

    return () => unsuscripber();
  }, []);

  const infoList = {
    loading,
    userCreateWithEmail,
    singinPassword,
    userinfo,
    logoutUser,
    googleLogin,
    singInGithub,
  };

  return <shareAuth.Provider value={infoList}>{children}</shareAuth.Provider>;
};

export default Authentication;
