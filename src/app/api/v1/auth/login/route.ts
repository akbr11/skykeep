import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;

  // Dummy check
  if (username === "admin" && password === "123456") {
    return NextResponse.json({
      success: true,
      message: "Successfully Login",
      data: {
        token: "fake-jwt-token-12345",
        user: {
          id: "1",
          username: "admin",
          email: "admin@example.com",
        },
      },
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid username or password",
    },
    { status: 401 }
  );
}
