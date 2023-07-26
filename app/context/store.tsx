"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type dataType = {
  name: string;
  id: string;
};
interface contextProps {
  data: dataType[] | [];
  addItem: (item: dataType) => void;
  removeItem: (id: string) => void;
}
const GlobalContext = createContext<contextProps>({
  data: [],
  addItem: () => null,
  removeItem: () => null,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<[] | dataType[]>([]);
  //add new item to list
  const addItem = (item: dataType) => {
    const existingItem = data.some((ele) => ele.name === item.name);
    if (!existingItem) {
      setData((prevData) => [...prevData, item]);
    }
    return data;
  };
  //remove single item
  const removeItem = (id: string) => {
    setData((oldValues) => {
      return oldValues.filter((item) => item.id !== id);
    });
  };

  const value = { data, addItem, removeItem };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
