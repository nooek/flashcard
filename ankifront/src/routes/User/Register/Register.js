import React, { useEffect, useState } from "react";
import axios from "axios";
import { IntroductionText } from "../../../components/IntroText/IntroText";
import { validateEmail, valid } from "./EmailValidation";
import { Link } from "react-router-dom";
import {
  Container,
  AnimationSide,
  FormSide,
  ButtonLogIn,
  InputFields,
} from "./Styles";

const Register = (props) => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Date, setDate] = useState("");
  const [blockButton, setBlock] = useState(true);
  const [message, setMessage] = useState("")

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || ""
  }, [props.title])

  useEffect(() => {
    const items = [Username, Email, Password, Date];
    if (items.includes("")) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [Username, Email, Password, Date]);

  const registerUser = () => {
    validateEmail(Email);
    if (valid === true) {
      axios
        .post(`${API_BASE_URL}/user/register`, {
          username: Username,
          email: Email,
          password: Password,
          age: Date,
        })
    }else{
      setMessage("Email not valid")
    }
  };

  return (
    <Container>
      <AnimationSide>ANIMATION / IMAGES SIDE</AnimationSide>
      <FormSide>
        <IntroductionText id="register-text">Register</IntroductionText>
        <InputFields
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          label="Username"
          inputProps={{maxLength: 20}}
          required 
        ></InputFields>
        <InputFields
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
          inputProps={{maxLength: 40}}
          required
        ></InputFields>
        <InputFields
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          variant="outlined"
          label="Password"
          inputProps={{maxLength: 100}}
          required
        ></InputFields>
        <InputFields
          onChange={(e) => setDate(e.target.value)}
          type="date"
          variant="outlined"
          required
        ></InputFields>
        <Link
          to={valid === true ? "/login" : "#"}
          style={{ textDecoration: "none" }}
        >
          <ButtonLogIn
            disabled={blockButton}
            onClick={() => registerUser()}
            variant="contained"
            color="primary"
            required
          >
            Register
          </ButtonLogIn>
        </Link>
      </FormSide>
      {message ? <h2>{message}</h2> : null}
    </Container>
  );
};

export default Register;