import { ReactNode, createContext, useContext, useState } from 'react';
interface PropsChildren {
  children: ReactNode;
}
interface GlobalContextProps {
  globalInputText:  string;
  setGlobalInputText: React.Dispatch<React.SetStateAction<string>>;
}

const initialGlobalContext: GlobalContextProps = {
  globalInputText: "",
  setGlobalInputText: () => { }
}

const GlobalContext = createContext<GlobalContextProps>(initialGlobalContext);


export const GlobalProvider = ({ children }: PropsChildren) => {
  const [globalInputText, setGlobalInputText] = useState<string>("");

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