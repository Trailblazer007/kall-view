import React from 'react'
import Image from 'next/image'
// import logo from '@public/images/logo.png'

const page = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <Image
                src={"/images/logo.png"}
                width={14}
                height={14}
                alt='logo image'
            />
        </div>

        <div>
          <Image
            src={"/images/bulb.png"}
            width={20}
            height={20}
            alt='logo image'
          />

        </div>
    </div>
  )
}

export default page