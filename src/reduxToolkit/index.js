import userReducer from './user'
import themeReducer from './theme'
import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import asyncData from './asyncData';

const store = configureStore({
    reducer: {
      user: userReducer,
      theme: themeReducer,
      counter: counter,
      asyncData: asyncData
    },
  });

  export default store