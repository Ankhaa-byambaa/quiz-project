import { Layout } from "../(protected)/Layout";
import { Summarize } from "../_components/home/Summarize";

export default function Page() {
  return (
    <>
      <div>
        <Layout>
          <div className=" mt-20 mx-20">
            <Summarize />
          </div>
        </Layout>
      </div>
    </>
  );
}
