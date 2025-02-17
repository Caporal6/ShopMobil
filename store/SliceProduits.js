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
    },
});

export const { ajouterProduit } = produitsSlice.actions;
export default produitsSlice.reducer;
