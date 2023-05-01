import React, { useState, useEffect } from "react";
import { Button, Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ItemCounter from "./ItemCounter";
import Dropdown from "./Dropdown";
import NumberInput from "./NumberInput";
import Toggle from "./Toggle";
import ItemSummary from "./ItemSummary";

const LaundryItemForm = () => {
  const [itemCount, setItemCount] = useState(1);
  const [itemType, setItemType] = useState("");
  const [washType, setWashType] = useState("");
  const [pieces, setPieces] = useState(0);
  const [addOns, setAddOns] = useState(false);
  const [price, setPrice] = useState(0);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    calculatePrice(itemType, washType, pieces, addOns);
  }, [itemType, washType, pieces, addOns]);

  const calculatePrice = (itemType, washType, pieces, addOns) => {
    let basePrice;

    if (itemType === "shirt") {
      basePrice = 10;
    } else if (itemType === "jeans") {
      basePrice = 12;
    } else if (itemType === "pant") {
      basePrice = 15;
    }

    if (washType === "Petrol Wash") {
      basePrice += 5;
    }

    if (addOns) {
      basePrice += 2;
    }

    const totalPrice = basePrice * pieces;
    setPrice(totalPrice);
  };

  const FormContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  `;

  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (editingIndex >= 0) {
      const updatedItems = [...items];
      updatedItems.splice(editingIndex, 0, {
        itemType,
        washType,
        pieces,
        price,
        addOns,
      });
      setItems(updatedItems);
      setEditingIndex(-1);
    } else {
      setItems([
        ...items,
        {
          itemType,
          washType,
          pieces,
          price,
          addOns,
        },
      ]);
      setItemCount(itemCount + 1);
    }
  };
  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setItemType(items[index].itemType);
    setWashType(items[index].washType);
    setPieces(items[index].pieces);
    setPrice(items[index].price);
    setAddOns(items[index].addOns);
    setEditingIndex(index);
    handleDeleteItem(index);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemCounter itemCount={itemCount} />
      </Grid>
      <Grid item xs={6}>
        <Dropdown
          label="Item Type"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          options={["shirt", "jeans", "pant"]}
        />
      </Grid>
      <Grid item xs={6}>
        <Dropdown
          label="Wash Type"
          value={washType}
          onChange={(e) => setWashType(e.target.value)}
          options={["Petrol Wash", "Regular Wash"]}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberInput
          label="Pieces"
          value={pieces}
          onChange={(e) => setPieces(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Toggle
          label="Add-Ons"
          checked={addOns}
          onChange={(e) => setAddOns(e.target.checked)}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberInput label="Price" value={`${price}`} disabled />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddItem}>
          Add Item
        </Button>
      </Grid>
      <ItemSummary
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
      />
    </Grid>
  );
};

export default LaundryItemForm;
