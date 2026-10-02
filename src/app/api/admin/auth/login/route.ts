import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { compare } from "bcryptjs";
import { SignJWT } from "jose";
import { AdminLoginSchema } from "@/lib/validation/schemas";

const SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret-change-me");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = AdminLoginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const { email, password } = parsed.data;

    const user = await prisma.adminUser.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const valid = await compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = await new SignJWT({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(SECRET);

    const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    res.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}