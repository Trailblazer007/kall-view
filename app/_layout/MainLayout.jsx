import React from 'react'
import Header from "../components/Header.jsx"
import NavBar from '../components/NavBar.jsx'

// remember to remove h-screen style
const MainLayout = ({children}) => {
  return ( 
    <div className="flex flex-col justify-between bg-bgPurple pt-[30px] px-4">
        <Header />

        <main>
          {children}
        </main>

        <NavBar />
    </div>
  )
}

export default MainLayout