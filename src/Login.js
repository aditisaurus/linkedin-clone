import React from 'react';
import "./Login.css";

function Login() {

    const loginToApp = () => {};
     const register = () => {};
    

  return (
    <div className="login">
      <img src="https://raw.githubusercontent.com/aditisinghdeveloper/linkedin-clone/master/src/Linkedin-logo-png.png" alt=""/>

      <form>
          <input placeholder="Full Name (required if registering)" type="text" />
          <input placeholder="Profile pic Url (optional))" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />

          <button type="submit" onClick={loginToApp}>Sign in</button>
      </form>
      <p>Not a member?</p>
      <span className="login_register" onClick={register}>Register Now</span>
    </div>
  )
}

export default Login