import { query } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { question, answer, option, articleId } = body;
  const quiz = await query(
    ` INSERT INTO article (question, answer , option ,articleId) VALUES (${question},${answer},${option},${articleId})`
  );
  return NextResponse.json({ message: "successfully added quiz", data: quiz });
};
