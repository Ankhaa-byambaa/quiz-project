import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserButton } from "@clerk/nextjs";
export function Header() {
  return (
    <>
      <div className="w-screen h-14 bg-white border border-[#E4E4E7] flex items-center justify-between px-5  fixed z-50 p-4">
        <div className=" text-6 text-black font-semibold">Quiz app</div>
        <UserButton />
      </div>
    </>
  );
}
