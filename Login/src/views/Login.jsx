import React from "react";

import Logo from "../assets/LogotipoDeal.png";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider"
import Button from "../components/button";
import InputBox from "../components/inputBox";
import SocialLogin from "../components/socialLogin"

const Login = () => {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      p={5}
      borderRadius="10px"
      boxShadow={3}
      width={"400px"}
      sx={{ background: "white" }}
    >
      <Box>
        <img src={Logo} style={{ maxWidth: "200px", marginBottom: "2em" }} />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <InputBox label={"User"} />
        <InputBox label={"Password"} type={"password"} />
      </Box>
      <Button label={"Login"} />
      <Link href="#">Forgot password?</Link>
      <Divider variant="middle"/>
      <Box>
        <SocialLogin />
      </Box>
    </Box>
  );
};

export default Login;
