import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";
type GenerateSummaryProps = {
  articleContenthandleOnChange: any;
};
export function GenerateSummary({
  articleContenthandleOnChange,
}: GenerateSummaryProps) {
  return (
    <>
      <a href="app/quickTest/">
        <Button
          onClick={articleContenthandleOnChange}
          type="submit"
          // disabled={aTCON}
          className="w-40 background/bg-primary text-primary-foreground"
        >
          Generate summary
        </Button>
      </a>
    </>
  );
}
