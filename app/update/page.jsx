import Image from 'next/image'
import React from 'react'
import refresh from '../assets/refresh.png'
import tabela from '../assets/Tabela.png'
import star from '../assets/star.png'
import rank from '../assets/rank.png'
import people from '../assets/people.png'
import avatar from '../assets/avatar.png';
import exclamation from '../assets/exclamation.png';


const pointDataDetails = [
    { amount: '1,500', text: 'Total Points' },
    { amount: '89', text: 'Completed Items' },
    { amount: '50', text: 'Total Logins' },
    { amount: '1,500', text: 'Total Referrals' },
    { amount: '1,500', text: 'Total Badges' },
    { amount: '21', text: 'Total Reward' },
]


const page = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col items-center'>
            <div className='w-[390px] bg-[#04173c] h-[100vh] text-white p-4'>

                {/* update section */}
                <div className='b-2 w-full bg-white h-[0.1px] '></div>
                <div>
                    <div className='flex justify-between my-2'>
                        <div className='flex justify-between w-[134px] bg-[#B9B9B933] items-center
         rounded-full p-1 pr-2'>

                            <div className='flex justify-between p-1 pr-2 rounded-full items-center bg-[#9F9F9F]'>
                                <Image
                                    src={avatar}
                                    alt='star'
                                    className='w-[15px] h-[15px]'

                                />
                                <p className='font-semibold text-[12px]'>EmmJay Sam</p>


                            </div>
                            <Image
                                src={exclamation}
                                alt='star'
                                className='w-[17px] h-[17px] rounded-full'
                            />
                        </div>

                        <p className='text-[#69696A] font-[12px]'>Upadte</p>

                    </div>

                    <div className='b-2 w-full mt-2 bg-white h-[0.1px] '></div>
                    <div className='flex justify-between items-center p-2 my-2'>
                        <p className='text-white rounded-full text-[14px] bg-[#4000FF] p-1'>UQcxcjpy109jirh...</p>
                        <div className='w-[15px] h-[15px]'>
                            <Image
                                src={refresh}
                                alt='refresh'
                                className='w-full h-full cursor-pointer'
                            />
                        </div>

                    </div>
                    <div className='b-2 w-full bg-white h-[0.1px] '></div>
                </div>

                {/* poinsts datas section */}
                <div className='border-[0.1px] mt-10 border-white rounded-[8px] grid grid-cols-2'>
                    {pointDataDetails.map((item, index) => (
                        <div className=''>
                        <div key={index}
                        className='w-[180px] h-[83px]
                          border-white rounded-[8px] border-[0.1px] gap-2'
                        >
                            <div>
                            {item.amount}
                            {item.text}
                            </div>       
                          
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page