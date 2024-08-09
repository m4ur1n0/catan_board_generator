import React, {ReactNode, createContext, useState, useContext} from "react";

interface DarkContextData {
    onLightMode : boolean;
}

const DarkContext = createContext<boolean | any>(undefined);

interface DarkProviderProps {
    children: ReactNode;
}

const DarkContextProvider : React.FC<DarkProviderProps> = ({children}) => {
    const [onLightMode, setDarkMode] = useState(true);
    function toggleDarkMode() {
        setDarkMode(!onLightMode);
        return onLightMode;
    }

    return <DarkContext.Provider value={[onLightMode, toggleDarkMode]}>{children}</DarkContext.Provider>;

}

const useDarkContext = () => {
    const context = useContext(DarkContext);
    if (!context) {
      throw new Error('useDarkContext must be used within a DarkProvider');
    }
    return context;
  };
  
  export { DarkContextProvider, useDarkContext };