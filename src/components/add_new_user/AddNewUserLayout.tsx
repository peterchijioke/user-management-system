import React from "react";
import PageLayout from "../common/PageLayout";
import TextInput from "../common/TextInput";

type Props = {};

const AddNewUserLayout = (props: Props) => {
  return (
    <PageLayout>
      <div style={{ width: "95%" }}>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Email" />
      </div>
    </PageLayout>
  );
};

export default AddNewUserLayout;
