import { query } from "@/lib/connectDB";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { body } = await request.json();
  const { title, content, summary } = body;
  const users = await prisma.article.createManyAndReturn({
    data: [{ title: { title }, content: { content }, summary: { summary } }],
  });

  // const article = await query(
  //   `INSERT INTO articles(title, content, summary) VALUES($1, $2, $3)`,
  //   [title, content, summary]
  // );

  return NextResponse.json({ message: "successfully", data: users });
};
// users();
