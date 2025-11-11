"use client";
import { Button } from "@/components/ui/button";

import { MouseEventHandler, useState } from "react";
import { SummarizeCard } from "./SummarizeCard";
type SummarizeProps = {
  handleOnSend: MouseEventHandler<HTMLButtonElement>;
  content: string;
  title: string;
};
//1. click--> aTCON true

export function Summarize({ handleOnSend, content, title }: SummarizeProps) {
  const [aTCON, setATCON] = useState(false);

  function OnSend() {
    return <></>;
  }

  if (aTCON === true) {
    // return <SummarizeCard title={`${title}`} content={`${content}`} />;
  }
  return (
    <>
      {/* <a href="/summarizeHIstory"> */}
      <Button
        type="submit"
        onClick={handleOnSend}
        disabled={aTCON}
        className="w-40 background/bg-primary text-primary-foreground"
      >
        Generate summary
      </Button>
      {/* </a> */}
    </>
  );
}
