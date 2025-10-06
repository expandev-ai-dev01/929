import { cva } from 'class-variance-authority';

export const loadingSpinnerVariants = cva('', {
  variants: {
    size: {
      small: 'h-6 w-6',
      medium: 'h-12 w-12',
      large: 'h-16 w-16',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
