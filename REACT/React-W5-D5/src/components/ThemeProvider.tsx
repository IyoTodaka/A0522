import React, { useState, createContext, useEffect, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

type Props = {
  children: ReactNode;
};

const defaultTheme = "white";
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const currentTheme = "purple";
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
