import Image from "next/image";
import { Layout } from "./_components/Layout";
import { MainLayout } from "./protected()/MainLayout";
import { Quicksand } from "next/font/google";
import { QuizCard } from "./_components/home/QuizCard";

export default function Home() {
  return (
    <>
      <div>
        <MainLayout>
          <Layout>
            <div className=" py-14">
              <QuizCard></QuizCard>
            </div>
          </Layout>
        </MainLayout>
      </div>
    </>
  );
}
