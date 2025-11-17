// "use client";
import { QuizCard } from "./_components/home/QuizCard";
import { Layout } from "./(protected)/Layout";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function Home() {
  // const { user, isLoaded } = useUser();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isLoaded && !user) {
  //     router.push("./lonIn");
  //   }
  //   if (isLoaded && user) {
  //   }
  // }, [isLoaded, user]);
  // if (isLoaded) {
  //   return (
  //     <>
  //       <Skeleton />
  //     </>
  //   );
  // }
  return (
    <>
      <div>
        <Layout>
          <div className=" py-14">
            <QuizCard></QuizCard>
          </div>
        </Layout>
      </div>
    </>
  );
}
// const handleOnSend = async () => {
//   const response = await fetch("/api/article", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   if (data) {
//     console.log("DATA IS HERE ", data.message);
//   }
// };
