import React from "react";
import MainLayout from "../_layout/MainLayout";
import Button from "../components/buttons/Button";
import Image from "next/image"

const page = () => {
  return (
    <MainLayout>
      <main className="text-white mb-4">
        <div className="pt-4 pb-4 font-medium text-[14px] border-b-[0.5px] border-dashed">
          <p>Give your review</p>
        </div>

        <div className="hero-image-two rounded-[10px] mt-4 min-h-[130px] backdrop-blur-sm bg-[rgba(255,255,255,0.1)] flex ">
          <div className="hero-image-two-i w-2/5"></div>

          <div className="hero-image-two-ii w-4/5 ml-auto self-center ">
            <p className="w-52 font-poppins text-[10px] font-medium leading-[15px] text-center mx-auto">
              Review your completed tasks, track performance, and share feedback
              to maximize your rewards
            </p>

            <div className="flex justify-center gap-3 items-center mt-[10px]">
              <Button
                backgroundColor="bg-lightPurple"
                text="Connect"
                fontColor="text-white"
              />

              <Button
                backgroundColor="bg-[rgba(255,255,255,0)]"
                text="Rewards"
                fontColor="text-white"
                border="border-[1px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[14px] pt-6 border-t-[0.5px] border-dashed mb-[9px]">
          <p>How would you rate Deli Swap?</p>

          <div className="flex items-center gap-2 mt-[10px] mb-2">
            <Image
              src={"/images/star-full-2.png"}
              width={16}
              height={16}
              alt="star rating image"
            />

            <Image
              src={"/images/star-full-2.png"}
              width={16}
              height={16}
              alt="star rating image"
            />

            <Image
              src={"/images/star-full-2.png"}
              width={16}
              height={16}
              alt="star rating image"
            />

            <Image
              src={"/images/star-half-2.png"}
              width={16}
              height={16}
              alt="star rating image"
            />

            <Image
              src={"/images/star-empty-2.png"}
              width={16}
              height={16}
              alt="star rating image"
            />
          </div>
        </div>

        <form action="" className="my-5">
          <textarea className="rounded-xl resize-none border-none w-full h-40 p-2 bg-[rgba(255,255,255,0.7)] text-lightPurple" />

          <div className="flex gap-4 items-center mt-5">
            <p className="text-[#7C4BFF] font-poppins text-xs">Share your thought and experience.</p>

            <Image
              src={"/images/info.png"}
              width={12}
              height={12}
              alt="star rating image"
            />
          </div>

          <button className="mt-8 rounded-full border-none outline-none py-[6.5px] bg-lightPurple w-full font-poppins font-semibold">
            Submit
          </button>
        </form>

        <div className="bottom-bg"></div>
      </main>
    </MainLayout>
  );
};

export default page;
