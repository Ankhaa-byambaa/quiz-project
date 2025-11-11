import Image from "next/image";

import { Quicksand } from "next/font/google";
import { QuizCard } from "./_components/home/QuizCard";
import { Layout } from "./(protected)/Layout";

export default function Home() {
  const handleOnSend = async () => {
    const response = await fetch("/api/article", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data) {
      console.log("DATA IS HERE ", data.message);
    }
  };
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
