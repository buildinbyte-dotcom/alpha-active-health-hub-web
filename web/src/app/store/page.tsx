import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import ProductCard from "@/components/ui/ProductCard";

const PRODUCTS = [
  {
    name: "Ergonomic Jar Opener",
    description: "Designed for weak hands, this jar opener creates leverage to open stubborn lids with minimal effort.",
    doctorNote: "Excellent for patients with hand osteoarthritis or RA.",
    affiliateLink: "https://amazon.com.au", // Placeholder
    imageUrl: "" // Placeholder
  },
  {
    name: "Compression Gloves",
    description: "Comfortable cotton-spandex gloves that provide mild compression and warmth to help control joint swelling.",
    doctorNote: "Can be worn at night to reduce morning stiffness.",
    affiliateLink: "https://amazon.com.au", // Placeholder
    imageUrl: "" // Placeholder
  },
  {
    name: "Long-Handled Shoe Horn",
    description: "Extra long metal shoe horn to assist with putting on shoes without bending over.",
    doctorNote: "Recommended for patients with hip or back pain.",
    affiliateLink: "https://amazon.com.au", // Placeholder
    imageUrl: "" // Placeholder
  },
   {
    name: "Heat Pack / Cold Pack",
    description: "Reusable gel pack for hot or cold therapy to soothe aching joints and muscles.",
    doctorNote: "Use cold for acute inflammation and heat for stiff muscles.",
    affiliateLink: "https://amazon.com.au", // Placeholder
    imageUrl: "" // Placeholder
  }
];

export default function StorePage() {
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
              {PRODUCTS.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
