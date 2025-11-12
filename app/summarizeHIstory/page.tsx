import { Layout } from "../(protected)/Layout";
import { QuizCard } from "../_components/home/QuizCard";

export default function Page() {
  return (
    <>
      <div>
        <Layout>
          <div className=" mt-20 mx-20">
            <QuizCard />
          </div>
        </Layout>
      </div>
    </>
  );
}
