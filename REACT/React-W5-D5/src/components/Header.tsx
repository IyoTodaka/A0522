import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useTheme = () => useContext(ThemeContext);

const Header = () => {
  const { theme, setTheme } = useTheme()!;
  
  return (
    <div style={{ backgroundColor: theme }}>
      <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
      </select>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
