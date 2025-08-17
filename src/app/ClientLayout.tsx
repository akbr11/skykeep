"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import TanstackProvider from "@/shared/providers/TanstackProvider";
import { AuthProvider } from "@/shared/context/AuthContext";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <AuthProvider>
        <AntdRegistry>
          <main className="min-h-screen flex flex-col bg-gray-100">
            {children}
          </main>
        </AntdRegistry>
      </AuthProvider>
    </TanstackProvider>
  );
}
