import React, { useState, useEffect } from "react";
import { useUserData } from "../../../Helpers/DataUserContext";
import InfoField from "./ProfileFields/ProfileFields";
import axios from "axios";
import {
  Container,
  UserInfoContainer,
  Username,
  UserDataField,
  UserInfo,
  SaveButton,
  Edit,
} from "./Styles";
import Navbar from "../../../components/Navbar/NavBar";
import Sidebar from "../../../components/Navbar/SideBar/SideBar";

const Profile = (props) => {
  const { userData, setUserData } = useUserData();
  const [Nacionality, setNacionality] = useState(userData[0].user_nacionality);
  const [Name, setName] = useState(userData[0].user_real_name);
  const [Sex, setSex] = useState(userData[0].user_sex);
  const [showEditField, setShowEditField] = useState(false);
  const [FieldId, setFieldId] = useState(0);
  const [message, setMessage] = useState("")
  const userAge = (new Date().getFullYear() - userData[0].user_date.split("-")[0])

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || ""
  }, [props.title])

  const changeData = () => {
    axios
      .post(`${API_BASE_URL}/user/changeinfo`, {
        sex: Sex,
        realname: Name,
        nacionality: Nacionality,
        id: userData[0].userID,
      })
    updateUserData()
  };

  const updateUserData = () => {
    const token = localStorage.getItem("jwt");
    axios.get(
      "http://localhost:3001/api/user/getuser",
      {
        headers: {
          "access-token": JSON.parse(token),
        },
      }
    )
    .then(res => {
      if (res.data){
        setUserData(res.data);
        setMessage("User updated succesfully")
      }
    })
  }

  const openField = (id) => {
    setFieldId(id);
    setShowEditField(!showEditField);
  };

  return (
    <Container>
      <Navbar />
      <Sidebar />
      
      <UserInfoContainer>
      <Username>Hello, {userData[0].user_name}</Username>
        <UserDataField>
          <UserInfo>Email: {userData[0].user_email}</UserInfo>
          <Edit />
        </UserDataField>

        <InfoField
          idselect={FieldId}
          id="1"
          show={showEditField}
          change={(e) => setNacionality(e.target.value)}
          click={() => openField("1")}
        >
          Nacionality: {Nacionality}
        </InfoField>

        <InfoField
          idselect={FieldId}
          id="2"
          show={showEditField}
          change={(e) => setName(e.target.value)}
          click={() => openField("2")}
        >
          Name: {Name}
        </InfoField>

        <InfoField
          idselect={FieldId}
          id="3"
          show={showEditField}
          change={(e) => setSex(e.target.value)}
          click={() => openField("3")}
        >
          Sex: {Sex}
        </InfoField>

        <UserDataField>
          <UserInfo>Age: {userAge} year(s)</UserInfo>
        </UserDataField>
      </UserInfoContainer>
      <SaveButton
        onClick={() => changeData()}
        variant="contained"
        color="primary"
      >
        Save
      </SaveButton>
      {message ? <h2>{message}</h2> : null}
    </Container>
  );
};

export default Profile;
