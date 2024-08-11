import type { Regions } from '../types/regions';

/**
 * An object representing discovery regions and their associated names.
 */
export const regions: Regions = {
  // Possible fixed regions
  // Example
  // A21117FF: 'Flinus',
};

// Make 'regions' read-only
Object.freeze(regions);
