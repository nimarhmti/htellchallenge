import {
  ItemModel,
  userItemModel,
  userListModel,
} from "@/interface/list.interface";

export const searchByName = (list: ItemModel[], query: string) => {
  return list?.filter((item: ItemModel) => {
    return query.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(query);
  });
};
