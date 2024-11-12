import api from "@/api";
import { API_KEY_USERS } from "@/api/apiKey";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { QueryHookParams } from "@/types/api/query";
import { UsersResponse } from "@/types/api/user";

const useUsers = ({ options }: QueryHookParams<UsersResponse> = {}): UseQueryResult<
  UsersResponse,
  Error
> => {
  return useQuery<UsersResponse, Error>({
    queryKey: [API_KEY_USERS],
    queryFn: () => api.getUsers(),
    staleTime: Infinity,
    ...options,
  });
};

export default useUsers;
