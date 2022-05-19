import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from './firebase';
import { login } from "./features/userSlice";

function Login() {
     
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        })
        .catch((error) => alert(error));
    };


     const register = () => {
         if(!name)
         {
             return alert("Please enter your full name!");
         }

         auth.createUserWithEmailAndPassword(email, password).then((userAuth)=> {
             userAuth.user.updateProfile({
                 displayName: name,
                 photoUrl: profilePic,
             })
             .then(()=> {
                 dispatch(login({
                     email: userAuth.user.email,
                     uid: userAuth.user.uid,
                     displayName: name,
                     photoUrl: profilePic,

                 }));
             })
         }).catch((error)=> alert(error));
     };
    

  return (
    <div className="login">
      <img src="https://raw.githubusercontent.com/aditisinghdeveloper/linkedin-clone/master/src/Linkedin-logo-png.png" alt=""/>

      <form>
          <input value={name} onChange = {e => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text" />
          <input value={profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder="Profile pic Url (optional))" type="text" />
          <input value={email} onChange = {e => setEmail(e.target.value)} placeholder="Email" type="email" />
          <input value={password} onChange = {e => setPassword(e.target.value)} placeholder="Password" type="password" />



          <button type="submit" onClick={loginToApp}>Sign in</button>
      </form>
      <p>Not a member?</p>
      <span className="login_register" onClick={register}>Register Now</span>
    </div>
  )
}

export default Login