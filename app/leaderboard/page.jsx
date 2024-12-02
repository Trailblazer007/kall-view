import Image from 'next/image'
import React from 'react'
import refresh from '../assets/refresh.png'
import tabela from '../assets/Tabela.png'
import star from '../assets/star.png'
import rank from '../assets/rank.png'
import people from '../assets/people.png'
import FooterTabs from '../components/FooterTabs'


const usersDetails = [
  { sn: 1, name: 'Mr_Lexy', amount: '301,709' },
  { sn: 2, name: 'Walter Andrew', amount: '291,229' },
  { sn: 3, name: 'Mark Emmason', amount: '282,932' },
  { sn: 4, name: 'Mark Emmason', amount: '282,932' },
  { sn: 5, name: 'Mark Emmason', amount: '282,932' },
  { sn: 6, name: 'Mark Emmason', amount: '282,932' },
  { sn: 7, name: 'Mark Emmason', amount: '282,932' },
  ,
]


const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center'>
      <div className='w-[390px] bg-[#04173c] text-white p-4'>

        <div className=' mt-10 p-4'>
          <div className='b-2 w-full bg-white h-[0.1px] '></div>

          <div className='flex justify-between items-center p-2'>
            <p className='text-white font-semibold text-[14px]'>Leaderboard</p>
            <div className='w-[15px] h-[15px]'>
              <Image
                src={refresh}
                alt='refresh'
                className='w-full h-full cursor-pointer'
              />
            </div>

          </div>

          <div className=' w-full bg-white h-[0.1px] '></div>
        </div>

        {/* Announcement scroll section */}

        <div className='w-[355px] h-[134px] items-center flex flex-col'>
          <Image
            src={tabela}
            alt='annoucements'
            className='rounded-[20px] w-full h-full'
          />
        </div>

        {/* points and ranks */}
        <div className='flex justify-between w-full mt-10'>
          <div className='border-[#FFFFFF] border-[0.1px]
            px-[15px] py-[22px]
            rounded-[10px]'>
            <div className='flex gap-1 items-center text-[20px] font-semibold'>
              <p>150</p>
              <Image
                src={star}
                alt='star'
                className='w-[15px] h-[15px]'
              />
            </div>
            <p className='text-[12px]'>Total Points</p>

          </div>
          <div className='border-[#FFFFFF] border-[0.1px]
            px-[15px] py-[22px]
            rounded-[10px]'>
            <div className='flex gap-1 items-center text-[20px] font-semibold'>
              <p>14334</p>
              <Image
                src={rank}
                alt='rank'
                className='w-[15px] h-[15px]'
              />
            </div>
            <p className='text-[12px]'>Current Rank</p>

          </div>
          <div className='border-[#FFFFFF] border-[0.1px]
            px-[15px] py-[22px]
            rounded-[10px]'>
            <div className='flex gap-1 items-center text-[20px] font-semibold'>
              <p>150</p>
              <Image
                src={people}
                alt='rank'
                className='w-[15px] h-[15px]'
              />
            </div>
            <p className='text-[12px]'>Current Rank</p>

          </div>
        </div>

        {/* rank and top users */}
        <div className='flex justify-between border-white border-y-[0.1px] my-4 p-2 border-dashed'>

          <div className='flex gap-10'>
            <p className='font-semibold text-[14px]'>Rank</p>
            <p className='font-semibold text-[14px]'>Top Users</p>
          </div>
          <div>
            <p className='font-semibold text-[12px]'>Top Users</p>
          </div>
        </div>

        {/* mapping through user details */}
        <div>
          {usersDetails.map((user, index) => (
            <div
              key={index}
              className='flex justify-between items-center p-2'
            >
              <div className='flex gap-16'>
                <p>{user.sn}</p>
                <p>{user.name}</p>
              </div>

              <div className='flex gap-2 items-center'>
                <Image
                  src={star}
                  alt='star'
                  className='w-[15px] h-[15px]'
                />
                {user.amount}
              </div>

            </div>
          ))}
        </div>

        <FooterTabs />
      </div>
    </div>
  )
}

export default page