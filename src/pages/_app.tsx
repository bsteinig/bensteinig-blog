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

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
            fontFamily: "Inter, sans-serif",
            headings: {
              fontFamily: "Space Grotesk, sans-serif",
            },
          }}
        >
          <MiniNav />
          <main
            style={{
              minHeight: "100vh",
              position: "relative",
              zIndex: 1,
              scrollBehavior: "smooth",
              overflowX: "hidden",
              boxSizing: "border-box",
              backgroundColor: colorScheme === "dark" ? "#141517" : "#F1F3F5",
            }}
          >
            <Component {...pageProps} />
          </main>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
