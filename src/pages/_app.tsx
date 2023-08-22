import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createStyles,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import MiniNav from "@/features/mininav/mininav";

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


export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { classes } = useStyles();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Head>
        <title>Ben Steinig</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800&family=IBM+Plex+Serif:wght@300;400&family=Poppins:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
            fontFamily: "Inter, sans-serif",
            headings: {
              fontFamily: "Space Grotesk, sans-serif",
            },
          }}
        >
          <MiniNav />
          <main className={classes.root}>
          <Component {...pageProps} />
          </main>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
