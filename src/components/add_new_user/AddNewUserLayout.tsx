import React from "react";
import PageLayout from "../common/PageLayout";
import TextInput from "../common/TextInput";

type Props = {};

const AddNewUserLayout = (props: Props) => {
  return (
    <div
      style={{
        width: "70%",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20%",
        gap: 20,
        display: "flex",
      }}
    >
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="role" />
    </div>
  );
};

export default AddNewUserLayout;
