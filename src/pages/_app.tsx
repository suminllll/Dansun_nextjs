import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import "../styles/slider.scss";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
