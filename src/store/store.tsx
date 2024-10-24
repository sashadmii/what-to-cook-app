import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '../api/api';
import recipeSliceReducer from './recipe/recipeSlice';
import listSliceReducer from './list/listSlice';

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
