import { instanceAPI } from "@/api/config";
import { UserByIDRequest, UserByIDResponse } from "@/types/api/user";

const getUserByID = async ({ id }: UserByIDRequest): Promise<UserByIDResponse> => {
  const { data } = await instanceAPI.get<UserByIDResponse>(`/api/getUser/${id}`);
  return data;
};

export default getUserByID;
