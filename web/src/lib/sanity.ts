import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-03-20', // Use a consistent API version
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

// Helper function for easily fetching data
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  return sanityClient.fetch(query, params, {
    cache: 'force-cache', // Default to cache data
    next: {
      tags, // Used for revalidation
      revalidate: 60, // Revalidate every 60 seconds (ISR)
    },
  });
}
