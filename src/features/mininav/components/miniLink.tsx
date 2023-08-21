import { Transition, UnstyledButton, createStyles } from "@mantine/core";
import React from "react";

const miniLinkStyles = createStyles((theme) => ({
  link: {
    fontSize: theme.fontSizes.lg,
  },
}));

function MiniLink({
  opened,
  enterDuration,
  exitDuration,
  label,
  href,
}: MiniLinkProps) {
  const { classes } = miniLinkStyles();

  return (
    <Transition
      mounted={opened}
      transition="slide-down"
      duration={enterDuration}
      exitDuration={exitDuration}
      timingFunction="ease"
    >
      {(styles) => (
        <UnstyledButton
          className={classes.link}
          style={styles}
          component="a"
          href={href}
        >
          {label}
        </UnstyledButton>
      )}
    </Transition>
  );
}

export default MiniLink;

interface MiniLinkProps {
  opened: boolean;
  enterDuration: number;
  exitDuration: number;
  label: string;
  href: string;
}
