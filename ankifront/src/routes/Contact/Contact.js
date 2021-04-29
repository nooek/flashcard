import React, { useState, useEffect } from "react";
import { useUserData } from "../../Helpers/DataUserContext";
import { Container, InputFields, SendEmail } from "./Styles";

const title = document.querySelector("title");
title.text = "Contact";

const Contact = (props) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const { userData } = useUserData();
  const [email, setEmail] = useState(userData[0].userEmail);

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  const sendEmail = () => {
    console.log("Sending...");
    console.log(subject);
    console.log(content);
    setMessage("Email sent!");
  };

  return (
    <Container>
      <InputFields
        variant="outlined"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputFields
        variant="outlined"
        label="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />

      <InputFields
        style={{ width: "95%" }}
        variant="outlined"
        label="Content"
        multiline
        rowsMax="7"
        onChange={(e) => setContent(e.target.value)}
      />

      <SendEmail
        variant="contained"
        color="primary"
        onClick={() => sendEmail()}
      >
        Send Email!
      </SendEmail>

      <h2 style={{ color: "green" }}>{message}</h2>
    </Container>
  );
};

export default Contact;
