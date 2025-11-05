import { query } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { title, content, summary } = body;
  const article = await query(
    ` INSERT INTO article (title , content , summary) VALUES (${title},${content},${summary})   `
  );
  return NextResponse.json({ message: "successfully", data: article });
  // const article = await query("")
};
