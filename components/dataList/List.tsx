import { useGlobalContext } from "@/app/context/store";
import { ItemModel } from "@/interface/list.interface";
import { Lilita_One } from "next/font/google";
import React from "react";
import { ListItem } from "./ListItem";

export const List = () => {
  const { removeItem, data } = useGlobalContext();
  const { length } = data;
  const mapItemHandler = (item: ItemModel) => <ListItem {...item} />;
  return (
    <div className="card flex-col overflow-scroll">
      {!!length && <p>tap to delete</p>}
      <ul>{data?.map(mapItemHandler)}</ul>
    </div>
  );
};
