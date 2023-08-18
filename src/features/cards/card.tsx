import { Paper, Stack, Text, Title, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const cardStyles = createStyles((theme) => ({
  root: {
    minWidth: "min(100%,400px)",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    zIndex: 199,
  },
  title: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "min(5vmin, 30px)",
  },
}));

function Card() {
  const { classes } = cardStyles();
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <Paper shadow="sm" radius="md" pt="xs" p="sm" className={classes.root}>
      <Stack spacing={0}>
        <Title className={classes.title}>Interesting Blog Post</Title>
        <Text lineClamp={matches ? 2 : 4} pt={10} pb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          purus in massa tempor nec feugiat nisl pretium. Vulputate sapien nec
          sagittis aliquam malesuada bibendum arcu vitae. Nulla pharetra diam
          sit amet nisl.
        </Text>
        <Text size="md" color="dimmed">
          2/2/2021
        </Text>
      </Stack>
    </Paper>
  );
}

export default Card;
