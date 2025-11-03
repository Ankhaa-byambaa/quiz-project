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

export function QuizCard() {
  const [arrticleTitle, steArrticleTitle] = useState(false);
  const [date, setDate] = useState("");
  return (
    <Card className="w-150 ">
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
                className=""
                id="email"
                type="text"
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
          disabled={arrticleTitle || !date}
          className="w-40 background/bg-primary text-primary-foreground"
        >
          Generate summary
        </Button>
      </CardFooter>
    </Card>
  );
}
