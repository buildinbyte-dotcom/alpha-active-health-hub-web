import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string; // Optional, can use a default
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  ctaText = "Book Appointment",
  ctaLink = "/contact",
}: HeroProps) {
  return (
    <section className="relative bg-[var(--color-background)] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="h1">{title}</h1>
            <p className="body-lg mb-8 text-gray-700">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaLink}
                className="inline-flex justify-center items-center bg-[var(--color-action)] hover:bg-[var(--color-action-hover)] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors focus:outline-hidden focus:ring-4 focus:ring-orange-200"
              >
                {ctaText}
              </Link>
              <Link
                href="/new-patients"
                className="inline-flex justify-center items-center bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition-colors focus:outline-hidden focus:ring-4 focus:ring-blue-100"
              >
                New Patient Info
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Senior patient enjoying active lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              // Placeholder if no image provided
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <span className="text-gray-400 font-medium">Hero Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
