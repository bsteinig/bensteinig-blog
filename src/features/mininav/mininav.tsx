import { Burger, Group, UnstyledButton, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const miniNavStyles = createStyles((theme) => ({
  burger: {
    position: "fixed",
    top: 30,
    left: 30,
    zIndex: 2000,
  },
  linksGroup: {
    position: "fixed",
    top: 30,
    left: 100,
    zIndex: 2000,
  },
}));

function MiniNav() {
  const { classes } = miniNavStyles();
  const [opened, handlers] = useDisclosure(false);

  return (
    <>
      <Burger
        className={classes.burger}
        opened={opened}
        onClick={handlers.toggle}
        size="lg"
        title="Open navigation"
      ></Burger>
      <Group className={classes.linksGroup}>
        <UnstyledButton>About</UnstyledButton>
        <UnstyledButton>Archive</UnstyledButton>
        <UnstyledButton>Tags</UnstyledButton>
      </Group>
    </>
  );
}

export default MiniNav;
