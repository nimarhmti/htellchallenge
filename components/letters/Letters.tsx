"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { useFetch } from "@/hooks/useFetch";
import {
  ItemModel,
  eventType,
  letterListModel,
} from "@/interface/list.interface";
import { searchByName } from "@/utils/Search";

export const Letters = () => {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<letterListModel>([]);
  const { data, isLoading } = useFetch("letters");
  const { addItem } = useGlobalContext();
  useEffect(() => {
    setList(data);
  }, [data]);

  const onChangeHandler = (e: eventType) => {
    const { value } = e.currentTarget;
    setQuery(value);
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
        {isLoading ? <p></p> : searchByName(list, query)?.map(mapItems)}
      </ul>
      <button className="btn mt-5" onClick={() => setList([])}>
        CLEAR LIST
      </button>
    </div>
  );
};
