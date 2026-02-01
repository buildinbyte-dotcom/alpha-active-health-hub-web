import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ProductCard from "@/components/ui/ProductCard";
import { sanityClient } from '@/lib/sanity';
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  shortDescription?: string;
  description: any[]; // PortableText array
  doctorNote?: string;
  affiliateLink: string;
  imageUrl: string;
  recommendedBy?: string;
}

async function getProducts(): Promise<Product[]> {
  const query = `
    *[_type == "product"]{
      _id,
      name,
      shortDescription,
      description,
      doctorNote,
      affiliateLink,
      recommendedBy,
      "imageUrl": image.asset->url
    }
  `;
  return sanityClient.fetch(query);
}

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function StorePage() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">Wellness Recommendations</h1>
            <p className="text-xl text-gray-700">Daily living aids and tools trusted by our specialists.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <DisclaimerBanner />

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-12 text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <svg className="w-20 h-20 mx-auto text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="h3 mb-4 text-[var(--color-primary)]">Coming Soon!</h2>
              <p className="body-lg text-gray-700 mb-6">
                We're curating a selection of wellness products and health resources recommended by our specialists.
              </p>
              <p className="text-gray-600 mb-8">
                In the meantime, please consult with your healthcare provider about products that may benefit your specific condition.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[var(--color-action)] text-white font-bold py-3 px-8 rounded-full hover:bg-[var(--color-action-hover)] transition-colors"
              >
                Contact Us for Recommendations
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
