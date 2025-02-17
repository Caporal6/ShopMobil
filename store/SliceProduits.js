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
    },
});

export const { ajouterProduit, supprimerProduit } = produitsSlice.actions; // Export actions
export default produitsSlice.reducer;
