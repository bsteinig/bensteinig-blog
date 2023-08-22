import Card from "@/features/cards/card";
import { getAllPosts } from "@/firebase/lib/firebase";
import { Container, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { DocumentData, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Archive() {
  const [archive, setArchive] = useState<DocumentData[]>([]);
  const small = useMediaQuery("(max-width: 1150px)");

  useEffect(() => {
    async function fetchArchive() {
      const archive = await getAllPosts();
      console.log(archive);
      setArchive(archive);
    }

    fetchArchive();
  }, []);

  return (
    <Container size="md" mt={small ? 180 : 120} mb={100}>
      <Title order={1} mb={30}>
        Archive
      </Title>
      <Stack spacing="xl">
        {archive.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Archive;

interface ArchiveProps {
  title: string;
  date: Timestamp;
  excerpt: string;
  tags: string[];
}
