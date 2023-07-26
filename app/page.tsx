"use client";
import { Users } from "@/components/Users/Users";
import { Letters } from "@/components/letters/Letters";
import { useGlobalContext } from "./context/store";
import { List } from "@/components/dataList/List";

export default function Home() {
  
  return (
    <main className="h-screen flex items-center gap-4 justify-center sticky px-2 py-3  ">
      <Users />
      <Letters />
      <List />
    </main>
  );
}
