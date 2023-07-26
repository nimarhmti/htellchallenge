import { FormEvent } from "react";
export interface ItemModel {
  name: string;
  detail?: string;
  id: string;
  image?: string;
}

export interface userItemModel extends ItemModel {
  image: string;
}

export type letterListModel = [] | ItemModel[];
export type userListModel = [] | userItemModel[];
export type eventType = FormEvent<HTMLInputElement>;
