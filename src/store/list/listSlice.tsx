import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CuisinesList } from '../../components/cuisines/cuisinesConstants';

type ListState = {
  cuisine?: CuisinesList | null;
  searchParam?: string | null;
  offset: number;
  total?: number;
  random?: boolean;
};

const initialState: ListState = {
  cuisine: null,
  searchParam: '',
  offset: 0,
  total: 15,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<ListState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeList } = listSlice.actions;
export default listSlice.reducer;
