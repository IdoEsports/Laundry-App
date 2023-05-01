import React from "react";
import { TextField } from "@mui/material";

const ItemCounter = ({ itemCount }) => (
  <TextField
    type="number"
    label="Item #"
    value={itemCount}
    variant="outlined"
  />
);
export default ItemCounter;
