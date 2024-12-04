import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [accScore, setAccScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ accScore, setAccScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
