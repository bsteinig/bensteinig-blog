import { Grid, Paper, Title, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    minHeight: "min(50vh, 200px)",
  },
}));

const sizes = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

function DashCard({ title, size, children }: DashCardProps) {
  const { classes } = useStyles();

  return (
    <Grid.Col span={sizes[size]}>
      <Paper className={classes.root} p="md" radius="md">
        <Title>{title}</Title>
        {children}
      </Paper>
    </Grid.Col>
  );
}

export default DashCard;

interface DashCardProps {
  title: string;
  size: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}
