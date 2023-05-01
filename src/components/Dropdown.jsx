import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({ label, value, onChange, options }) => (
  <FormControl variant="outlined" style={{ width: "150px" }}>
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange} label={label}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Dropdown;
