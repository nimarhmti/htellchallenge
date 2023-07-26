import { useGlobalContext } from "@/app/context/store";
import { Lilita_One } from "next/font/google";
import React from "react";

export const List = () => {
  const { removeItem, data } = useGlobalContext();
  const { length } = data;
  const mapItemHandler = (item: any) => (
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
    <div className="card overflow-scroll">
      <ul>{data?.map(mapItemHandler)}</ul>
    </div>
  );
};
