import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch/fetchData", async function (_, {rejectWithValue}) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Server error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
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
      state.status = "resolved";
      state.posts = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
