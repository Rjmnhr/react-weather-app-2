import { createContext, useContext, useState } from "react";

export const DataContext=createContext();

export const AppContextProvider=({children})=>{
    const [city,setCity]=useState('bangalore');
   const [dataArr,setDataArr]=useState([]);
   const [theme,setTheme]=useState('light')

    const value={
        city,
        setCity,
        dataArr,
        setDataArr,
        theme,
        setTheme
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const useApplicationContext = () => {
    return useContext(DataContext);
  };
  