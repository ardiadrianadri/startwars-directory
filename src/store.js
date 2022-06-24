import { configureStore } from '@reduxjs/toolkit';

import searchReducer  from './search-module/search-slice';
import detailReducer from './detail-module/detail-slice';

export default configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer
  }
});