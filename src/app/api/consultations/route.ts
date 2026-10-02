import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { ConsultationSchema } from "@/lib/validation/schemas";

// Simple in-memory rate limit (per-process; use Redis in production)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  if (recent.length >= RATE_LIMIT) return false;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = ConsultationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { fullName, phone, email, matterType, briefDescription, preferredContactMethod } = parsed.data;

    await prisma.consultationRequest.create({
      data: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email ? email.trim() : null,
        matterType: matterType as any,
        briefDescription: briefDescription.trim(),
        preferredContactMethod: preferredContactMethod || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your consultation request has been received. The office will contact you shortly.",
    });
  } catch (error) {
    console.error("Consultation request error:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}