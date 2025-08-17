"use client";

import {
  Card,
  Dropdown,
  Input,
  Space,
  Table,
  Button,
  Avatar,
  Image,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  FolderAddOutlined,
  FilterOutlined,
  SearchOutlined,
  MoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

export default function HomeView() {
  const files = [
    {
      key: "1",
      name: "Design_Campaign.photo.JPG",
      sharedBy: "Devon Lane",
      size: "3.0 GB",
      modified: "11 June 2020",
    },
    {
      key: "2",
      name: "Design_Illustrator.ZIP",
      sharedBy: "Ronald Richards",
      size: "4.2 GB",
      modified: "10 June 2020",
    },
    {
      key: "3",
      name: "Design_Canva.Video.MKV",
      sharedBy: "Courtney Henry",
      size: "2.2 GB",
      modified: "09 June 2020",
    },
    {
      key: "4",
      name: "Design_Figma.file.FIG",
      sharedBy: "Natasya Tailor",
      size: "4.3 GB",
      modified: "08 June 2020",
    },
    {
      key: "5",
      name: "Canva.Stock.photo.JPG",
      sharedBy: "Melina Sofia",
      size: "2.7 GB",
      modified: "07 June 2020",
    },
  ];

  const folderIcons: Record<string, string> = {
    DOCX: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
    JPG: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
    PDF: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
    PNG: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <span className="font-medium text-gray-800">{text}</span>
      ),
    },
    {
      title: "Shared By",
      dataIndex: "sharedBy",
      key: "sharedBy",
      render: (name: string) => (
        <Space>
          <Avatar size="small" icon={<UserOutlined />} />
          {name}
        </Space>
      ),
    },
    { title: "File Size", dataIndex: "size", key: "size" },
    { title: "Modified", dataIndex: "modified", key: "modified" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown
          menu={{
            items: [
              { key: "edit", label: "Edit" },
              { key: "download", label: "Download" },
              { key: "delete", label: "Delete", danger: true },
            ],
          }}
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            className="cursor-pointer"
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <Content className="flex-1 overflow-auto">
      {/* Welcome + header buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Welcome back, Martin Mickael
          </h2>
          <p className="text-gray-500">
            Welcome back! Let’s continue your activity on the dashboard.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button icon={<PlusOutlined />}>Create</Button>
          <Button icon={<UploadOutlined />}>Upload or drop</Button>
          <Button icon={<FolderAddOutlined />}>Create folder</Button>
        </div>
      </div>

      {/* Folder Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
        {[
          "UI UX Design",
          "Legal Docs",
          "Reports",
          "Presentations",
          "Documents",
          "Template",
          "Important",
          "Meetings",
          "Resources",
          "Client Files",
        ].map((label) => (
          <div
            key={label}
            className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
          >
            {label}

            <Dropdown
              trigger={["click"]}
              menu={{
                items: [
                  { key: "open", label: "Open" },
                  { key: "rename", label: "Rename" },
                  { key: "delete", label: "Delete", danger: true },
                ],
              }}
            >
              <Button
                type="text"
                size="small"
                icon={<MoreOutlined />}
                className="text-gray-500"
              />
            </Dropdown>
          </div>
        ))}
      </div>

      {/* Suggested folders */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Suggested from your activity</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Object.keys(folderIcons).map((type) => (
            <Card
              key={type}
              bordered={false}
              className="shadow-sm rounded-lg"
              bodyStyle={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={folderIcons[type]}
                alt={type}
                className="object-contain"
                width={100}
              />
              <span className="mt-3 font-semibold text-center">{type}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* File table */}
      <Card bordered={false} className="shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <Space>
            <Button>Recent</Button>
            <Button>Starred</Button>
          </Space>
          <Space>
            <Button icon={<FilterOutlined />}>Filter</Button>
            <Input
              placeholder="Search file..."
              prefix={<SearchOutlined />}
              className="w-full sm:w-56"
            />
          </Space>
        </div>
        <Table
          rowSelection={{}}
          dataSource={files}
          columns={columns}
          pagination={false}
          scroll={{ x: "max-content" }} // biar bisa scroll horizontal di mobile
        />
      </Card>
    </Content>
  );
}
