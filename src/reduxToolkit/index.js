import userReducer from './user'
import themeReducer from './theme'
import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

const store = configureStore({
    reducer: {
      user: userReducer,
      theme: themeReducer,
      counter: counter
    },
  });

  export default store