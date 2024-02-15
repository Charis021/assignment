import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const res = await fetch('https://picsum.photos/v2/list?limit=10');
  const data = await res.json();
  return data;
});
