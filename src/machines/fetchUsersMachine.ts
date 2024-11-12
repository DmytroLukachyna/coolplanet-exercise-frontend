import getUsers from "@/api/users/getUsers";
import { UserName } from "@/types/api/user";
import { assign, fromPromise, setup } from "xstate";

interface FetchUsersMachineParams {
  users: UserName[] | undefined;
}

export const fetchUsersMachine = setup({
  types: {
    context: {} as FetchUsersMachineParams,
  },
  actors: {
    fetchUsers: fromPromise(() => getUsers()),
  },
}).createMachine({
  id: "fetchMachine",
  initial: "idle",
  context: {
    users: undefined,
  },
  states: {
    idle: {
      on: {
        FETCH: "pending",
      },
    },
    pending: {
      invoke: {
        src: "fetchUsers",
        onDone: {
          target: "successful",
          actions: assign(({ event: { output } }) => ({
            users: output,
          })),
        },
        onError: {
          target: "failed",
          actions: assign(() => ({
            users: undefined,
          })),
        },
      },
    },
    failed: {
      on: {
        FETCH: "pending",
      },
    },
    successful: {
      on: {
        FETCH: "pending",
      },
    },
  },
});
