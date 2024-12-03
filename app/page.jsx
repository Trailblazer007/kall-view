import Image from "next/image";
import MainLayout from "./_layout/MainLayout";
import Button from "./components/buttons/Button";
import { categoriesDetails } from "./_constants/categoriesDetails";

export default function Home() {
  return (
    <MainLayout>
      <main className="text-white">
        <div className=" hero-image mt-4 mb-4 p-3 flex bg-[#1A1D30] rounded-[10px] border-white ">
          <article className="ml-auto w-3/5 ">
            <p className="text-poppins text-[15px] font-bold leading-5 text-center">Do this quest to earn early rewards</p>
            <p className=" text-poppins text-[9px] font-medium leading-[15px] text-center">
              Complete all task to earn early rewards, every point will be added
              to future drop
            </p>

            <div className="flex justify-center gap-3  items-center mt-[10px]">
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
          </article>
        </div>

        {/*categories  */}
        <div className="pt-5 border-t-[0.5px] ">
          <div className="flex justify-between items-center">
            <p className="text-montserrat font-semibold text-[18px] leading-[30px]">Categories</p>

            <div className="flex items-center justify-between">
              <div className="mr-2">
                <Image 
                  src={"/images/search.png"}
                  height={12}
                  width={12}
                  alt="search icon"
                />
              </div>

              <Button
                backgroundColor="bg-[#472997]"
                text="See all"
                fontColor="text-white"
              />
            </div>
          </div>

          <div className="mt-5 mb-7 flex justify-between items-center w-full px-1 ">
            {categoriesDetails.map((item)=> (
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                width={65}
                height={64}
                alt={`${item.name}`}
              />

              <p>{item.text}</p>
            </div>
          ))}
          </div>
        </div>

        {/* deli swap  */}
        <div className="bg-[#10141F] rounded-[10px] p-4">
          <div className="bg-[#1A1D30] py-4 px-5  rounded-[10px]">
            <div className=" flex justify-between items-center">
              <p className="text-poppins font-semibold text-[20px] leading-5">Deli Swap</p>
              <Image
                src={"/images/info-sm.png"}
                width={12}
                height={12}
                alt="star rating image"
              />
            </div>

            {/* stars */}
            <div className="flex items-center gap-2 mt-[10px] mb-2">
              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-half.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-empty.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />
            </div>
            <p className="text-montserrat font-semibold text-[11px] leading-[22px] text-[#98999A]">Score 4.22 (82 reviews)</p>

            <div className="flex gap-3 items-center mt-5">
              <Button
                backgroundColor="bg-[#4000FF]"
                text="DeFi"
                fontColor="text-white"
                fontWeight="font-medium"
              />

              <Button
                backgroundColor="bg-[#6A37F3]"
                text="Add My Review"
                fontColor="text-white"
                fontWeight="font-medium"
              />
            </div>
          </div>

              {/* table section */}
            <section className="mt-3 pt-3 border-t-[0.1px]">
              <div className="flex justify-between items-center mb-4">
                {/* left side */}
                <div className="flex justify-between items-center">
                  <p className="text-poppins font-semibold text-xs">Complete task</p>
                  <Image
                    className="ml-3"
                    src={"/images/caret-down.png"}
                    width={8}
                    height={6}
                    alt="show more tasks"
                  />
                </div>

                {/* right side */}
                <div>
                  <p className="text-lightPurple text-xs">See all</p>
                </div>
              </div>

              {/* the list - each item */}
              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/telegram-lg.png"}
                    width={15}
                    height={15}
                    alt="telegram image"
                  />
                  <p className="text-poppins font-medium text-xs ">Follow Telegram Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs ">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/discord.png"}
                    width={15}
                    height={16}
                    alt="discord image"
                  />
                  <p className="text-poppins font-medium text-xs">Follow on discord</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/youTube.png"}
                    width={15}
                    height={12}
                    alt="youtube image"
                  />
                  <p className="text-poppins font-medium text-xs">Subscribe to YouTube Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>100XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/linkedIn.png"}
                    width={16}
                    height={16}
                    alt="linkedIn image"
                  />
                  <p className="text-poppins font-medium text-xs">Like LinkedIn Post</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>
            </section>
        </div>

        {/* solaplex */}
        <div className="bg-[#10141F] rounded-[10px] p-4">
          <div className="bg-[#1A1D30] py-4 px-5  rounded-[10px]">
            <div className=" flex justify-between items-center">
              <p className="text-poppins font-semibold text-[20px] leading-5">Solplex</p>
              <Image
                src={"/images/info-sm.png"}
                width={12}
                height={12}
                alt="star rating image"
              />
            </div>

            {/* stars */}
            <div className="flex items-center gap-2 mt-[10px] mb-2">
              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-half.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-empty.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />
            </div>
            <p className="text-montserrat font-semibold text-[11px] leading-[22px] text-[#98999A]">Score 4.22 (82 reviews)</p>

            <div className="flex gap-3 items-center mt-5">
              <Button
                backgroundColor="bg-[#4000FF]"
                text="GameFi"
                fontColor="text-white"
                fontWeight="font-medium"
              />

              <Button
                backgroundColor="bg-[#6A37F3]"
                text="Add My Review"
                fontColor="text-white"
                fontWeight="font-medium"
              />
            </div>
          </div>

              {/* table section */}
            <section className="mt-3 pt-3 border-t-[0.1px]">
              <div className="flex justify-between items-center mb-4">
                {/* left side */}
                <div className="flex justify-between items-center">
                  <p className="text-poppins font-semibold text-xs">Complete task</p>
                  <Image
                    className="ml-3"
                    src={"/images/caret-down.png"}
                    width={8}
                    height={6}
                    alt="show more tasks"
                  />
                </div>

                {/* right side */}
                <div>
                  <p className="text-lightPurple text-xs">See all</p>
                </div>
              </div>

              {/* the list - each item */}
              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/youTube.png"}
                    width={15}
                    height={12}
                    alt="youtube image"
                  />
                  <p className="text-poppins font-medium text-xs">Subscribe to YouTube Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>100XP</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/telegram-lg.png"}
                    width={15}
                    height={15}
                    alt="telegram image"
                  />
                  <p className="text-poppins font-medium text-xs ">Follow Telegram Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs ">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/linkedIn.png"}
                    width={16}
                    height={16}
                    alt="linkedIn image"
                  />
                  <p className="text-poppins font-medium text-xs">Like LinkedIn Post</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/discord.png"}
                    width={15}
                    height={16}
                    alt="discord image"
                  />
                  <p className="text-poppins font-medium text-xs">Follow on discord</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>
            </section>
        </div>

        <div className="bg-[#10141F] rounded-[10px] p-4">
          <div className="bg-[#1A1D30] py-4 px-5  rounded-[10px]">
            <div className=" flex justify-between items-center">
              <p className="text-poppins font-semibold text-[20px] leading-5">Maka</p>
              <Image
                src={"/images/info-sm.png"}
                width={12}
                height={12}
                alt="star rating image"
              />
            </div>

            {/* stars */}
            <div className="flex items-center gap-2 mt-[10px] mb-2">
              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
              />

              <Image
                  src={"/images/star.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-half.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />

              <Image
                  src={"/images/star-empty.png"}
                  width={12}
                  height={12}
                  alt="star rating image"
                />
            </div>
            <p className="text-montserrat font-semibold text-[11px] leading-[22px] text-[#98999A]">Score 4.22 (82 reviews)</p>

            <div className="flex gap-3 items-center mt-5">
              <Button
                backgroundColor="bg-[#4000FF]"
                text="DeFi"
                fontColor="text-white"
                fontWeight="font-medium"
              />

              <Button
                backgroundColor="bg-[#6A37F3]"
                text="Add My Review"
                fontColor="text-white"
                fontWeight="font-medium"
              />
            </div>
          </div>

              {/* table section */}
            <section className="mt-3 pt-3 border-t-[0.1px]">
              <div className="flex justify-between items-center mb-4">
                {/* left side */}
                <div className="flex justify-between items-center">
                  <p className="text-poppins font-semibold text-xs">Complete task</p>
                  <Image
                    className="ml-3"
                    src={"/images/caret-down.png"}
                    width={8}
                    height={6}
                    alt="show more tasks"
                  />
                </div>

                {/* right side */}
                <div>
                  <p className="text-lightPurple text-xs">See all</p>
                </div>
              </div>

              {/* the list - each item */}
              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/telegram-lg.png"}
                    width={15}
                    height={15}
                    alt="telegram image"
                  />
                  <p className="text-poppins font-medium text-xs ">Follow Telegram Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs ">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/discord.png"}
                    width={15}
                    height={16}
                    alt="discord image"
                  />
                  <p className="text-poppins font-medium text-xs">Follow on discord</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[10px]">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/youTube.png"}
                    width={15}
                    height={12}
                    alt="youtube image"
                  />
                  <p className="text-poppins font-medium text-xs">Subscribe to YouTube Channel</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>100XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center gap-1">
                  <Image
                    src={"/images/linkedIn.png"}
                    width={16}
                    height={16}
                    alt="linkedIn image"
                  />
                  <p className="text-poppins font-medium text-xs">Like LinkedIn Post</p>
                </div>

                <div className="text-poppins font-semibold text-xs">
                  <p>10XP</p>
                </div>
              </div>
            </section>
        </div>
      </main>
    </MainLayout>
  );
}
