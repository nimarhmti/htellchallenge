import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { ItemModel } from "@/interface/list.interface";
import { idGenerator } from "@/utils/IdGenerator";
import React from "react";

export const UserItem = (props: ItemModel) => {
  const { addItem } = useGlobalContext();
  return (
    <div key={props.id}>
      <li
        className="listItem py-3"
        key={idGenerator(props.id, Direction.USER)}
        id={idGenerator(props.id, Direction.USER)}
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
