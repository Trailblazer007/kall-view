import React from 'react'
import Image from 'next/image'
import Button from './buttons/Button'
const page = () => {
  return (
    <div className='flex justify-between items-center border-b-[0.1px] pb-6'>
        <div className='flex items-center'>
          <p className='font-poppins font-medium text-xl leading-5'>Kall</p>
            <Image
                src={"/images/logo.png"}
                width={14}
                height={14}
                alt='logo image'
            />
          <p className='pl-1 font-poppins font-semibold text-xl leading-5 text-[#6637E6]'>View</p>
        </div>

        <div className='flex justify-between items-center '>
          <Image
            src={"/images/bulb.png"}
            width={20}
            height={20}
            alt='logo image'
            className='mr-[6px]'
          />

          <Button 
            backgroundColor="bg-[#472997]"
            text="Connect Wallet"
            fontColor="text-white"
          />

        </div>
    </div>
  )
}

export default page