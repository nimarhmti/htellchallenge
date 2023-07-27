"use client";
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
import { UserItem } from "./UserItem";
export const Users = () => {
  const { data, isLoading } = useFetch("users");
  const [list, setList] = useState<userListModel>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setList(data);
  }, [data]);

  const onChangeHandler = (e: eventType) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const mapItems = (data: ItemModel) => <UserItem {...data} />;

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
