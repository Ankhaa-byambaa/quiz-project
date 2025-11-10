"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Summarize() {
  const [aTCON, setATCON] = useState(false);
  const [contentArticle, setContentArticle] = useState<String>("");
  const [generatedContent, setGeneratedContent] = useState<String>("");
  const [articleContent, setArticleContent] = useState<String>("");
  const [articleTitle, setArticleTitle] = useState<String>("");
  if (articleTitle != "" || articleContent != "") {
    setATCON(true);
  }
  const OnSend = async () => {
    const sendArticle = await fetch("api/article/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: articleTitle }),
    });
    const sendContent = await fetch("api/gemini/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: articleContent }),
    });
  };

  const Gemini = async () => {};

  //   const addContent = fetch("api/article/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ chat: articleTitle }),
  //   });

  return (
    <Card className="w-150 mt-20 ">
      <CardHeader>
        <CardTitle className="flex text-black text-[26px] gap-2">
          <img className="w-8" src={"Article Generator Icon.png"} />
          Article Quiz Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 ">
            <>
              <div>
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={"book-open.png"} />
                  <p>Summarized content</p>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password  text-muted-foreground">
                    {contentArticle}
                  </Label>
                </div>
                <pre>{generatedContent}</pre>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password  text-muted-foreground">
                    <div className="flex gap-2 items-center">
                      <img className="w-4 h-4" src={"Shape.png"} />
                      <p>Article Contents</p>
                    </div>
                  </Label>
                </div>
                <pre>{articleContent}</pre>
              </div>
            </>
            <div className="w-full h-10 flex justify-end items-center">
              see more
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={OnSend}
          type="submit"
          disabled={aTCON}
          className="w-40 bg-black text-primary-foreground"
        >
          Take a quiz
        </Button>
      </CardFooter>
    </Card>
  );
}
