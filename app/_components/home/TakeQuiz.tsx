"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CancelQuiz } from "./CancelQuiz";

export function TakeQuiz() {
  const [step, setStep] = useState(1);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [quizQuestion, setQuizQuestion] = useState("");
  const [totalQuestion, setTotalQuestion] = useState(5);
  const [question, setquestion] = useState(1);
  const handleOnClick = () => {
    let count = 1;
    setStep(count++);
  };

  // const onSendChat = async () => {
  //   const response = await fetch("/api/gemini", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   });
  //   const data = await response.json();
  //   console.log(data.message);
  //   if (data) {
  //     setAnswer1(data.message);
  //   }
  // };

  if (step === 1) {
    return (
      <>
        <div className="my-30">
          <div className="flex justify-between items-center mb-5">
            <div>
              <img className="h-8" src="Article Generator Icon.png" />
              <p className="font-bold text-[24px] text-black">Quick test</p>
            </div>
            <CancelQuiz />
          </div>

          <p className="size/base text-[#71717A] mb-5">
            Take a quick test about your knowledge from your content{" "}
          </p>
          <div className="w-125 h-50 border bg-white p-10 rounded-md">
            <div className="flex justify-between items-center ">
              <p className="font-bold text-/xl text-[#000000] mb-6 ">
                {quizQuestion}What was Genghis Khan’s birth name?
              </p>

              <div className="flex gap-1">
                <p className="text-xl font-bold black">2</p>/
                <span className="text-base text-black ">{totalQuestion}</span>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <Button
                onClick={handleOnClick}
                // onClick={onSendChat}
                className="text-[14px] border   hover:bg-gray-300 text-black bg-white"
              >
                {answer1} Yesugei
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px]  hover:bg-gray-300 border text-black bg-white"
              >
                {answer2}Temüjin
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px] hover:bg-gray-300 border text-black  bg-white"
              >
                {answer3}Toghrul
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px] hover:bg-gray-300 border text-black  bg-white"
              >
                {answer4}Jamukha
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (step === 2) {
    return (
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
                {quizQuestion}When was Temüjin born?
              </p>

              <div className="flex gap-1">
                <p className="text-xl font-bold black">{question}</p>/
                <span className="text-base text-black ">{totalQuestion}</span>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <Button
                onClick={handleOnClick}
                className="text-[14px] hover:text-white border text-black bg-white"
              >
                {answer1} Around 1187
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px]  hover:text-white border text-black bg-white"
              >
                {answer2}Around 1182
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px]  hover:text-white border text-black  bg-white"
              >
                {answer3}Around 1220
              </Button>
              <Button
                onClick={handleOnClick}
                className="text-[14px]  hover:text-white border text-black  bg-white"
              >
                {answer4}Around 1120
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (step === 3) {
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
              {quizQuestion}When was Temüjin born?
            </p>

            <div className="flex gap-1">
              <p className="text-xl font-bold black">{question}</p>/
              <span className="text-base text-black ">{totalQuestion}</span>
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
    </>;
  } else if (step == 4) {
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
              {quizQuestion}When was Temüjin born?
            </p>

            <div className="flex gap-1">
              <p className="text-xl font-bold black">{question}</p>/
              <span className="text-base text-black ">{totalQuestion}</span>
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
    </>;
  } else if (step === 5) {
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
              {quizQuestion}When was Temüjin born?
            </p>

            <div className="flex gap-1">
              <p className="text-xl font-bold black">{question}</p>/
              <span className="text-base text-black ">{totalQuestion}</span>
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
    </>;
  }
}
