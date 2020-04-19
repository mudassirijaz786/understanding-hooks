import React, { useState, useEffect, useContext } from "react";
import { TextField, Container, Typography } from "@material-ui/core";
import { ColorContext } from "./colors";

export const Greetings = () => {
  const [name, setName] = useState("Mudassir");
  const colors = useContext(ColorContext);
  useEffect(() => {
    document.title = name;
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <Container maxWidth="sm" style={{ textAlign: "center" }}>
      <Typography>
        Use of useState, useContext, useEffect in this example
      </Typography>
      <TextField
        style={{ backgroundColor: colors.lightGreen }}
        label="name"
        value={name}
        onChange={handleNameChange}
      />
    </Container>
  );
};
