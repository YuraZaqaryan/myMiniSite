import React, { ChangeEvent } from "react";

export interface INavbar {
  id?: number;
  title: string;
}
export interface ISearch {
  content: string;
}
export type ISearchText = {
  searchContent: ISearch;
  setSearchContent?: React.Dispatch<React.SetStateAction<ISearch>>;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isOpen?: boolean;
};

export type IHeaderSearchContent = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
