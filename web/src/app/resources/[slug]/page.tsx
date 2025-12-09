import { sanityClient } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from 'next/link';
import type { Metadata } from 'next';

interface Article {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  body: any[]; // Portable Text
  imageUrl?: string;
  tags?: string[];
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = `
    *[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      "imageUrl": mainImage.asset->url,
      tags
    }
  `;
  return sanityClient.fetch(query, { slug });
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Alpha Active Health Resources',
    };
  }

  // Extract a plain text excerpt from Portable Text for the description
  const excerpt = article.body
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((span: any) => span.text).join('');
      }
      return '';
    })
    .join(' ')
    .substring(0, 150) + '...'; // Truncate for description

  return {
    title: `${article.title} | Alpha Active Health Resources`,
    description: excerpt,
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 text-lg">Article not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      <main className="bg-[var(--color-background)] min-h-screen">
        <div className="bg-white border-b border-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1">{article.title}</h1>
            <p className="body-lg max-w-2xl mx-auto text-gray-500">Published on {formattedDate}</p>
            {article.tags && article.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {article.tags.map(tag => (
                        <span key={tag} className="bg-[var(--color-secondary)] text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          {article.imageUrl && (
            <div className="relative w-full h-96 mb-8 rounded-lg shadow-md overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="prose lg:prose-xl mx-auto">
            <PortableText value={article.body} />
          </div>
          <div className="mt-12 text-center">
              <Link href="/resources" className="text-[var(--color-action)] font-bold hover:underline text-lg">
                  &larr; Back to Resources
              </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
