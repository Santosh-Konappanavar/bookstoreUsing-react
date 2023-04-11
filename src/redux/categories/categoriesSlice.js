import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state, action) => ({ ...state, categories: action.payload === 'Under construction' ? 'Under construction' : state.categories }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
