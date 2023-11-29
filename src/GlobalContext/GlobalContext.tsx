import { createContext, ReactNode, useContext, useState } from 'react';
interface PropsChildren {
  children: ReactNode;
}
interface GlobalContextProps {
  searchInputTextGlobal: string;
  setSearchInputTextGlobal: React.Dispatch<React.SetStateAction<string>>;
}

const initialGlobalContext: GlobalContextProps = {
  searchInputTextGlobal: '',
  setSearchInputTextGlobal: () => {
    // Purposely empty function because we don't need anything extra at the start.
  },
};

const GlobalContext = createContext<GlobalContextProps>(initialGlobalContext);

export const GlobalProvider = ({ children }: PropsChildren) => {
  const [searchInputTextGlobal, setSearchInputTextGlobal] = useState<string>('');

  return (
    <GlobalContext.Provider value={{ searchInputTextGlobal, setSearchInputTextGlobal }}>
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
