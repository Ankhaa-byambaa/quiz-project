import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <Empty>
      <div className="flex flex-col items-center justify-center py-4 px-4">
        <p className=" text-[#71717A] text-[14px]">No articles yet </p>
        <p className=" text-[#71717A] text-[14px] text-nowrap">
          Create your first article to get started
        </p>
      </div>
      <EmptyHeader>
        <EmptyMedia variant="icon"></EmptyMedia>
        <EmptyTitle className=" text-[#71717A] text-[14px]">
          No articles yet
        </EmptyTitle>
        <EmptyDescription className=" text-[#71717A] text-[14px] text-nowrap">
          Create your first article to get started
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent></EmptyContent>
    </Empty>
  );
}
