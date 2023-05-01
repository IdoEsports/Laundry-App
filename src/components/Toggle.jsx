import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

const Toggle = ({ label, checked, onChange }) => (
  <FormControlLabel
    control={<Switch checked={checked} onChange={onChange} />}
    label={label}
  />
);

export default Toggle;
