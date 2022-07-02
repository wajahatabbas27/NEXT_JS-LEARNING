import { createContext } from "react";

export interface ContextType {
  theme: string;
  toggleTheme: any;
}

const ThemeContext = createContext<ContextType>({
  theme: "light",
  toggleTheme: () => null,
});

export default ThemeContext;
