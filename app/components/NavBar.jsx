import React from "react";
import { navbarDetails } from "@/app/_constants/navbarDetails";
import Image  from "next/image";

const NavBar = () => {
  return (
    <div className="mb-20 text-white sticky bottom-0 z-50 shadow-md rounded-[10px] flex justify-between items-center w-full py-[8.5px] px-[26.8px] bg-gradient-to-r from-[#6a35fa] to-[#472997]">

      {navbarDetails.map((item) => (
        <div className="flex flex-col justify-between items-center" key={item.id}>
            <Image
              src={item.image}
              width={21}
              height={29}
              alt="nav bar item"
            />

            <p>{item.text}</p>
          
        </div>
      ))}
    </div>
  );
};

export default NavBar;
