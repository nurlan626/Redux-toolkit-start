import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch/fetchData", async function () {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  return data;
});

export const counter = createSlice({
  name: "fetch",
  initialState: { posts: [], status: null, error: null },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
        state.status = "loading";
        state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
        state.status = "resolved"
        state.posts = action.payload;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
