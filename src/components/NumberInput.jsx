import React from "react";
import { TextField } from "@mui/material";

const NumberInput = ({ label, value, onChange }) => (
  <TextField
    type="number"
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
  />
);

export default NumberInput;
