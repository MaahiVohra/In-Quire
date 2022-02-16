import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import mainphoto from "./mainphoto.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login" class="login">
      {/*<div className="logo-container"><div className="logo">INQUIRE</div><div className="logosubtext">A place to share knowledge and better understand the world</div></div>
      */}
      <div class="login-container">
        <div className=" logo">INQUIRE</div>
        <div className="login-inputfields space">
          <div className="login-inputfield space">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="login-inputfield space">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        {/* <div className="login-forgotbutton space">
                    <small>Forgot Password?</small>
                </div> */}
        <button onClick={handleSignIn} class="login-buttons space loginbut">
          LOGIN
        </button>
        <button onClick={registerSignIn} class="login-buttons space register">
          REGISTER
        </button>
        <div className="login-google space">
          <img
            onClick={signIn}
            className="login__googleAuth"
            src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
