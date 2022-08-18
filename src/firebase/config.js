

import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBPR1U8phPrGgUXfytfp0j2xnln-KIcqbk",
    authDomain: "aos-sosyal-app.firebaseapp.com",
    projectId: "aos-sosyal-app",
    storageBucket: "aos-sosyal-app.appspot.com",
    messagingSenderId: "416249935872",
    appId: "1:416249935872:web:f8995db40cef4c360480e5"
};


const app=initializeApp(firebaseConfig)

const auth=getAuth(app)
const db=getFirestore(app)

export {auth,db}