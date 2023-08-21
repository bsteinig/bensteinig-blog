import {
  ActionIcon,
  Burger,
  Group,
  Stack,
  Transition,
  createStyles,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ColorSchemeToggle from "./components/colorSchemeToggle";
import MiniLink from "./components/miniLink";
import { ENTRY_LENGTH, EXIT_LENGTH, LINKS } from "./static/data";
import { useRouter } from "next/router";
import { IconHome } from "@tabler/icons-react";

const miniNavStyles = createStyles((theme) => ({
  burger: {
    position: "fixed",
    top: 30,
    left: "5%",
    zIndex: 2000,
    alignItems: "flex-start",
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();

  const renderLinks = LINKS.map((link, index) => {
    const enterDuration = (ENTRY_LENGTH / LINKS.length) * (index + 1);
    const exitDuration = (EXIT_LENGTH / LINKS.length) * (LINKS.length - index);

    return (
      <MiniLink
        label={link.label}
        href={link.href}
        key={index}
        opened={opened}
        enterDuration={enterDuration}
        exitDuration={exitDuration}
      />
    );
  });

  return (
    <Group className={classes.burger}>
      <Stack style={{ alignItems: "center" }} spacing="sm">
        <Burger
          opened={opened}
          onClick={handlers.toggle}
          size="lg"
          title="Open navigation"
        ></Burger>
        {router.pathname === "/" ? null : (
          <Transition
            mounted={opened}
            transition="slide-down"
            duration={333}
            exitDuration={250}
            timingFunction="ease"
          >
            {(styles) => (
              <ActionIcon
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  ...styles,
                }}
                onClick={() => router.push("/")}
                size="lg"
                radius="xl"
                variant="transparent"
              >
                <IconHome size={22} />
              </ActionIcon>
            )}
          </Transition>
        )}
        <Transition
          mounted={opened}
          transition="slide-down"
          duration={666}
          exitDuration={450}
          timingFunction="ease"
        >
          {(styles) => (
            <ColorSchemeToggle
              styles={styles}
              {...{ colorScheme, toggleColorScheme }}
            />
          )}
        </Transition>
      </Stack>
      <Group spacing="lg" mt={7.5}>
        {renderLinks}
      </Group>
    </Group>
  );
}

export default MiniNav;
