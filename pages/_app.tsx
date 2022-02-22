import type { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faviconB64 } from "../public/favicon";
import Layout from "../components/layout";
import "../styles.css";

config.autoAddCss = false;

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#fefefe",
      light: "#6d6d6d",
    },
    secondary: {
      main: "#3949ab",
      light: "#6f74dd",
      dark: "#00227b",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ally Amaral</title>
        <link rel="shortcut icon" href={faviconB64} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
