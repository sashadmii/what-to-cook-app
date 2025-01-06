import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RecipeCard } from '../../api/apiTypes';
import { CuisinesList } from '../../components/cuisines/cuisinesConstants';

export type ListState = {
  recipes: RecipeCard[];
  cuisine?: CuisinesList | null;
  searchParam?: string | null;
  offset: number;
  total?: number;
  random: boolean;
};

const initialState: ListState = {
  recipes: [],
  cuisine: null,
  searchParam: '',
  offset: 0,
  total: 15,
  random: true,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<ListState>) => {
      return {
        ...state,
        ...action.payload,
        recipes: [],
      };
    },
    setRecipes: (state, action) => {
      return {
        ...state,
        ...action.payload,
        recipes: [...state.recipes, ...action.payload.recipes],
      };
    },
    loadMoreRecipes: (state, action) => {
      return {
        ...state,
        ...action.payload,
        recipes: [...state.recipes, ...action.payload.recipes],
      };
    },
  },
});

export const { changeList, setRecipes, loadMoreRecipes } = listSlice.actions;
export default listSlice.reducer;
