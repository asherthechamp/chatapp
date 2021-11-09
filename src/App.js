import React from 'react';

import './App.css';

import firebase from 'firebase/compat/app'
// import { getAnalytics } from "firebase/analytics";

import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getFirestore, query, orderBy, limit, onSnapshot, addDoc } from 'firebase/firestore';
import {collection} from 'firebase/firestore'
import { useState, useRef } from 'react';

const firebaseConfig = {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDJmc_d2xiwHLDWjK-_FJqhOGoPf81GKSQ",
  authDomain: "chatappproj-5ebe6.firebaseapp.com",
  projectId: "chatappproj-5ebe6",
  storageBucket: "chatappproj-5ebe6.appspot.com",
  messagingSenderId: "327354501086",
  appId: "1:327354501086:web:a58fa4bac76c7168b7bf4f",
  measurementId: "G-N44RZE3R1Y"

// Initialize Firebase
}
const chatapp = firebase.initializeApp(firebaseConfig)

const auth = getAuth(chatapp)

const fs = getFirestore(chatapp)

function App() {

const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      
        
     { user ? <ChatRoom/> : <SignIn/>}
        
    </div>
  );

 }
function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }
  return <button onClick = {signInWithGoogle} > Sign in with Google </button> 
  
}

function ChatMessage(props) {
  const {text, uid, photoURL, createdAt} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved'


  return (<div className = {`message ${messageClass}` }>
    <p>{text}</p>
    <img width={100} height ={100} src={photoURL}/>

    
    </div>)
}




function signOut() {
  return auth.currentUser && (<button onClick = {() => auth.signOut()}> Sign Out</button>)
}

function ChatRoom() {  
  
  const dummy = useRef()
  const messageRef = collection(fs, 'messages')

  const q = query(messageRef, orderBy('createdAt'), limit(25) )
  const items = []
  const [messages, setMessages] = useState([])


  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(doc => {
      items.push(doc.data())
      
    });
    console.log(items)
    setMessages(items)

      
   })

   const [formValue, setFromValue] = useState()

   const sendMessage = async(e) =>{
     e.preventDefault()
    
     const {uid, photoURL} = auth.currentUser

    await addDoc(messageRef, {
      uid,
    text: formValue,
    createdAt: new Date(),
    photoURL,
     });;
     setFromValue('')
     dummy.current.scrollIntoView({behavior: 'smooth'})
   }

   
    
  
  
   
return  (

  <>
  <main > 
  {messages && messages.map((msg) => <ChatMessage key = {msg.id} message = {msg}/>)}
  <div ref = {dummy}> </div>
  </main>
  <form value = {formValue} onChange = {(e) => setFromValue(e.target.value)} onSubmit = {sendMessage}>
  <input />
  <button type='submit'> 🕊️ </button>
</form> 
</>)

    
}

export default App;