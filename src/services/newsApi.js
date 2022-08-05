import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// base URL
const baseUrl = process.env.REACT_APP_NEWS_BASEURL;
// API Headers
const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_NEWS_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_HOST,
};
// helper function make requeset
const makeRequest = (url) => ({ url, headers: newsApiHeaders });

// create API
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (count) =>
        makeRequest(
          `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
// Export the auto-generated hook
export const { useGetNewsQuery } = newsApi;
