/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    byName: '',
    byStatus: 'All',
  },
  reducers: {
    filterByName: (state, action) => {
      state.byName = action.payload;
    },
    filterByStatus: (state, action) => {
      state.byStatus = action.payload;
    },
  },
});

export const { filterByName, filterByStatus } = filterSlice.actions;

export default filterSlice.reducer;
