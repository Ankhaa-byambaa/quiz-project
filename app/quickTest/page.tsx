import { Layout } from "../(protected)/Layout";
import { TakeQuiz } from "../_components/home/TakeQuiz";

function Page() {
  // 1. neon oos --> quiz awah
  return (
    <>
      <div>
        <Layout>
          <TakeQuiz />
        </Layout>
      </div>
    </>
  );
}
export default Page;
