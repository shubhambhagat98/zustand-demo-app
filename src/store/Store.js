import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      filter: "",
      pokemon: [],

      setFilter: (filter) =>
        set((state) => ({
          ...state,
          filter,
        })),

      setPokemon: (pokemon) =>
        set((state) => ({
          ...state,
          pokemon,
        })),
    }),
    // partialize will only store filter value in persistent storage and not the pokemon list
    {
      name: "pokemon-storage",
      partialize: (state) => ({ filter: state.filter }),
    }
  )
);
