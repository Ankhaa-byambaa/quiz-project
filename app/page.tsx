import Image from "next/image";

import { Quicksand } from "next/font/google";
import { QuizCard } from "./_components/home/QuizCard";
import { Layout } from "./(protected)/Layout";
import { Summarize } from "./_components/home/Summarize";

export default function Home() {
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
