import React from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '../utils/cn'

const Button = ({ children,type='button', className=''}) => {
  return (
    <button className={cn('text-center w-full border py-2 bg-gray-800 text-white font-Roboto rounded-lg', className)}>{children}</button>
  )
}

export default Button