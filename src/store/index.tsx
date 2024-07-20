import { Book } from "models/Book";
import { create, useStore } from "zustand";

export interface FavoritesState {
  userFavorites: Book[];
  addFavorites: (bookItem: Book) => void;
  removeFavorites: (bookId: string) => void;
}

export const favoritesStore = create<FavoritesState>()((set) => ({
  userFavorites: [],
  addFavorites: (bookItem) =>
    set((state) => {
      const newFavorites = [...state.userFavorites];
      newFavorites.push(bookItem);
      return { userFavorites: newFavorites };
    }),
  removeFavorites: (bookId) =>
    set((state) => {
      const removedFavorites = [...state.userFavorites];
      return {
        userFavorites: removedFavorites.filter((item) => item.id !== bookId),
      };
    }),
}));

export function usefavoritesStore<T>(selector: (state: FavoritesState) => T) {
  return useStore(favoritesStore, selector!);
}
