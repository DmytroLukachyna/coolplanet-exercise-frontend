import { instanceAPI } from "@/api/config";
import { UsersResponse } from "@/types/api/user";

const getUsers = async (): Promise<UsersResponse> => {
  const { data } = await instanceAPI.get<UsersResponse>("/api/getUsers");
  return data;
};

export default getUsers;
