"use client";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import { useState, FormEvent } from "react";
type eventType = FormEvent<HTMLInputElement>;
export const Users = () => {
  const { data, isLoading, error } = useFetch("users");
  const [query, setQuery] = useState("");

  const onChangeHandler = (e: eventType) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const searchHandler = (list: []) => {
    return list?.filter((item: any) => {
      return query.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(query);
    });
  };

  const mapItems = (data: any) => (
    <>
      <li className="listItem py-3" key={data?.id} id={data?.id}>
        <img src={data?.image} alt="Picture of the author" className="image" />
        <div>
          <h4 className="font-medium">{data?.name}</h4>
          <p className="email">{data?.detail}</p>
        </div>
      </li>
      <hr className="divider" />
    </>
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
      <button className="btn mt-5">CLEAR LIST</button>
    </div>
  );
};
