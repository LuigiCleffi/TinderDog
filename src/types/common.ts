
export type ApiResponse<T = any> = {
  message: string;
  payload: T | T[];
  status: number;
  error: boolean;
  errors?: string[];
};
