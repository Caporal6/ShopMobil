import { createSlice } from "@reduxjs/toolkit";

const produitsSlice = createSlice({
    name: 'sliceProduits',
    initialState: {
        panier: [],
    },
    reducers: {
        ajouterProduit: (state, action) => {
            state.panier.push(action.payload);
        },
        supprimerProduit: (state, action) => {
            state.panier.splice(action.payload, 1);
        },
        viderPanier: (state) => {
            state.panier = [];
        },
    },
});

export const { ajouterProduit, supprimerProduit, viderPanier } = produitsSlice.actions; // Export actions
export default produitsSlice.reducer;
