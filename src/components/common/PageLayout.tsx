import React, { FC } from "react";

const PageLayout = ({ ...props }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20,
      }}
      {...props}
    />
  );
};

export default PageLayout;
