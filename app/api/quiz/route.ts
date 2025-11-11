import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  const { body } = await req.json();
  const { title1 } = body.title;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate 5 multiple choice questions based on this article: ${title1}. Return the response in this exact JSON format:
      [
        {
          "question": "Question text here",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": "0"
        }
      ]
      Make sure the response is valid JSON and the correctAnswer is the index (0-3) of the correct option.`,
  });

  console.log("RESPONSE TEXT", response);
  return NextResponse.json({ message: response });
};
