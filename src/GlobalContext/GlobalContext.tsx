import React, { createContext, useContext, useState } from 'react';


interface GlobalContextProps {
  globalInputText: any;
  setGlobalInputText: React.Dispatch<React.SetStateAction<any>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC = ({ children }) => {
  const [globalInputText, setGlobalInputText] = useState<any>(undefined);

  return (
    <GlobalContext.Provider value={{ globalInputText, setGlobalInputText }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }

  return context;
};