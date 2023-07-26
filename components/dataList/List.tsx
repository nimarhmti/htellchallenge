import { useGlobalContext } from "@/app/context/store";
import { ItemModel } from "@/interface/list.interface";
import { Lilita_One } from "next/font/google";
import React from "react";

export const List = () => {
  const { removeItem, data } = useGlobalContext();
  const { length } = data;
  const mapItemHandler = (item: ItemModel) => (
    <li
      className="chip "
      key={item.id}
      id={item.id}
      onClick={() => removeItem(item.id)}
    >
      {item.name}
    </li>
  );
  return (
    <div className="card flex-col overflow-scroll">
      {!!length && <p>tap to delete</p>}
      <ul>{data?.map(mapItemHandler)}</ul>
    </div>
  );
};
