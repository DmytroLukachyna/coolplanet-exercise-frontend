import api from "@/api";
import { API_KEY_USER } from "@/api/apiKey";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { QueryHookParams } from "@/types/api/query";
import { UserByIDRequest, UserByIDResponse } from "@/types/api/user";

interface UseUserByIDParams extends QueryHookParams<UserByIDResponse>, UserByIDRequest {}

const useUserByID = ({
  id,
  options,
}: UseUserByIDParams): UseQueryResult<UserByIDResponse, Error> => {
  return useQuery<UserByIDResponse, Error>({
    queryKey: [API_KEY_USER, id],
    queryFn: () => api.getUserByID({ id }),
    enabled: !!id,
    staleTime: Infinity,
    ...options,
  });
};

export default useUserByID;
