import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    cuisine: '',
    searchParam: '',
    offset: 0,
    total: 15,
  },
  reducers: {
    changeList: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeList } = listSlice.actions;
export default listSlice.reducer;
