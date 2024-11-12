"use client";

import { UsersLoading } from "@/components/UI/users/UsersLoading";
import { UsersNotFound } from "@/components/UI/users/UsersNotFound";
import { UsersTable } from "@/components/UI/users/UsersTable";
import useUsers from "@/hooks/api/user/useUsers";

const Users = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <UsersLoading />;

  if (isError || !users?.length) return <UsersNotFound />;

  return <UsersTable data={users} />;
};

export default Users;
