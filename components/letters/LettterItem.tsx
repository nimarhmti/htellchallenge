import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { ItemModel } from "@/interface/list.interface";
import { idGenerator } from "@/utils/IdGenerator";
import React from "react";

export const LetterItem = (props: ItemModel) => {
  const { addItem } = useGlobalContext();
  return (
    <div key={props.id}>
      <li
        className="listItem py-3"
        key={idGenerator(props.id, Direction.LETTERS)}
        id={idGenerator(props.id, Direction.LETTERS)}
        onClick={() =>
          addItem({ ...props, id: idGenerator(props.id, Direction.LETTERS) })
        }
      >
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="Picture of the author"
          className="image"
        />
        <div>
          <h4 className="font-medium">{props?.name}</h4>
          <p className="email">{props?.detail}</p>
        </div>
      </li>
      <hr className="divider" />
    </div>
  );
};
