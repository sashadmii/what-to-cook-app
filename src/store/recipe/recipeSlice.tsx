import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '../../api/apiTypes';

const initialState: Recipe = {
  ingredient: '',
  id: 0,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    fetchRecipe: (state, action: PayloadAction<Recipe>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { fetchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
