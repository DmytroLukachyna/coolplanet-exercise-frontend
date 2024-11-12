"use client";

import { UserCard } from "@/components/UI/user/UserCard";
import { UserLoading } from "@/components/UI/user/UserLoading";
import { UserNotFound } from "@/components/UI/user/UserNotFound";
import useUserByID from "@/hooks/api/user/useUserByID";
import { UserIdParam } from "@/types/api/user";

const User = ({ id }: UserIdParam) => {
  const { data: user, isLoading, isError } = useUserByID({ id });

  if (isLoading) return <UserLoading />;

  if (isError || !user) return <UserNotFound id={id} />;

  return <UserCard user={user} />;
};

export default User;
