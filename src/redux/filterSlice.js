import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

console.log(filterSlice);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;