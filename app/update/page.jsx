import Image from "next/image";
import React from "react";
import refresh from "../assets/refresh.png";
import exclamation from "../assets/exclamation.png";
import profileAvatar from "../assets/profile-avatar.png";
import gmail from "../assets/gmail.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import idCard from "../assets/id-card.png";
import avatar from "../assets/avatar.png";
import FooterTabs from "../components/FooterTabs";

const pointDataDetails = [
  { amount: "1,500", text: "Total Points" },
  { amount: "89", text: "Completed Items" },
  { amount: "50", text: "Total Logins" },
  { amount: "1,500", text: "Total Referrals" },
  { amount: "1,500", text: "Total Badges" },
  { amount: "21", text: "Total Reward" },
];

const page = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <div className="w-[390px] bg-[#04173c] text-white p-4">
        {/* update section */}
        <div className="b-2 w-full bg-[#4B4355] h-[0.1px] "></div>
        <div>
          <div className="flex justify-between my-2">
            <div
              className="flex justify-between w-[134px] bg-[#B9B9B933] items-center
         rounded-full p-1 pr-2"
            >
              <div className="flex justify-between p-1 pr-2 rounded-full items-center bg-[#9F9F9F]">
                <Image src={avatar} alt="star" className="w-[15px] h-[15px]" />
                <p className="font-semibold text-[12px]">EmmJay Sam</p>
              </div>
              <Image
                src={exclamation}
                alt="star"
                className="w-[17px] h-[17px] rounded-full"
              />
            </div>

            <p className="text-[#69696A] font-[12px]">Upadte</p>
          </div>

          <div className="b-2 w-full mt-2 bg-[#4B4355] h-[0.1px] "></div>
          <div className="flex justify-between items-center p-2 my-2">
            <p className="text-white rounded-full text-[14px] bg-[#4000FF] p-1">
              UQcxcjpy109jirh...
            </p>
            <div className="w-[15px] h-[15px]">
              <Image
                src={refresh}
                alt="refresh"
                className="w-full h-full cursor-pointer"
              />
            </div>
          </div>
          <div className="b-2 w-full bg-[#4B4355] h-[0.1px] "></div>
        </div>

        {/* poinsts datas section */}
        <div
          className="border-[0.1px] mt-10 border-[#4B4355] rounded-[8px] grid grid-cols-2 
        gap-2 p-2 place-items-center"
        >
          {pointDataDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center 
                 w-[156px] h-[83px] border-[#4B4355] 
                 rounded-[8px] border-[0.1px] p-2"
            >
              <p className="font-bold text-[25px]">{item.amount}</p>
              <p className="text-[15px] text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* profile and socials section */}
        <div className="mt-10">
          <div className="bg-[#1B102D] rounded-[7px] my-1">
            <div className="flex items-center gap-2 p-2">
                <Image 
                src={profileAvatar}
                alt="profile"
                className="w-[15px] h-[15px] rounded-full"
                />
            <p className="font-semibold text-[18px]">Profile</p>
            </div>
          </div>

          <div className="bg-[#1B102D] rounded-[7px] my-1">
            <div className="flex items-center gap-2 p-2">
                <Image 
                src={telegram}
                className="w-[15px] h-[15px] rounded-full"
                alt="telegram"
                />
            <p className="font-semibold text-[18px]">follow Telegram Channel</p>
            </div>
          </div>

          <div className="bg-[#1B102D] rounded-[7px] my-1">
            <div className="flex items-center gap-2 p-2">
                <Image 
                src={twitter}
                className="w-[15px] h-[15px] rounded-full"
                alt="X"
                />
            <p className="font-semibold text-[18px]">X</p>
            </div>
          </div>
          <div className="bg-[#1B102D] rounded-[7px] my-1">
            <div className="flex items-center gap-2 p-2">
                <Image 
                src={gmail}
                className="w-[15px] h-[15px]"
                alt="gmail"
                />
            <p className="font-semibold text-[18px]">Email</p>
            </div>
          </div>

          <div className="bg-[#1B102D] rounded-[7px] my-1">
            <div className="flex items-center gap-2 p-2">
                <Image 
                src={idCard}
                alt="boi"
                className="w-[15px] h-[15px] rounded-full"
                />
            <p className="font-semibold text-[18px]">Bio</p>
            </div>
          </div>
          
        </div>

        <FooterTabs />
      </div>
    </div>
  );
};

export default page;
