import { Divider, Text, Title, createStyles } from "@mantine/core";
import { Timestamp } from "firebase/firestore";
import React from "react";

const usePostStyles = createStyles((theme) => ({
  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "max(2vw, 24px)",
  },
  content: {
    fontFamily: "IBM Plex Serif, sans-serif",
  },
  dropCap: {
    fontFamily: "IBM Plex Serif, sans-serif",

    "&::first-letter": {
      fontSize: "max(4vw, 36px)",
      fontWeight: 900,
      float: "left",
      lineHeight: 0.65,
      margin: "0.1em 0.1em 0.2em 0",
    },
  },
}));

function PostContent({ title, date, content, tags }: PostContentProps) {
  const { classes } = usePostStyles();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  // @ts-ignore
  const readableDate = date.toDate().toLocaleString("en-US", options);

  const contentJSX = content.map((item, index) => {
    if (item.type === "paragraph") {
      return (
        <div key={index}>
          {index == 0 ? (
            <Text className={classes.dropCap} size="xl">
              {item.content}
            </Text>
          ) : (
            <Text className={classes.content} size="xl">
              {item.content}
            </Text>
          )}
          <br />
        </div>
      );
    }
  });

  return (
    <>
      <Title className={classes.title}>{title}</Title>
      <Text size="lg" color="dimmed">
        {readableDate}
      </Text>
      <Divider mt={10} mb={20} />
      {contentJSX}
    </>
  );
}

export default PostContent;

interface PostContentProps {
  title: string;
  date: Timestamp;
  content: any[];
  tags: string[];
}
