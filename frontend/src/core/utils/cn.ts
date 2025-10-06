import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Merges Tailwind CSS classes with proper precedence.
 * @domain core
 * @type utility-function
 * @category styling
 *
 * @description
 * Combines clsx for conditional classes and tailwind-merge
 * to handle Tailwind class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
