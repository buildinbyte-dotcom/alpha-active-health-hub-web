import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DisclaimerBanner from "@/components/ui/DisclaimerBanner";
import { sanityClient } from '@/lib/sanity';
import Image from "next/image";
import Link from "next/link";

interface Article {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  imageUrl?: string;
  tags?: string[];
}

async function getArticles(): Promise<Article[]> {
  const query = `
    *[_type == "article"]|order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "excerpt": array::join(body[0].children[0].text, ""), // Get first paragraph for excerpt
      "imageUrl": mainImage.asset->url, // Assuming a mainImage field
      tags // Assuming tags are simple strings
    }
  `;
  return sanityClient.fetch(query);
}

export default async function ResourcesPage() {
  const articles = await getArticles();
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-blue-50 border-b border-gray-100 py-16">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <h1 className="h1">Health Resources</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Educational articles, guides, and information to help you manage your health condition.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <DisclaimerBanner />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 w-full relative">
                  {article.imageUrl && (
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  {!article.imageUrl && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {article.tags && article.tags.length > 0 && (
                    <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide mb-2 block">{article.tags[0]}</span>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link href={`/resources/${article.slug}`} className="text-[var(--color-action)] font-bold hover:underline">Read Article &rarr;</Link>
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
