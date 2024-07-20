import { Book } from "models/Book";
import axiosInstance from "..";

class BooksApis {
  async getBooksList(search?: string) {
    const response = await axiosInstance.get("volumes", {
      params: {
        q: "react-native",
        startIndex: 0,
      },
    });
    return response.data as {
      kind: "books#volumes";
      totalItems: number;
      items: Book[];
    };
  }
}

export default new BooksApis();
