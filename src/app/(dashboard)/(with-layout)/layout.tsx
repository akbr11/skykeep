import { BaseDashboardLayout } from "@/shared/component/base-dashboard-layout/BaseDashboardLayout";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <BaseDashboardLayout>{children}</BaseDashboardLayout>;
};

export default DashboardLayout;
