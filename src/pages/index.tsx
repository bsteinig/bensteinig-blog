import Cover from "@/features/cover";
import Hero from "@/features/hero/hero";
import { Container, Text, Title, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    scrollBehavior: "smooth",
    overflowX: "hidden",
    boxSizing: "border-box",
  },
}));

function Index() {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <Hero />
      <Cover />
    </main>
  );
}

export default Index;