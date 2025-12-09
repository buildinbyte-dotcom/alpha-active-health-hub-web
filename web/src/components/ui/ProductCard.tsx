import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  doctorNote?: string;
  imageUrl?: string;
  affiliateLink: string;
  price?: string;
}

export default function ProductCard({
  name,
  description,
  doctorNote,
  imageUrl,
  affiliateLink,
  price
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-white p-4 flex items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
          />
        ) : (
          <div className="text-gray-300 font-medium">No Image</div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h4 className="font-bold text-lg text-gray-900 mb-2">{name}</h4>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        
        {doctorNote && (
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <p className="text-xs font-bold text-[var(--color-primary)] mb-1">Doctor's Note:</p>
            <p className="text-sm text-gray-700 italic">"{doctorNote}"</p>
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between">
            {price && <span className="font-bold text-gray-900">{price}</span>}
            <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full text-sm transition-colors"
            >
                View on Amazon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
      </div>
    </div>
  );
}
