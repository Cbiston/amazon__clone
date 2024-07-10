import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Create the StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook to use the StateContext
export const useStateValue = () => useContext(StateContext);
