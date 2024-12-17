import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RecipeCard } from '../../api/apiTypes';

const initialState: RecipeCard = {
  ingredient: '',
  id: 0,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    fetchRecipe: (state, action: PayloadAction<RecipeCard>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { fetchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
