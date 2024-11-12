"use client";

import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { UsersLoading } from "@/components/UI/users/UsersLoading";
import { UsersNotFound } from "@/components/UI/users/UsersNotFound";
import { UsersTable } from "@/components/UI/users/UsersTable";
import { fetchUsersMachine } from "@/machines/fetchUsersMachine";

const Users = () => {
  const [current, send] = useMachine(fetchUsersMachine);

  const { users } = current.context;

  useEffect(() => {
    send({ type: "FETCH" });
  }, [send]);

  if (current.matches("idle") || current.matches("pending")) return <UsersLoading />;

  if (current.matches("failed") || !users || !users.length) return <UsersNotFound />;

  return <UsersTable data={users} />;
};

export default Users;
