"use client";
import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { useFetch } from "@/hooks/useFetch";
import {
  ItemModel,
  eventType,
  userItemModel,
  userListModel,
} from "@/interface/list.interface";
import { searchByName } from "@/utils/Search";
import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";
export const Users = () => {
  const { data, isLoading } = useFetch("users");
  const [list, setList] = useState<userListModel>([]);
  const [query, setQuery] = useState("");
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
        id={data?.id + Direction.USER}
        onClick={() => addItem({ ...data, id: data.id + Direction.USER })}
      >
        <img src={data?.image} alt="Picture of the author" className="image" />
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
