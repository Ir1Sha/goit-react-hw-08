import { createSlice } from '@reduxjs/toolkit';
import { deleteContact } from '../contacts/operations';

const initialState = {
  name: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    resetFilter: (state) => {
      state.name = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.name = '';
    });
  }
});

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter, resetFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
