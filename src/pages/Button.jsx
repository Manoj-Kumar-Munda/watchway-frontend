import React from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '../utils/cn'

const Button = ({ children,type='button', className=''}) => {
  return (
    <button className={cn('text-center w-full border py-2 bg-gray-800 dark:bg-inherit text-white font-Roboto rounded-lg dark:border-white/10 dark:bg-slate-200 dark:text-gray-800', className)}>{children}</button>
  )
}

export default Button