import React from 'react'
import review from '../assets/review.png'
import play from '../assets/play.png'
import leader from '../assets/leader.png'
import userOctagon from '../assets/user-octagon.png'
import Image from 'next/image'

const tabsData = [
    {text: 'Review', image: review},
    {text: 'Play', image: play},
    {text: 'Leader', image: leader},
    {text: 'Profile', image: userOctagon},
]

const FooterTabs = () => {
  return (
    <div className='bg-[#6A35FA] h-[67px] rounded-[10px] 
    items-center flex justify-between py-[8px] px-[29px]'>
        {tabsData.map((item, index) => (
            <div className='items-center flex flex-col justify-center'>
                <Image
                src={item.image}
                className='h-[28px] w-[28px] cursor-pointer'
                alt='label'
                />
            <p className='text-[10px] cursor-pointer'>{item.text}</p>
            </div>
        ))}
    </div>
    
  )
}

export default FooterTabs