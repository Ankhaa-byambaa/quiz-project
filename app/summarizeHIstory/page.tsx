import { useEffect, useState } from "react";
import { Layout } from "../(protected)/Layout";
import { Summarize } from "../_components/home/Summarize";
import { SummarizeCard } from "../_components/home/SummarizeCard";

export default function Page() {
  return (
    <>
      <div>
        <Layout>
          <div className=" mt-20 mx-20">
            <SummarizeCard
              // title1="sql"
              content="SQL was initially developed at IBM by Donald D. Chamberlin and Raymond F. Boyce after learning about the relational model from Edgar F. Codd[12] in the early 1970s.[13] This version, initially called SEQUEL (Structured English Query Language), was designed to manipulate and retrieve data stored in IBM's original quasirelational database management system, System R, which a group at IBM San Jose Research Laboratory had developed during the 1970s"
            />
          </div>
        </Layout>
      </div>
    </>
  );
}
