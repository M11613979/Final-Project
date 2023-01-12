import React, { useContext, useState } from "react";
import {updatePassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
  const [pass, setPass] = useState("");
  const _auth = useContext(AuthContext).auth;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(_auth);
    updatePassword(_auth.fulluser, pass).then(() => {
     alert('pass change succssfuly');

    }).catch((e) => alert(e))
    setPass('');
  };
  return (
    <div>
      <h1 className="text-7xl font-bold pt-24 text-center">
        Your User Profile
      </h1>
      <form
        onSubmit={formSubmitHandler}
        className="w-2/4 px-5 mt-20  flex mx-auto flex-col 
        justify-evenly text-center items-center "
      >
        <label className=" text-black text-xl font-bold" htmlFor="newpass">
          New Password
          
        </label>
        <input
          value={pass}
          className="h-10 
          mt-1
          rounded-md w-full new-pass-input"
          type="text"
          id="newpass"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />

        <button className="swap p-3 text-2xl btn-submit my-4 w-2/4 rounded-lg new-pass-ptn">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
