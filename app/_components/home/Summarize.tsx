"use client";
import { Button } from "@/components/ui/button";

import { MouseEventHandler, useState } from "react";
import { SummarizeCard } from "./SummarizeCard";
type SummarizeProps = {
  handleOnSend: MouseEventHandler<HTMLButtonElement>;
  content: string;
  title: string;
  button: any;
};

export function Summarize({
  handleOnSend,
  content,
  title,
  button,
}: SummarizeProps) {
  const [b, setB] = useState<boolean>(true);
  if (b === true) {
    <a href="/summarizeHIstory">
      <Button
        type="submit"
        onClick={handleOnSend}
        disabled={button}
        className="w-40 background/bg-primary text-primary-foreground"
      >
        Generate summary
      </Button>
    </a>;
  } else {
    return (
      <>
        <SummarizeCard title={`${title}`} content={`${content}`} />
      </>
    );
  }
}
