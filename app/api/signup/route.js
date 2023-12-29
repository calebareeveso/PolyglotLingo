import connectMongoDB from "@/lib/db/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req) {
  try {
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { name, username, email, password } = await request.json();

  if (
    name !== null &&
    username !== null &&
    email !== null &&
    password !== null
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({
      name: name,
      email: email,
      username: username,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered.",
      },
      { status: 201 }
    );
  }
}
