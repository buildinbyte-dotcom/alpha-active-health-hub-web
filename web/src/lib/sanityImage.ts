import { createImageUrlBuilder } from '@sanity/image-url';
import { config } from './sanity';

const builder = createImageUrlBuilder({
  projectId: config.projectId!,
  dataset: config.dataset,
});

/**
 * Sanity image source type - the full image object from Sanity
 * including hotspot and crop data.
 */
export interface SanityImageSource {
  asset: {
    _ref: string;
    url?: string;
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

/**
 * Build an image URL from a Sanity image source, respecting hotspot/crop.
 */
export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!source?.asset) return null;
  return builder.image(source);
}

/**
 * Get a sized image URL string with hotspot-aware cropping.
 */
export function getImageUrl(
  source: SanityImageSource | null | undefined,
  width: number,
  height: number,
): string | null {
  const imgBuilder = urlForImage(source);
  if (!imgBuilder) return null;
  return imgBuilder
    .width(width)
    .height(height)
    .fit('crop')
    .auto('format')
    .url();
}

/**
 * Get CSS object-position from Sanity hotspot data.
 * Falls back to "center center" if no hotspot is set.
 */
export function getHotspotPosition(source: SanityImageSource | null | undefined): string {
  if (!source?.hotspot) return 'center center';
  return `${(source.hotspot.x * 100).toFixed(1)}% ${(source.hotspot.y * 100).toFixed(1)}%`;
}
