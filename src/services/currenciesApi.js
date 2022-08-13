import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// base URL
const baseUrl = process.env.REACT_APP_CURENCIES_BASEURL;
// API Headers
const curenciesApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_CURENCIES_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CURENCIES_HOST,
};
// helper function make requeset
const makeRequest = (url) => ({ url, headers: curenciesApiHeaders });
// create API
export const curenciesApi = createApi({
  reducerPath: "curenciesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: (count) => makeRequest(`/coins?limit=${count}`),
    }),
    getCoin: builder.query({
      query: (coinId) => makeRequest(`/coin/${coinId}`),
    }),
    getCoinHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        makeRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});
// Export the auto-generated hook
export const {
  useGetCurrenciesQuery,
  useGetCoinQuery,
  useGetCoinHistoryQuery,
} = curenciesApi;
