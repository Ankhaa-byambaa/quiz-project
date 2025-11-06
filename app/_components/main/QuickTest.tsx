"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CancelQuiz } from "../home/CancelQuiz";
// type QuickTestProps=(
//     question:string,
//     answer1:string,
//     answer2:string,
//     answer3:string,
//     answer4:string,
//{question, answer1,answer2,answer3,answer4}:QuickTestProps
// );
export function QuickTest() {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [question, setquestion] = useState(1);
  const [step, setStep] = useState(1);
  const handleOnClick = () => {
    let count = 1;
    setStep(count++);
  };
  return (
    <>
      <>
        <div className="my-30">
          <div className="flex justify-between items-center mb-2">
            <div className="flex  gap-3">
              <img className="h-8" src="Article Generator Icon.png" />
              <p className="font-bold text-[24px] text-black">Quick test</p>
            </div>
            <CancelQuiz />
          </div>

          <p className="text-xs text-[#71717A] mb-7">
            Take a quick test about your knowledge from your content{" "}
          </p>
          <div className="w-125 h-50 border bg-white p-10 rounded-md">
            <div className="flex justify-between items-center ">
              <p className="font-bold text-/xl text-[#000000] mb-6 ">
                When was Temüjin born?
              </p>

              <div className="flex gap-1">
                <p className="text-xl font-bold black">{question}</p>/
                <span className="text-base text-black "></span>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <Button
                onClick={handleOnClick}
                className="text-[14px] hover:text-white border text-black bg-white"
              >
                {answer1} Around 1187
              </Button>
              <Button className="text-[14px]  hover:text-white border text-black bg-white">
                {answer2}Around 1182
              </Button>
              <Button className="text-[14px]  hover:text-white border text-black  bg-white">
                {answer3}Around 1220
              </Button>
              <Button className="text-[14px]  hover:text-white border text-black  bg-white">
                {answer4}Around 1120
              </Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
