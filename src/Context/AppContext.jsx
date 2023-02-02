import { useState, useEffect, createContext, useContext } from "react";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  return (
    <appContext.Provider value={{ user, setUser }}>
      {children}
    </appContext.Provider>
  );
};

export const appStore = () => useContext(appContext);
