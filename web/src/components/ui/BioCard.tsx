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

export default function BioCard({ name, role, credentials, bio, imageUrl, slug, specialties }: BioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 w-full bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
            Photo Placeholder
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] mb-1">{name}</h3>
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

