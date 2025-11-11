"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Summarize } from "./Summarize";
//1. neon --> title content summary quiz
//2. gemini --> summary quiz

export function QuizCard() {
  const [response, setResponse] = useState("");
  const [title, setTitle] = useState<String>("");
  const [content, setContent] = useState<String>("");

  const handleOnSend = async () => {
    const res = await fetch("api/gemini/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });
    const data1 = await res.text();
    console.log("DATA", data1);
    if (data1) {
      setResponse(data1);
      console.log("DATA!", data1);
    }
    const res1 = await fetch("api/quiz/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });
    const data2 = await res1.text();
    console.log("DATA", data2);
    if (data1) {
      setResponse(data1);
      console.log("DATA!", data1);
    }

    // const response = await fetch("api/article/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ body: content }),
    // });
    // const data = await response.json();
    // console.log("ADDED DATA", data);
    // if (data) {
    //   setResponse(data.message);
    //   console.log(data.message);
    // }
  };
  return (
    <Card className="w-150 mt-20 ">
      <CardHeader>
        <CardTitle className="flex text-black text-[26px] gap-2">
          <img className="w-8" src={"Article Generator Icon.png"} />
          Article Quiz Generator
        </CardTitle>
        <CardDescription className=" text-muted-foreground">
          Paste your article below to generate a summarize and quiz question.
          Your articles will saved in the sidebar for future reference.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 ">
            <div className="grid gap-2">
              <Label htmlFor="email  text-muted-foreground">
                <img className="w-4" src={"Shape.png"} />
                Article Title
              </Label>
              <Input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={`${title}`}
                id="email"
                placeholder="Enter a title for your article..."
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password  text-muted-foreground">
                  <img className="w-4" src={"Shape.png"} />
                  Article Content
                </Label>
              </div>
              <Textarea
                onChange={(e) => setContent(e.target.value)}
                value={`${content}`}
                id="password"
                required
                placeholder="Paste your article content here..."
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Summarize
          handleOnSend={handleOnSend}
          title={`${title}`}
          content={`${content}`}
        />
      </CardFooter>
    </Card>
  );
}
