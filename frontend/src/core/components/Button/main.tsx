import { clsx } from 'clsx';
import type { ButtonProps } from './types';
import { buttonVariants } from './variants';

/**
 * @component Button
 * @summary Reusable button component with multiple variants and sizes.
 * @domain core
 * @type ui-component
 * @category form
 *
 * @accessibility
 * - Keyboard: Full keyboard navigation support
 * - ARIA: Proper button semantics
 * - Focus: Visible focus indicators
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  className,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Carregando...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
