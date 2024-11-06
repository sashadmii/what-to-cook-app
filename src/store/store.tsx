import { configureStore } from '@reduxjs/toolkit';

// import { recipesApi } from '../api/api';
import { recipesApi } from '../api/apiRewritten';
import listSliceReducer from './list/listSlice';
import recipeSliceReducer from './recipe/recipeSlice';

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
