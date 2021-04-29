import React from "react";
import {
  UserDataField,
  UserInfo,
  Edit,
  EditField
} from "./Styles"

const InfoField = (props) => {
  return (
    <UserDataField>
      {props.show === false || props.idselect !== props.id ? (
        <UserInfo>{props.children}</UserInfo>
      ) : (
        <EditField
          onChange={props.change}
          variant="outlined"
        />
      )}
      <Edit onClick={props.click} />
    </UserDataField>
  );
};

export default InfoField;