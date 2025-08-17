"use client";

import { Layout, Menu, Avatar, Dropdown, Input, Drawer } from "antd";
import {
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
  FileOutlined,
  StarOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  SettingOutlined,
  PictureOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/shared/context/AuthContext";

const { Header, Sider, Content } = Layout;

export const BaseDashboardLayout = ({ children }: { children: ReactNode }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link href="/dashboard/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        danger
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    {
      key: "all-files",
      label: "All Files",
      icon: <FileOutlined />,
      href: "/dashboard/all-files",
    },
    {
      key: "photo",
      label: "Photo",
      icon: <PictureOutlined />,
      href: "/dashboard/photo",
    },
    {
      key: "favorite",
      label: "Favorite",
      icon: <StarOutlined />,
      href: "/dashboard/favorite",
    },
    {
      key: "shared",
      label: "Shared Files",
      icon: <ShareAltOutlined />,
      href: "/dashboard/shared",
    },
    {
      key: "delete",
      label: "Delete Files",
      icon: <DeleteOutlined />,
      href: "/dashboard/delete",
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
      href: "/dashboard/settings",
    },
  ];

  const activeKey =
    menuItems.find((item) => pathname.startsWith(item.href))?.key ||
    "all-files";

  return (
    <Layout className="min-h-screen">
      {/* Sidebar untuk desktop */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="hidden lg:block"
        style={{
          background: "#f1f1f1",
          borderRight: "1px solid #e8e8e8",
        }}
      >
        <div className="h-16 flex items-center justify-center font-bold text-lg text-gray-800">
          🚀 SkyKeep
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[activeKey]}
          style={{ background: "#f1f1f1", color: "#000000" }}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <Link href={item.href}>{item.label}</Link>,
          }))}
        />
      </Sider>

      {/* Drawer untuk mobile */}
      <Drawer
        title="🚀 SkyKeep"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <Link href={item.href}>{item.label}</Link>,
          }))}
        />
      </Drawer>

      {/* Main Layout */}
      <Layout className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Header
          style={{
            background: "#ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            padding: "0 20px",
          }}
          className="flex justify-between items-center gap-5"
        >
          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Tombol menu mobile */}
            <div className="block lg:hidden">
              <MenuOutlined
                className="text-xl cursor-pointer"
                onClick={() => setDrawerOpen(true)}
              />
            </div>

            {/* Search */}
            <Input
              placeholder="Search files..."
              prefix={<SearchOutlined className="text-gray-400" />}
              size="large"
              className="rounded-lg w-full sm:w-64 md:w-80 lg:w-96"
            />
          </div>

          <div className="flex items-center flex-shrink-0">
            <BellOutlined className="text-lg mr-6 cursor-pointer text-gray-800" />
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Avatar
                size="default"
                icon={<UserOutlined />}
                className="cursor-pointer"
              />
            </Dropdown>
          </div>
        </Header>

        {/* Content */}
        <Content
          style={{ background: "#ffffff" }}
          className="flex-1 p-6 overflow-auto"
        >
          {children}
        </Content>
      </Layout>

      {/* Custom style override untuk warna active */}
      <style jsx global>{`
        .ant-menu-light .ant-menu-item-selected {
          background-color: #374151 !important;
          color: #ffffff !important;
          font-weight: 600;
        }
        .ant-menu-light .ant-menu-item-selected a {
          color: #ffffff !important;
        }
        .ant-menu-light .ant-menu-item-selected .anticon {
          color: #ffffff !important;
        }
      `}</style>
    </Layout>
  );
};
