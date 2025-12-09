import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ProductCard from "@/components/ui/ProductCard";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ProductCard from "@/components/ui/ProductCard";
import { sanityClient } from '@/lib/sanity';

interface Product {
  _id: string;
  name: string;
  description: string;
  doctorNote: string;
  affiliateLink: string;
  imageUrl: string;
}

async function getProducts(): Promise<Product[]> {
  const query = `
    *[_type == "product"]{
      _id,
      name,
      description,
      doctorNote,
      affiliateLink,
      "imageUrl": image.asset->url
    }
  `;
  return sanityClient.fetch(query);
}

export default async function StorePage() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-[var(--color-primary)] text-white py-16">
           <div className="container mx-auto px-4 text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Wellness Recommendations</h1>
              <p className="text-xl opacity-90">Daily living aids and tools trusted by our specialists.</p>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12">
           <DisclaimerBanner />
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
