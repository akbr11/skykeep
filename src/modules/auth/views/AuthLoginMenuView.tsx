"use client";
import { useRouter } from "next/navigation";
import { Typography, message } from "antd";
import AuthForm from "../component/AuthForm";
import type { AxiosError } from "axios";
import { useLogin } from "@/data/repositories/auth/use-login";
import { useAuth } from "@/shared/context/AuthContext";

const { Title } = Typography;

export default function AuthLoginMenuView() {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogin();
  const { login } = useAuth();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    const hide = message.loading("Logging In...", 0);
    try {
      const data = await mutateAsync(values);
      login(data);
      hide();
      message.success("Successfully Login!");
      router.push("/dashboard");
    } catch (err) {
      hide();
      const error = err as AxiosError<{ message: string }>;
      console.error("Login error:", error);
      const errorMsg =
        error.response?.data?.message || "Invalid username or password";
      message.error(errorMsg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <Title level={3} className="text-center mb-6">
          SkyKeep
        </Title>
        <AuthForm onSubmit={handleSubmit} loading={isPending} />
      </div>
    </div>
  );
}
