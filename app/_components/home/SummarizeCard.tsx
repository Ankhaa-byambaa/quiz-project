"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
type SummarizeCardProps = {
  content: string;
  title: string;
};
// 1. neon --> summary title content
//2. next button click--> quiz page
export function SummarizeCard({ content, title }: SummarizeCardProps) {
  function OnSend() {}
  const [aTCON, setATCON] = useState(false);
  const [title1, setTitle1] = useState("iuhig");

  const handleOnSend = async () => {
    // const response = await fetch("api/article/", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.json();
    // console.log("ADDED DATA", data);
    // if (data) {
    //   setTitle1(data.message);
    //   console.log(data.message);
    // }
  };

  useEffect(() => {
    handleOnSend();
  }, []);

  return (
    <>
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
                      {title}
                    </Label>
                  </div>
                  <p>{content}</p>
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
                  <p>{content}</p>
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
            onClick={handleOnSend}
            type="submit"
            disabled={aTCON}
            className="w-40 bg-black text-primary-foreground"
          >
            Take a quiz
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
