import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Grid,
  SimpleGrid,
  Title,
  createStyles,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Card from "../cards/card";
import { useMediaQuery } from "@mantine/hooks";

const gridColor = "495057";

const heroStyles = createStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    zIndex: -1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[2],
  },
  hero: {
    minHeight: "100vh",
  },
  grid: {
    boxShadow: `inset 25px 25px 40px 25px ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    },inset -25px -25px 40px 25px ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${gridColor}' fill-opacity='0.31'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  headline: {
    fontSize: "min(8.12vmin,95px)",
    fontWeight: 800,
    maxWidth: 650,
    lineHeight: 0.95,
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: "min(7vmin,40px)",
  },
  graphic: {
    backgroundColor: "#457fca",
    backgroundImage: "linear-gradient(to top, #457fca, #5691c8)",
    borderLeft: `3px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    }`,
    filter: "blur(200px)",
  },
}));

function Hero() {
  const { classes } = heroStyles();
  const matches = useMediaQuery("(max-width: 800px)");

  const DESKTOP_INDENT = "10vw";
  const MOBILE_INDENT = "0vw";

  return (
    <Grid gutter={0} className={classes.root}>
      <Grid.Col lg={11} className={classes.hero}>
        <Container size="lg" p="lg" mt={60}>
          <Box className={classes.grid} py={90}>
            <Title
              className={classes.headline}
              ml={matches ? MOBILE_INDENT : DESKTOP_INDENT}
            >
              HI - I&apos;M BEN. WELCOME TO MY BLOG
            </Title>
          </Box>
          <Divider
            mx={matches ? MOBILE_INDENT : DESKTOP_INDENT}
            m={70}
            size={4}
          />

          <Title
            ml={matches ? MOBILE_INDENT : DESKTOP_INDENT}
            mb={30}
            className={classes.subtitle}
          >
            FEATURED ARTICLES
          </Title>

          <SimpleGrid
            cols={1}
            breakpoints={[{ minWidth: "sm", cols: 2 }]}
            ml={matches ? MOBILE_INDENT : DESKTOP_INDENT}
            style={{ justifyItems: "start" }}
            verticalSpacing={40}
          ></SimpleGrid>
        </Container>
      </Grid.Col>
      <Grid.Col lg={1} className={classes.graphic}></Grid.Col>
    </Grid>
  );
}

export default Hero;
