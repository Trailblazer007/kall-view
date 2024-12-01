import React from 'react'
import { navbarDetails } from '@/app/_constants/navbarDetails'

const NavBar = () => {
  return (
    <div>
        <div className="py-2 p-6 bg-gradient-to-r from-[#6a35fa] to-[#472997]">
            {navbarDetails.map(item => {
                <div key={item.id}>
                    <div>{item.image}</div>
                    <div>{item.text}</div>
                </div>
            })}
        </div>
    </div>
  )
}

export default NavBar