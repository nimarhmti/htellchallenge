export interface ItemModel {
  name: string;
  detail?: string;
  id: string;
}

export interface userItemModel extends ItemModel {
  image: string;
}
