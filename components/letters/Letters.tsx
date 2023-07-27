"use client";
import React, { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import {
  ItemModel,
  eventType,
  letterListModel,
} from "@/interface/list.interface";
import { searchByName } from "@/utils/Search";
import { LetterItem } from "./LettterItem";

export const Letters = () => {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<letterListModel>([]);
  const { data, isLoading } = useFetch("letters");

  useEffect(() => {
    setList(data);
  }, [data]);

  const onChangeHandler = (e: eventType) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const mapItems = (data: ItemModel) => <LetterItem {...data} />;

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
