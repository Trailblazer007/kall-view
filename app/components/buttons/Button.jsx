import React from 'react'

const Button = ({backgroundColor, text, fontColor, fontWeight="normal", border = "border-none", borderWidth = "0px" }) => {
const buttonClasses = `${fontColor} ${fontWeight} ${backgroundColor} ${border} ${borderWidth} py-[3px] px-[9px] rounded-[40px] flex justify-center items-center`

  return (
    <button className = {buttonClasses}>
      {text}
    </button>
  )
}

export default Button