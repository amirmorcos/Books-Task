import { Book } from "models/Book";

export type BooksResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
};
