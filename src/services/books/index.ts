import axiosInstance from "..";
import { BooksResponse } from "./types";

class BooksApis {
  async getBooksList(search?: string) {
    const response = await axiosInstance.get("volumes", {
      params: {
        q: "react-native",
        startIndex: 0,
      },
    });
    return response.data as BooksResponse;
  }
}

export default new BooksApis();
