import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    ingredient: '',
    id: '',
  },
  reducers: {
    fetchRecipe: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { fetchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
