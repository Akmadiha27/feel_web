import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabase = getSupabaseServer();
    const { error } = await supabase.from("collaborations").insert({ name, email, message });
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


