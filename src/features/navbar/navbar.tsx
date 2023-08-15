import { BrandLogo } from "@/shared/BrandLogo";
import {
  ActionIcon,
  Burger,
  Button,
  Center,
  createStyles,
  Group,
  keyframes,
  MediaQuery,
  Navbar,
  Paper,
  Text,
  Tooltip,
  Transition,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { navbarData } from "./static/data";
import { LinksGroup } from "./components/Links";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "5%": {
    transform: "rotate(45deg)",
  },
  "45%": {
    transform: "rotate(135deg)",
  },
  "50%": {
    transform: "rotate(180deg)",
  },
  "55%": {
    transform: "rotate(225deg)",
  },
  "95%": {
    transform: "rotate(315deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    top: 30,
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: 10,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,
    overflow: "hidden",
    transition: "all 0.2s ease",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "101%",
      height: "1250%",
      transform: "translate(-1.9%, 0%)",
      borderRadius: theme.radius.lg,
    },
  },
  hovered: {
    "&::before": {
      animation: `${spin} 2s linear infinite`,
    },
  },
  inset: {
    position: "absolute",
    inset: "4px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    borderRadius: "13px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  expanded: {
    padding: "20px 20px",
    justifyContent: "space-between",
    left: "50%",
  },
  link: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkGroup: {
    width: "100%",
    maxWidth: 650,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  dropdown: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    zIndex: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

function Nav({ setActive }: { setActive: (active: string) => void }) {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();

  const theme = useMantineTheme();

  const [opened, { toggle, close }] = useDisclosure(false);

  const [scroll, scrollTo] = useWindowScroll();
  const [locked, setLocked] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [hoverColor, setHoverColor] = useState(theme.colors.blue[5]);

  // set expanded to false if the user scrolls down, and true if they scroll up
  useEffect(() => {
    let lastScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > lastScrollPos) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
      lastScrollPos = scrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [mobileOpen]);

  const links = navbarData.map((item, index) => (
    <LinksGroup {...item} key={item.label} setMobileOpen={setMobileOpen} />
  ));

  return (
    <Navbar
      height={70}
      fixed={false}
      p="sm"
      width={expanded ? { base: "50vmin" } : { base: "60px" }}
      className={
        classes.root +
        " " +
        (expanded ? classes.expanded : "") +
        " " +
        (hovered ? classes.hovered : "") +
        " navbar-animation "
      }
      sx={{
        "&::before": {
          backgroundImage: hovered
            ? `conic-gradient(transparent, transparent, transparent, ${hoverColor})`
            : "",
        },
      }}
    >
      <span className={classes.inset}>
        <Center
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {expanded && (
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
          )}
          <UnstyledButton
            className={classes.link}
            onClick={() => {
              if (expanded) {
                console.log(router.pathname);
                router.pathname === "/" ? scrollTo({ y: 0 }) : router.push("/");
              } else setExpanded(!expanded);
            }}
          >
            <BrandLogo width={27.5} />
          </UnstyledButton>
          {expanded && (
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              radius="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.colors.gray[9],
              })}
              mx={10}
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
          )}
        </Center>
        {expanded && (
          <>
            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
              <Group noWrap className={classes.linkGroup}>
                {links}
              </Group>
            </MediaQuery>

            <Center
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Transition
                transition="pop-top-right"
                duration={200}
                mounted={opened}
              >
                {(styles) => (
                  <Paper className={classes.dropdown} withBorder style={styles}>
                    {links}
                  </Paper>
                )}
              </Transition>
            </Center>
          </>
        )}
      </span>
    </Navbar>
  );
}

export default Nav;
