import {createSlice} from '@reduxjs/toolkit';
import {fetchData} from '../getData';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.photos.push(action.payload);
    });
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default dataSlice.reducer;
