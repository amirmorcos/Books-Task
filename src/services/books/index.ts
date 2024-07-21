import axiosInstance from "..";
import { BooksResponse } from "./types";

class BooksApis {
  async getBooksList(search = "react-native") {
    const response = await axiosInstance.get("volumes", {
      params: {
        q: search,
        startIndex: 0,
      },
    });
    return response.data as BooksResponse;
  }
}

export default new BooksApis();
