import { Query, QueryKey } from "@tanstack/react-query";
import { getAppError } from "@/utils/handleErrors";

export const errorHandlerQuery = (
  error: Error,
  query: Query<unknown, unknown, unknown, QueryKey>,
) => {
  const { message, status } = getAppError(error);

  if (status !== 401) {
    console.warn(query);
    console.warn(message);
  }
};
