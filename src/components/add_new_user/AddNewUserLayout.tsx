import React from "react";
import PageLayout from "../common/PageLayout";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import AppText from "../common/AppText";

type Props = {};

const AddNewUserLayout = (props: Props) => {
  return (
    <div
      style={{
        width: "70%",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 50,
        gap: 20,
        // height: "60%",
        paddingBottom: 100,
        display: "flex",
        background: "#fff",
        borderRadius: 10,
      }}
    >
      <AppText.LargeText>ADD NEW USER</AppText.LargeText>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="role" />
      <Button
        style={{
          width: "80%",
          marginTop: 30,
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddNewUserLayout;
