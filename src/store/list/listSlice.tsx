import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  cuisine: string;
  searchParam: string;
  offset: number;
  total: number;
}

const initialState: ListState = {
  cuisine: '',
  searchParam: '',
  offset: 0,
  total: 15,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeList } = listSlice.actions;
export default listSlice.reducer;
