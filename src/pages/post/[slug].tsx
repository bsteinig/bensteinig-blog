import PostContent from "@/features/post/postContent";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { Timestamp, collection, doc, onSnapshot } from "firebase/firestore";
import { Container, Skeleton, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    scrollBehavior: "smooth",
    overflowX: "hidden",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
  },
}));

function Post() {
  const { classes } = useStyles();
  const small = useMediaQuery("(max-width: 1150px)");
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    if (slug) {
      console.log(slug);
      const postRef = collection(db, "posts");
      const q = doc(postRef, slug as string);
      onSnapshot(q, (doc) => {
        if (doc.exists()) {
          setPost(doc.data() as PostProps);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [slug]);

  return (
    <main className={classes.root}>
      <Container size="md" mt={small ? 180 : 120}>
        {!post ? (
          <>
            <Skeleton height={46} radius="md" width={"50%"} my={5} />
            <Skeleton height={24} radius="md" width={"30%"} />
            <Skeleton height={2} radius="md" my={10} />
            <Skeleton height={250} radius="md" my={10} width={"100%"} />
            <Skeleton height={200} radius="md" my={10} width={"80%"} />
            <Skeleton height={200} radius="md" my={10} width={"90%"} />
          </>
        ) : (
          <PostContent
            title={post.title}
            date={post.date}
            content={post.content}
            tags={post.tags}
          />
        )}
      </Container>
    </main>
  );
}

export default Post;

interface PostProps {
  title: string;
  date: Timestamp;
  content: ContentInterface[];
  tags: string[];
}

interface ContentInterface {
  type: string;
  content: string;
}
