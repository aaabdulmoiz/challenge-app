import React, { useState, createContext } from "react";

export const StringContext = createContext();

export const StringProvider = (props) => {
  const [word, setWord] = useState([{ word: "Empty" }]);
  return (
    <StringContext.Provider value={"Hello"}>
      {props.children}
    </StringContext.Provider>
  );
};
