import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-full bg-bg-2 border border-[rgba(245,245,240,0.12)] text-[#F5F5F0]',
          'font-mono text-xs tracking-wide',
          'px-5 py-4 outline-none transition-colors duration-200',
          'placeholder:text-[rgba(245,245,240,0.25)]',
          'focus:border-brand-red-dim',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
