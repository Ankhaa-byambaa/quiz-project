import { Layout } from "../(protected)/Layout";
import { TakeQuiz } from "../_components/home/TakeQuiz";

function Page() {
  // question answer iig ni fetcher awaad takequiz ruu  ywuulna
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
