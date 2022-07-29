import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext()

// children is the component to be rendered after extracting the state of the user
export const StateProvider = ({ reducer, initialState, children }) => (
    // Pass the reducer and initialState using the useReducer hook
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Hook to update state value
export const useStateValue = () => useContext(StateContext)