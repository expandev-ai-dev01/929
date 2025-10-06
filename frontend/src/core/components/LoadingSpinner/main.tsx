import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';
import { loadingSpinnerVariants } from './variants';

/**
 * @component LoadingSpinner
 * @summary Displays a loading spinner with configurable size and styling.
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @accessibility
 * - ARIA: role="status" with aria-label
 * - Screen Reader: Announces loading state
 */
export const LoadingSpinner = ({
  size = 'medium',
  className,
  label = 'Carregando...',
}: LoadingSpinnerProps) => {
  return (
    <div
      className={clsx('flex items-center justify-center', className)}
      role="status"
      aria-label={label}
    >
      <div className={loadingSpinnerVariants({ size })}>
        <div className="animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
};
