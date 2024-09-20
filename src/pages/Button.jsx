import React from 'react'
import { cn } from '../utils/cn'

const Button = ({ children,type='button', className=''}) => {
  return (
    <button className={cn('text-center w-full border py-2 bg-gray-800 dark:bg-primary-dark text-white font-Roboto rounded-lg dark:border-white/10 dark:text-white', className)}>{children}</button>
  )
}

export default Button