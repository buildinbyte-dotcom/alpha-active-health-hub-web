import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react';

interface BioCardProps {
  name: string;
  role: string;
  bio: any[]; // Portable Text
  imageUrl?: string;
  slug: string; // For linking to full profile
}

export default function BioCard({ name, role, bio, imageUrl, slug }: BioCardProps) {
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
        <p className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-4">{role}</p>
        <div className="text-gray-600 mb-6 line-clamp-4 flex-grow">
          <PortableText value={bio} />
        </div>
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

