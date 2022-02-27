import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  //accessing value of the object defined in the themeContext
  const context = useContext(ThemeContext);
  //   if we are trying to access it outside the scope
  if (context === undefined) {
    throw new Error("useTheme must be used inside a theme provider!");
  }
  return context;
};
