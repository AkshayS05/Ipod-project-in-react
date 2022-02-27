import { createContext, useReducer } from "react";
export const ThemeContext = createContext();
//to update state value
const themeReducer = (state, action) => {
  //to check the type property
  switch (action.type) {
    case "CHANGE_COLOR":
      //spreading to hndle more properties in future, else they won't exist
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  useReducer(themeReducer);
  const [state, dispatch] = useReducer(themeReducer, {
    color: "linear-gradient(180deg, #f0f2f0 0%, #000c40 100%",
  });
  //to change color
  const changeColor = (color) => {
    //object as argument as taking type and payload which is anydata in which we want to change our state on
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
