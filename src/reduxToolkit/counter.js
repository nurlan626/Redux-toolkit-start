import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 10;

export const counter = createSlice({
  name: "counter",
  initialState: { value: initialStateValue },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
