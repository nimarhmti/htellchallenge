import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { ItemModel } from "@/interface/list.interface";
import React from "react";

export const UserItem = (props: ItemModel) => {
  const { addItem } = useGlobalContext();
  return (
    <div key={props.id}>
      <li
        className="listItem py-3"
        key={props?.id + Direction.LETTERS}
        id={props?.id + Direction.LETTERS}
        onClick={() => addItem({ ...props, id: props.id + Direction.LETTERS })}
      >
        <img src={props.image} alt="Picture of the author" className="image" />
        <div>
          <h4 className="font-medium">{props?.name}</h4>
          <p className="email">{props?.detail}</p>
        </div>
      </li>
      <hr className="divider" />
    </div>
  );
};
