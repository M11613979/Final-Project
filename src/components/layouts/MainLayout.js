import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
const MainLayout = () => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const storedFullUser = localStorage.getItem("fulluser");

  // const [user, setUser] = useState(storedUser);
  // const [token, setToken] = useState(storedToken);
  const ref = useRef({
    fulluser: JSON.parse(localStorage.getItem(storedFullUser)),
    user: JSON.parse(localStorage.getItem(storedUser)),
    token: localStorage.getItem(storedToken),
  });
  // const [user, setUser] = useState("");
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  let resp = "";
  const auth = {
    fulluser:ref.current.fulluser,
    user: ref.current.user,
    token: ref.current.token,
    signup: async (_auth, email, password) => {
      resp = await createUserWithEmailAndPassword(_auth, email, password)
        .then((data) => {
         alert('acount created succssfuly')
          return data;
       })
        .catch((e) => {
          alert(e);
        });
     
      return resp;
    },
    signin: async (_auth, email, password) => {
      // setUser(email)
      // setToken(password)
      resp = await signInWithEmailAndPassword(_auth, email, password)
        .then((data) => {
          console.log(data.user.email, data.user.accessToken);
          ref.current.user=data.user.email;
          ref.current.token=data.user.accessToken;
          ref.current.fulluser=data.user;
          // user = data.user.email;
          localStorage.setItem("user", JSON.stringify(data.user.email));
          localStorage.setItem("fulluser", JSON.stringify(data.user));
          localStorage.setItem("token", data.user.accessToken);
          navigate("/");
          return data;
          console.log(data?.user?.email !== "undefined");
        })
        .catch((e) => {
          alert(e);
        });

      console.log(resp);
    },
    signout: (callback) => {
       ref.current.user = '';
       ref.current.token ='';
       ref.current.token = '';
      localStorage.clear();
      console.log('jlhjk');
    },
  };

  return (
    <div className="h-screen w-screen">
      <AuthContext.Provider value={{ auth }}>
        <header className="font-medium h-1/5 w-full flex justify-between items-center text-white px-10">
          <h1 className="text-5xl font-medium">React Auth </h1>
          <NavBar />
        </header>
        <main className="h-4/5">
          <Outlet />
        </main>
      </AuthContext.Provider>
    </div>
  );
};

export default MainLayout;
