// @ts-nocheck
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Skeleton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getPostContent, getPostMetadata } from "@/firebase/lib/firebase";
import { Timestamp } from "firebase/firestore";
import PostContent from "@/features/post/postContent";

function Post() {
  const small = useMediaQuery("(max-width: 1150px)");
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    async function fetchPostData() {
      const [content, metadata] = await Promise.all([
        getPostContent(slug),
        getPostMetadata(slug),
      ]);

      setPost({ ...content, ...metadata });
    }

    if (slug) {
      fetchPostData();
    }
  }, [slug]);

  return (
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
          content={post.content}
          date={post.date}
          tags={post.tags}
          title={post.title}
        />
      )}
    </Container>
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
