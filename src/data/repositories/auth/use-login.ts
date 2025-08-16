import { useMutation } from "@tanstack/react-query";
import { baseApi } from "@/lib/axios";
import { RestEndpoint } from "@/data/consts/rest-endpoint";
import { LoginRequest } from "@/data/models/auth/login-request";
import { LoginResponse } from "@/data/models/auth/login-response";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body: LoginRequest) => {
      const res = await baseApi.post<LoginResponse>(
        RestEndpoint.PostAuthLogin,
        body
      );
      return res.data;
    },
  });
};
