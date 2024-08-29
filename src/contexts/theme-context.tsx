"use client";
import { getPreferredTheme } from "@/utils/get-preferred-theme";
import {
  useState,
  createContext,
  useLayoutEffect,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useLayoutEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
