import { QuizCard } from "./_components/home/QuizCard";
import { Layout } from "./(protected)/Layout";

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
