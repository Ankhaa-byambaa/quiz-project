import { query } from "@/lib/connectDB";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
  const article = await prisma.article.findMany();
  return Response.json({ message: "success", data: article });
};

export const POST = async (request: NextRequest) => {
  const { body } = await request.json();
  const { title } = body;
  console.log("TITLE ", title);
  // const article = await prisma.user.findMany({
  //   where: {
  //     article: { title },
  //   },
  // });

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     email: "bert@prisma.io",
  //   },
  // });

  //Select a subset of fields
  const user = await prisma.user.findUnique({
    where: {
      email: "emma@prisma.io",
    },
    select: {
      email: true,
      name: true,
    },
  });

  const article = await prisma.articles.findMany();
  console.log("FROM BACKENDE TESTING", article);
  return NextResponse.json({ message: "successfully", data: article });
};
