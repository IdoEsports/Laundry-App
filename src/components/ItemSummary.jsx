import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ItemSummary = ({ items, onDelete, onEdit }) => (
  <Table>
    <TableHead>
      <TableRow style={{ backgroundColor: "grey" }}>
        <TableCell>Item#</TableCell>
        <TableCell>ItemType</TableCell>
        <TableCell>WashType</TableCell>
        <TableCell>Pieces</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Add-on</TableCell>
        <TableCell>Options</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{item.itemType}</TableCell>
          <TableCell>{item.washType}</TableCell>
          <TableCell>{item.pieces}</TableCell>
          <TableCell>{`${item.price}`}</TableCell>
          <TableCell>{item.addOns ? "True" : "False"}</TableCell>
          <TableCell>
            <IconButton onClick={() => onDelete(index)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => onEdit(index)}>
              <EditIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell colSpan={3}></TableCell>
        <TableCell>{`${items.reduce(
          (acc, item) => acc + item.price,
          0
        )}`}</TableCell>
        <TableCell colSpan={2}></TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default ItemSummary;
