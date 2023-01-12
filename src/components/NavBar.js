import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// const TAPS = [
//   { name: "", path: "/profile" },
//   { name: "login", path: "/login" },
// ];
const NavBar = () => {
  // const [tabs, setTabs] = useState(TAPS);

  const location = useLocation();
  const pathname = location.pathname;
  console.log(location.pathname);
  const queryString = location.search;
  const fullpath = pathname + queryString;
  console.log(Location);

  const auth = useContext(AuthContext).auth;

  return (
    <nav className="">
      <ul className="w-52 flex justify-between">
        {auth.user && (
          <Link state={fullpath} to={"/profile"}>
            <li className="text-2xl font-bold">profile</li>
          </Link>
        )}

        <Link state={fullpath} to={"/login"}>
          <li className="text-2xl font-bold">
            {auth.user ? (
              <button
                onClick={() => {
                  auth.signout();
                }}
              >
                Logout
              </button>
            ) : (
              "Login"
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
