import { query } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { email, name } = body;
  const article = await query(
    ` INSERT INTO article (email , name ) VALUES (${email},${name})   `
  );
  return NextResponse.json({ message: "successfully", data: article });
  // const article = await query("")
};
