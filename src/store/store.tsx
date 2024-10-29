import { configureStore } from '@reduxjs/toolkit';

import { recipesApi } from '../api/api.tsx';
import listSliceReducer from './list/listSlice.tsx';
import recipeSliceReducer from './recipe/recipeSlice.tsx';

const store = configureStore({
  reducer: {
    recipe: recipeSliceReducer,
    list: listSliceReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
