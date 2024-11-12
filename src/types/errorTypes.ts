import { AxiosError } from "axios";

export interface AppError extends Error {
  status?: number;
}

export interface ApiErrorPayload<T = Record<string, string>> {
  message: string;
  errors?: T;
}

export type ApiError<T = Record<string, string>> = AxiosError<ApiErrorPayload<T>>;
