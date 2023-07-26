"use client";
import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { useFetch } from "@/hooks/useFetch";
import { ItemModel } from "@/interface/list.interface";
import { UserIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, FormEvent } from "react";
type eventType = FormEvent<HTMLInputElement>;
export const Letters = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetch("letters");
  const { addItem, cleanUp } = useGlobalContext();

  const onChangeHandler = (e: eventType) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const searchHandler = (list: []) => {
    return list?.filter((item: ItemModel) => {
      return query.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(query);
    });
  };

  const onCleanUp = () => {
    cleanUp(Direction.LETTERS);
  };

  const mapItems = (data: ItemModel) => (
    <div key={data.id}>
      <li
        className="listItem py-3"
        key={data?.id + Direction.LETTERS}
        id={data?.id + Direction.LETTERS}
        onClick={() => addItem({ ...data, id: data.id + Direction.LETTERS })}
      >
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="Picture of the author"
          className="image"
        />
        <div>
          <h4 className="font-medium">{data?.name}</h4>
          <p className="email">{data?.detail}</p>
        </div>
      </li>
      <hr className="divider" />
    </div>
  );

  return (
    <div className="card flex-col gap-4">
      <input
        type="text"
        className="textField"
        placeholder="Search..."
        value={query}
        onChange={onChangeHandler}
      />
      <ul className="list">
        {isLoading ? <p></p> : searchHandler(data)?.map(mapItems)}
      </ul>
      <button className="btn mt-5" onClick={onCleanUp}>
        CLEAR LIST
      </button>
    </div>
  );
};
