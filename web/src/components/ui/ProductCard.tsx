'use client';

import { useState } from 'react';
import Image from "next/image";
import ProductModal from './ProductModal';

interface ProductCardProps {
  name: string;
  shortDescription?: string;
  description: any[];
  doctorNote?: string;
  imageUrl?: string;
  affiliateLink: string;
  recommendedBy?: string;
}

export default function ProductCard({
  name,
  shortDescription,
  description,
  doctorNote,
  imageUrl,
  affiliateLink,
  recommendedBy
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-gray-300 font-medium">No Image</div>
          )}

          {/* Recommended Badge */}
          {recommendedBy && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 border border-blue-100">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Recommended</span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h4 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{name}</h4>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">
            {shortDescription || "High-quality wellness product recommended by our specialists."}
          </p>

          {/* Buttons */}
          <div className="mt-auto space-y-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group/btn"
            >
              <span>View Details</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 px-4 rounded-lg transition-all hover:shadow-md flex items-center justify-center gap-2"
            >
              <span>Buy on Amazon</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ name, description, doctorNote, imageUrl: imageUrl || '', affiliateLink, recommendedBy }}
      />
    </>
  );
}
