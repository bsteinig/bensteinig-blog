import { Paper, Stack, Text, Title, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Timestamp } from "firebase/firestore";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: "min(95%,900px)",
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

function Card({ id, title, date, excerpt, tags }: CardProps) {
  const { classes } = useStyles();
  const medium = useMediaQuery("(max-width: 600px)");

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // @ts-ignore
  const readableDate = date.toDate().toLocaleString("en-US", options);

  return (
    <Paper shadow="sm" radius="md" p="md" className={classes.root}>
      <Stack spacing={0}>
        <Title className={classes.title}>
          <Text inherit component="a" href={`/post/${id}`}>
            {title}
          </Text>
        </Title>
        <Text lineClamp={medium ? 2 : 4} pt={10} pb={5}>
          {excerpt}
        </Text>
        <Text size="md" color="dimmed">
          {readableDate}
        </Text>
      </Stack>
    </Paper>
  );
}

export default Card;

interface CardProps {
  title: string;
  date: Timestamp;
  excerpt: string;
  tags: string[];
  key: string;
  id: string;
}
