import { type ClassValue, clsx } from "clsx";

/**
 * Utility function to merge class names conditionally.
 * Combines clsx for conditional class handling.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
