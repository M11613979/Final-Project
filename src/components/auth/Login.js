import React, { useContext, useState } from "react";
import { auth } from "../../utils/firebase";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(true);
  const _auth = useContext(AuthContext).auth;

  const changeLoginStatus = () => {
    setLoginStatus((prev) => !prev);
    setEmail("");
    setPassword("");
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let resp = "";
    if (loginStatus) {
      //login
      // let
      resp = await _auth.signin(auth, email, password);
      setEmail("");
      setPassword("");
    
    } else {
    
      resp = await _auth.signup(auth, email, password);
      console.log(resp);
      if (resp) {
        setLoginStatus(true);
      }
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-full pt-20">
      <div
        className="login-card pt-10 w-2/4 h-3/4 m-auto rounded-md
       bg-violet-900 text-white
     flex flex-col justify-around
     items-center font-bold"
      >
        <h3 className="text-4xl">{loginStatus ? "Login" : "Sign Up"}</h3>
        <form
          onSubmit={formSubmitHandler}
          className="w-full px-5 flex flex-col 
        justify-evenly text-center h-5/6"
        >
          <label className="text-2xl" htmlFor="email">
            Your Email
          </label>
          <input
            value={email}
            className="h-10 rounded-md"
            type="text"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-2xl" htmlFor="password">
            Your Password
          </label>
          <input
            value={password}
            className="h-10 rounded-md"
            type="text"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="text-2xl btn-submit lg:w-3/6 md:w-4/6
                mx-auto p-2 rounded-md 
                mt-2"
          >
            {loginStatus ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className="swap text-2xl "
            onClick={changeLoginStatus}
          >
            {loginStatus ? "Create new account" : "Login with existing account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
