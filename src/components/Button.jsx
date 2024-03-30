import React from 'react'

const Button = ({ label, iconURL, bgColor, textColor, border }) => {
  return (
    <button className={`flex justify-center items-center py-4 px-7 gap-2 ${bgColor ? bgColor : 'bg-coral-red'} ${textColor ? textColor : 'text-white'} font-serif tracking-wider leading-none text-lg rounded-full hover:scale-105 duration-150 ${border ? border : ''}`}>
        {label}
        { iconURL && <img src={iconURL} alt="Button" />}
    </button>
  )
}

export default Button