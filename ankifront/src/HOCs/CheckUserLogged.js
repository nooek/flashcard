import React from "react";
import UserNotLogged from "../components/UserNotLogged/UserNotLogged";
import { useUserLogged } from "../Helpers/UserLoggedContext"

const CheckUserLogged = ({ children }) => {
  const { userLogged } = useUserLogged()
  const token = localStorage.getItem("jwt");
  const location = window.location.pathname;
  
  if (token && token.length > 0) {
    return children;
  }

  if (userLogged === true){
    return children
  }

  if (location === "/login" || location === "/register") {
    return children;
  }

  return <UserNotLogged />;
};

export default CheckUserLogged;
