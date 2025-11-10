"use client";
import { Button } from "@/components/ui/button";
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

export function QuizCard() {
  const [response, setResponse] = useState("");
  const [title, setTitle] = useState<String>("");
  const [Content, setContent] = useState<String>("");

  const OnSend = async () => {
    const response = await fetch("api/article/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: Content }),
    });
    const data = await response.json();
    if (data) {
      setResponse(data.message);
      console.log(data.message);
    }
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
                value={`${Content}`}
                id="password"
                required
                placeholder="Paste your article content here..."
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          type="submit"
          onClick={OnSend}
          // disabled={aTCON}
          className="w-40 background/bg-primary text-primary-foreground"
        >
          Generate summary
        </Button>
      </CardFooter>
    </Card>
  );
}
