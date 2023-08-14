import {
  Center,
  Container,
  Divider,
  Grid,
  SimpleGrid,
  Title,
  createStyles,
} from "@mantine/core";
import React from "react";

const heroStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    zIndex: -1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[2],
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
    backgroundColor: "#e999ff",
    backgroundImage:
      "radial-gradient(at 73% 9%, hsla(197,90%,61%,1) 0px, transparent 50%),radial-gradient(at 20% 41%, hsla(215,93%,61%,1) 0px, transparent 50%),radial-gradient(at 99% 58%, hsla(343,85%,61%,1) 0px, transparent 50%),radial-gradient(at 71% 82%, hsla(249,81%,61%,1) 0px, transparent 50%),radial-gradient(at 1% 27%, hsla(164,68%,61%,1) 0px, transparent 50%),radial-gradient(at 5% 3%, hsla(205,78%,61%,1) 0px, transparent 50%),radial-gradient(at 89% 12%, hsla(168,70%,61%,1) 0px, transparent 50%)",
  },
}));

function Hero() {
  const { classes } = heroStyles();

  const INDENT = '10vw'

  return (
    <Grid gutter={0} className={classes.root}>
      <Grid.Col lg={9}>
        <Container size="lg" p="lg" mt={150}>
          <Title className={classes.headline} ml={INDENT}>
            HI - I'M BEN. WELCOME TO MY BLOG
          </Title>
          <Divider mx={INDENT} m={70} size={4} />
          <Title ml={INDENT} className={classes.subtitle}>
            FEATURED ARTICLES
          </Title>
        </Container>
      </Grid.Col>
      <Grid.Col lg={3} className={classes.graphic}></Grid.Col>
    </Grid>
  );
}

export default Hero;
