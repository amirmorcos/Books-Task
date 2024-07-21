import { Book } from "models/Book";
import { create, useStore } from "zustand";

export interface FavoritesState {
  userFavorites: Book[];
  addFavorites: (bookItem: Book) => void;
  removeFavorites: (bookId: string) => void;
}

export const favoritesStore = create<FavoritesState>()((set) => ({
  userFavorites: [],
  // Add book item to user favorites
  addFavorites: (bookItem) =>
    set((state) => {
      const newFavorites = [...state.userFavorites];
      newFavorites.push(bookItem);
      return { userFavorites: newFavorites };
    }),
  // remove book item from user favorites using book unique id
  removeFavorites: (bookId) =>
    set((state) => {
      const removedFavorites = [...state.userFavorites];
      return {
        userFavorites: removedFavorites.filter((item) => item.id !== bookId),
      };
    }),
}));

// return custom hook for proper global state types
export function usefavoritesStore<T>(selector: (state: FavoritesState) => T) {
  return useStore(favoritesStore, selector!);
}
