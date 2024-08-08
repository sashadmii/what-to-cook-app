import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '../api/api';
import { recipeSliceReducer } from './recipe/recipeSlice.js';
import { listSliceReducer } from './list/listSlice.js';

export const store = configureStore({
    reducer: {
        recipe: recipeSliceReducer,
        list: listSliceReducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipesApi.middleware),
});

export default store;
