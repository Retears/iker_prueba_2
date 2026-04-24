import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLista = create(persist(
    set => ({
        favoritos: [],
        anadirfavoritos: (idproducto) => set(state => ({
            favoritos: [...state.favoritos, idproducto]
        }))
    })
))