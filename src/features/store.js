import { configureStore } from "@reduxjs/toolkit";
import { curenciesApi } from "services/currenciesApi";
import { newsApi } from "services/newsApi";
export default configureStore({
  reducer: {
    [curenciesApi.reducerPath]: curenciesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
