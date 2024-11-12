"use client";

import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { UserCard } from "@/components/UI/user/UserCard";
import { UserLoading } from "@/components/UI/user/UserLoading";
import { UserNotFound } from "@/components/UI/user/UserNotFound";
import { UserIdParam } from "@/types/api/user";
import { fetchUserMachine } from "@/machines/fetchUserMachine";

const User = ({ id }: UserIdParam) => {
  const [current, send] = useMachine(fetchUserMachine);

  const { user } = current.context;

  useEffect(() => {
    send({ type: "FETCH", id });
  }, [send, id]);

  if (current.matches("idle") || current.matches("pending")) return <UserLoading />;

  if (current.matches("failed") || !user) return <UserNotFound id={id} />;

  return <UserCard user={user} />;
};

export default User;
