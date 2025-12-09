import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b border-gray-100 py-16">
           <div className="container mx-auto px-4 text-center">
              <h1 className="h1">Health Resources</h1>
              <p className="body-lg max-w-2xl mx-auto">
                Educational articles, guides, and information to help you manage your health condition.
              </p>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12">
           <DisclaimerBanner />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Articles */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                 <article key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200 w-full relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                           Article Image {i}
                        </div>
                    </div>
                    <div className="p-6">
                       <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide mb-2 block">Patient Guide</span>
                       <h2 className="text-xl font-bold text-gray-900 mb-3">Understanding Rheumatoid Arthritis: A Beginner's Guide</h2>
                       <p className="text-gray-600 mb-4 line-clamp-3">
                          Rheumatoid arthritis is an autoimmune disease that causes joint pain and damage throughout your body. Learn about early signs and treatments.
                       </p>
                       <a href="#" className="text-[var(--color-action)] font-bold hover:underline">Read Article &rarr;</a>
                    </div>
                 </article>
              ))}
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
