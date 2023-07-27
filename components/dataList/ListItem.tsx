import { useGlobalContext } from "@/app/context/store";
import { ItemModel } from "@/interface/list.interface";
import React from "react";

export const ListItem = ({ id, name }: ItemModel) => {
  const { removeItem, data } = useGlobalContext();

  return (
    <li className="chip " key={id} id={id} onClick={() => removeItem(id)}>
      {name}
    </li>
  );
};
