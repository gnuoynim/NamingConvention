import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state = action.payload;
    },
  },
});
export const { increment, decrement, setCount } = countReducer.actions;
export default countReducer.reducer;
