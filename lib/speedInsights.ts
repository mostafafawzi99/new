/**
 * Vercel Speed Insights initialization
 * This module initializes Vercel Speed Insights for performance monitoring.
 * Must be called on the client side only.
 */

import { inject } from '@vercel/speed-insights';

/**
 * Initialize Vercel Speed Insights
 * This should be called in the app's entry point to enable performance monitoring
 */
export function initializeSpeedInsights(): void {
  // Only initialize on the client side
  if (typeof window !== 'undefined') {
    inject();
  }
}
