import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const inputBox = ({label, type = 'text'}) => {
  return <TextField id="outlined-basic" type={type} label={label} variant="outlined" />;
};

export default inputBox;
