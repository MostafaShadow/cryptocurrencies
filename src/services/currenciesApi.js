import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// base URL
const baseUrl = "https://coinranking1.p.rapidapi.com";
// API Headers
const curenciesApiHeaders = {
  "X-RapidAPI-Key": "10d7384dbdmshd93fc51cc09fcf8p18b495jsnbad1780ce76d",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
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
