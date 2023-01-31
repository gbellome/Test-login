import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const checkbox = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Remember" />
    </FormGroup>
  );
};

export default checkbox;
