'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        name: string;
        description: any[];
        doctorNote?: string;
        imageUrl: string;
        affiliateLink: string;
        recommendedBy?: string;
    };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const portableTextComponents = {
        block: {
            h3: ({ children }: any) => (
                <h3 className="text-xl font-bold text-[var(--color-primary)] mt-6 mb-3 first:mt-0">{children}</h3>
            ),
            h4: ({ children }: any) => (
                <h4 className="text-lg font-bold text-gray-900 mt-5 mb-2">{children}</h4>
            ),
            normal: ({ children }: any) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
            ),
        },
        list: {
            bullet: ({ children }: any) => (
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-gray-700">{children}</ul>
            ),
            number: ({ children }: any) => (
                <ol className="list-decimal list-inside mb-6 space-y-2 ml-4 text-gray-700">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }: any) => (
                <li className="leading-relaxed">{children}</li>
            ),
            number: ({ children }: any) => (
                <li className="leading-relaxed">{children}</li>
            ),
        },
        marks: {
            strong: ({ children }: any) => (
                <strong className="font-bold text-gray-900">{children}</strong>
            ),
            em: ({ children }: any) => (
                <em className="italic">{children}</em>
            ),
        },
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container - Click outside closes */}
            <div
                className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Modal Content - Stop propagation so clicking inside doesn't close */}
                <div
                    className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scale-in relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button - Positioned inside modal */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 text-gray-600 hover:text-gray-900 transition-all shadow-sm hover:shadow-md"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10 overflow-y-auto max-h-[90vh]">
                        {/* Image Side */}
                        <div className="relative h-80 md:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-contain p-6"
                                priority
                            />
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col">
                            <div className="flex-grow">
                                <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pr-8">
                                    {product.name}
                                </h2>

                                {product.recommendedBy && (
                                    <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Recommended by {product.recommendedBy}
                                    </div>
                                )}

                                {/* Rich Description */}
                                <div className="prose max-w-none mb-6">
                                    <PortableText value={product.description} components={portableTextComponents} />
                                </div>

                                {/* Doctor's Note */}
                                {product.doctorNote && (
                                    <div className="bg-blue-50 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                            </svg>
                                            <div>
                                                <p className="font-bold text-[var(--color-primary)] mb-1 text-sm">Doctor's Note:</p>
                                                <p className="text-gray-700 italic leading-relaxed">"{product.doctorNote}"</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA Button - Fixed at bottom */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <a
                                    href={product.affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-xl text-center transition-all hover:shadow-lg"
                                >
                                    <span>View on Amazon</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
        </>
    );
}
