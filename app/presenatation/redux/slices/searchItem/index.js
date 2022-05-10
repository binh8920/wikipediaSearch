import {createSlice} from '@reduxjs/toolkit';

const searchItemSlice = createSlice({
  name: 'searchItem',
  initialState: {
    item: [],
  },
  reducers: {},
});

export default searchItemSlice.reducer;
