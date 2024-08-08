import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        ingredient: '',
        id: '',
    },
    reducers: {
        fetchRecipe: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { fetchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
