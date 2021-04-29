import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserData } from "../Helpers/DataUserContext";
import { useUserLogged } from "../Helpers/UserLoggedContext";

const GetLogged = ({ children }) => {
  const { setUserData } = useUserData();
  const { setUserLogged } = useUserLogged();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token) {
      getData();
    } else {
      setLoading(false);
    }
  }, [token]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/api/user/getuser", {
      headers: {
        "access-token": token,
      },
    });
    if (data) {
      setUserData(data.data);
      setUserLogged(true);
      setLoading(false);
    }
  };

  if (loading === false) {
    return children;
  } else {
    return <></>;
  }
};

export default GetLogged;