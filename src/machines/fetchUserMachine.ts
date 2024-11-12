import getUserByID from "@/api/users/getUserByID";
import { UserData, UserIdParam } from "@/types/api/user";
import { assign, fromPromise, setup } from "xstate";

interface FetchUserMachineParams {
  user: UserData | undefined;
}

export const fetchUserMachine = setup({
  types: {
    context: {} as FetchUserMachineParams,
  },
  actors: {
    fetchUser: fromPromise(({ input: { id } }: { input: UserIdParam }) => getUserByID({ id })),
  },
}).createMachine({
  id: "fetchMachine",
  initial: "idle",
  context: {
    user: undefined,
  },
  states: {
    idle: {
      on: {
        FETCH: "pending",
      },
    },
    pending: {
      invoke: {
        src: "fetchUser",
        input: ({ event: { id } }) => ({ id }),
        onDone: {
          target: "successful",
          actions: assign(({ event: { output } }) => ({
            user: output,
          })),
        },
        onError: {
          target: "failed",
          actions: assign(() => ({
            user: undefined,
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
