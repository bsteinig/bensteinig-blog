import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

function Tags() {
  const small = useMediaQuery("(max-width: 1150px)");

  return (
    <Container size="md" mt={small ? 180 : 120} mb={100}>
      <Title order={1} mb={30}>
        Tags
      </Title>
      <SimpleGrid cols={4}>
        
      </SimpleGrid>
    </Container>
  );
}

export default Tags;