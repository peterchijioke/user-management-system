import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import InnerCard from "../common/InnerCard";
import { OutlinedInput, Typography } from "@mui/material";
import TextInput from "../common/TextInput";
import AppText from "../common/AppText";

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const handleChange =
    (setState: React.Dispatch<React.SetStateAction<undefined>>) =>
    (event: any) => {
      setState(event.target.value);
    };
  const handleLogin = () => {};
  return (
    <InnerCard>
      <AppText.LargeText>Login to UMS</AppText.LargeText>
      <TextInput onChange={handleChange(setEmail)} placeholder="Email" />
      <TextInput placeholder="Password" onChange={handleChange(setPassword)} />
      <Button
        onClick={() => navigate("/dashboard")}
        style={{ width: "80%", marginTop: 20 }}
      >
        Login
      </Button>
    </InnerCard>
  );
};

export default LoginCard;
