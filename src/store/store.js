import React, { createContext, useReducer } from "react";
import { mainReducer } from "./reducers";
export const MainContext = createContext();

const initState = {
  button: {},
  eventTrack: [],
  picker: { date: "", year: "", month: "", monthDetails: [] },
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
