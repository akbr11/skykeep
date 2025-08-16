"use client";
import { Button, Form, Input } from "antd";

interface Props {
  onSubmit: (values: { username: string; password: string }) => void;
  loading?: boolean;
}

export default function AuthForm({ onSubmit, loading }: Props) {
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input placeholder="johndoe" />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="••••" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
