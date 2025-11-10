import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Please provide a concise summary of the following article: ${content}`,
  });

  console.log(response.text);
  return NextResponse.json({ message: response.text });
};
