import { isAxiosError } from "axios";
import { ApiError, AppError } from "@/types/errorTypes";

const extractApiErrorMessage = (e: ApiError): string => {
  let errorMessage = e?.response?.data?.message ?? "Unexpected server error";

  if (e?.response?.data?.errors) {
    errorMessage += `: ${Object.values(e.response.data.errors).join(", ")}`;
  }
  return errorMessage;
};

export const getAppError = (error: unknown): AppError => {
  let appError: AppError;
  if (isAxiosError(error)) {
    appError = {
      name: error.name,
      message: extractApiErrorMessage(error as ApiError),
      status: error.response?.status,
    };
  } else if (error instanceof Error) {
    appError = {
      name: error.name,
      message: error.message,
    };
  } else if (typeof error === "string") {
    appError = {
      name: "Error",
      message: error,
    };
  } else if (error instanceof EvalError) {
    appError = {
      name: error.name,
      message: error.message,
    };
  } else if (error instanceof RangeError) {
    appError = {
      name: error.name,
      message: error.message,
    };
  } else {
    appError = {
      name: "Error",
      message: "Unexpected error",
    };
  }

  return appError;
};
