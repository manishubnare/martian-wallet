import { QueryClient, useIsFetching, useQuery } from "react-query";
import { isArray } from 'lodash'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});


export const refetchQuery = (queryKey) => queryClient.refetchQueries(isArray(queryKey) ? queryKey : [queryKey]);

export const updateData = (key, newData) => {
  queryClient.setQueryData(key, (oldData) => ({ ...oldData, ...newData }));
};

export const getQueryData = (key, defaultValue = null) => {
  const response = queryClient.getQueryData(key);
  if (!response) return defaultValue;
  return response;
};