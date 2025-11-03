import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function Header() {
  return (
    <>
      <div className="w-screen h-14 bg-white border border-[#E4E4E7] flex items-center justify-between px-5  fixed z-50">
        <div className=" text-6 text-black font-semibold">Quiz app</div>
        <Avatar>
          <AvatarImage className="w-10" src="avatarPic.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
