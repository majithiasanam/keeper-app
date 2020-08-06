import React, { createContext, useReducer, useContext } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ reducer, initialState, children }) => {
  return (
    <NotesContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
