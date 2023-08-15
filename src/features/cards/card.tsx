import { Paper, createStyles } from "@mantine/core";
import React from "react";

const cardStyles = createStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
}));

function Card() {
  const { classes } = cardStyles();

  return (
    <Paper shadow="sm" radius={0} p="md" className={classes.root}>
      <h1>Card</h1>
    </Paper>
  );
}

export default Card;
