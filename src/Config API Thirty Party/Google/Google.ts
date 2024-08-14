// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { checkFormInputFromUser } from "../../Check Form Input Create Account/Check Form Input";
import axios from "axios";
import { obEnv } from "../../Evironment/Evironment";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: obEnv.VITE_CONFIG_GG_KEY,
  authDomain: obEnv.VITE_OUTH_DOMAIN,
  projectId: obEnv.VITE_PROJECT_ID,
  storageBucket: obEnv.VITE_STORGAGE_BUCKET,
  messagingSenderId: obEnv.VITE_MESSAGING_SENDERId,
  appId: obEnv.VITE_APP_ID,
  measurementId: obEnv.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "vi"
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const loginWithEmail = async (navigation: (str: string) => void) => {
  const result: {
    user: {
      email: string,
      displayName: string
    } | any
  } = await signInWithPopup(auth, provider)

  if (checkFormInputFromUser.email(result.user?.email)) {
    axios.post(obEnv.VITE_DOMAIN_BE + "/login-email", {
      email: result.user?.email,
      username: result.user?.displayName
    }, {
      withCredentials: true
    }).then(response => {
      const { data } = response
      if (data.valid) {
        navigation("/")
      } else {

      }
    })

  } else {
    return alert("err")
  }



}

export { loginWithEmail }