"use client";
import { useGlobalContext } from "@/app/context/store";
import { Direction } from "@/enums/enum";
import { useFetch } from "@/hooks/useFetch";
import { ItemModel, userItemModel } from "@/interface/list.interface";
import Image from "next/image";
import { useState, FormEvent } from "react";
type eventType = FormEvent<HTMLInputElement>;
export const Users = () => {
  const { data, isLoading } = useFetch("users");
  const [query, setQuery] = useState("");
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
    cleanUp(Direction.USER);
  };

  const mapItems = (data: userItemModel) => (
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
        {isLoading ? <p></p> : searchHandler(data)?.map(mapItems)}
      </ul>
      <button className="btn mt-5" onClick={onCleanUp}>
        CLEAR LIST
      </button>
    </div>
  );
};
