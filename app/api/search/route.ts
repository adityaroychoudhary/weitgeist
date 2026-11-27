import { NextRequest, NextResponse } from "next/server";
import { searchTitles } from "@/lib/wikipedia";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (q.length < 2) return NextResponse.json([]);

  try {
    const results = await searchTitles(q);
    return NextResponse.json(results);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
