import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const api_url = import.meta.env.VITE_API_URL || "https://localhost:8000/";

const baseQuery = fetchBaseQuery({
  baseUrl: api_url,
  prepareHeaders: (headers) => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      const { access_token } = JSON.parse(credentials);
      if (access_token) {
        headers.set("authorization", `Bearer ${access_token}`);
      }
    }
    return headers;
  },
});

const baseQuerywithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // handle general 401 errors here
    return {
      error: { status: result.error.status, data: result.error.data },
    };
  }

  if (result.error) {
    // handle all other errors here
    return {
      error: result.error,
    };
  }

  //return the response
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQuerywithAuth,
  endpoints: () => ({}),
});
