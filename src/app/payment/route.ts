import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ success: false }, { status: 400 });
}
