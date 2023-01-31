import React from "react";

import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";

import {
  FacebookLoginButton,
  TwitterLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const socialLogin = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <FacebookLoginButton style={{fontSize: '12px'}}/>
      <TwitterLoginButton style={{fontSize: '12px'}}/>
      <GoogleLoginButton style={{fontSize: '12px'}}/>
    </Stack>
  );
};

export default socialLogin;
