import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border-radius-sm disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-red text-white border-none hover:bg-[#e8021f] hover:-translate-y-px',
        ghost:
          'text-[rgba(245,245,240,0.55)] border border-[rgba(245,245,240,0.12)] hover:text-[#F5F5F0] hover:border-[rgba(245,245,240,0.35)]',
        outline:
          'text-brand-red border border-brand-red-dim hover:bg-[rgba(208,2,27,0.18)] hover:border-brand-red hover:text-white',
        link:
          'text-brand-red border-b border-brand-red-dim pb-0.5 hover:border-brand-red',
      },
      size: {
        default: 'px-9 py-4',
        sm: 'px-5 py-2.5',
        nav: 'px-5 py-[9px] text-[11px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
