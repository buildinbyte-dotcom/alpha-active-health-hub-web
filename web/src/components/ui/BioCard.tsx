import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react';

interface BioCardProps {
  name: string;
  role: string;
  credentials?: string;
  bio: any[]; // Portable Text
  imageUrl?: string;
  slug: string;
  specialties?: string[];
}

// Request a uniformly-cropped, face-aware thumbnail from the Sanity CDN so
// every card renders the same portrait proportions regardless of the source
// image's aspect ratio or framing.
function toThumbnailUrl(url: string, width = 600, height = 750): string {
  if (!url.includes('cdn.sanity.io')) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}w=${width}&h=${height}&fit=crop&crop=faces,center&auto=format`;
}

export default function BioCard({ name, role, credentials, bio, imageUrl, slug, specialties }: BioCardProps) {
  const thumbnailUrl = imageUrl ? toThumbnailUrl(imageUrl) : undefined;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full w-full">
      <div className="relative aspect-[4/5] w-full bg-gray-100">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={name}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
            Photo Placeholder
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] leading-tight mb-2">{name}</h3>
        {credentials && (
          <p className="text-sm text-gray-500 mb-2">{credentials}</p>
        )}
        <p className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-4">{role}</p>
        <div className="text-gray-600 mb-4 line-clamp-4 flex-grow">
          <PortableText value={bio} />
        </div>
        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="inline-block bg-blue-50 text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
            {specialties.length > 3 && (
              <span className="inline-block text-gray-500 text-xs font-semibold px-3 py-1">
                +{specialties.length - 3} more
              </span>
            )}
          </div>
        )}
        <Link
          href={`/team/${slug}`} // Dynamic link to individual doctor profile
          className="text-[var(--color-action)] font-bold hover:underline self-start"
        >
          Read Full Bio &rarr;
        </Link>
      </div>
    </div>
  );
}

