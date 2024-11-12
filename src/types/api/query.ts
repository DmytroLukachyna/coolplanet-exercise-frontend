import { UseQueryOptions } from "@tanstack/react-query";

export interface QueryHookParams<TData = unknown, TQuery = unknown, TError = Error> {
  query?: TQuery;
  options?: UseQueryOptions<TData, TError>;
}
