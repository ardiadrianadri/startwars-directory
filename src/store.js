import { configureStore } from '@reduxjs/toolkit';

import searchReducer  from './search-module/search-slice';

export default configureStore({
  reducer: {
    search: searchReducer
  }
});