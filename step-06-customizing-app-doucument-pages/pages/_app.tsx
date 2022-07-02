import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ThemeContext from "../components/ThemeContext";
import { useState } from "react";

// type Theme = {
//   dark: {
//     background: string;
//     color: string;
//   };
//   light: {
//     background: string;
//     color: string;
//   };
// };

const themes: any = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            ...themes[theme],
          }}
        >
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
