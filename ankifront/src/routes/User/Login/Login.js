import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserData } from "../../../Helpers/DataUserContext";
import { Redirect } from "react-router-dom";
import { IntroductionText } from "../../../components/IntroText/IntroText";
import { Container, ButtonLogIn, InputFields } from "./Styles";

const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");
  const [Block, setBlock] = useState(true);
  const { setUserData } = useUserData()
  const [goToHome, setGoToHome] = useState(false)

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || ""
  }, [props.title])

  const sendLoginRequest = () => {
    axios
      .post(`${API_BASE_URL}/user/login`, {
        email: Email,
        password: Password,
      })
      .then((res) => {
        if (res.data.message){
          setMessage(res.data.message)
        }else{
          setUser(res.data.token)
        }
      })
  };

  const setUser = async (token) => {
    if (token) {
      await localStorage.setItem("jwt", token);
      const { data } = await axios.get(
        "http://localhost:3001/api/user/getuser",
        {
          headers: {
            "access-token": token,
          },
        }
      );
      if (data) {
        setUserData(data.data);
        setGoToHome(true)
      }
    }
  };

  useEffect(() => {
    const items = [Email, Password];
    if (items.includes("")) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [Password, Email]);

  return (
    <Container>
      <IntroductionText id="login-text">Login</IntroductionText>
      <InputFields
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        label="Email"
        required
      />
      <InputFields
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        label="Password"
        type="password"
        required
      />
        <ButtonLogIn
          onClick={() => sendLoginRequest()}
          disabled={Block}
          variant="contained"
          required
          color="primary"
        >
          Login
        </ButtonLogIn>
      <a href="/register" style={{ position: "relative", top: "10px" }}>
        If you don't have an account, register
      </a>
      <h2>{Message}</h2>
      { goToHome === true ? <Redirect to="/" /> : null}
    </Container>
  );
};

export default Login;
