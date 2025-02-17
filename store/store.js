import { configureStore } from '@reduxjs/toolkit';
import produitsReducer from './SliceProduits';

const store = configureStore({
    reducer: {
        produits: produitsReducer,
    },
});

export default store;
