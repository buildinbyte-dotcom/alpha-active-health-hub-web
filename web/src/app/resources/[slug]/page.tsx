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
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

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
        {/* Article Header */}
        <div className="bg-blue-50 border-b border-gray-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4">{article.title}</h1>

              {/* Article Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-6">
                <time dateTime={article.publishedAt} className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formattedDate}
                </time>
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-50 text-[var(--color-primary)] text-xs font-medium px-4 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image - Full width for visual impact */}
        {article.imageUrl && (
          <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-5xl mx-auto">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Content - Centered with optimal reading width */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            {/* Custom Prose Styling for PortableText */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[var(--color-primary)] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[var(--color-action)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[var(--color-primary)] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-[var(--color-secondary)] 
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
            ">
              <PortableText value={article.body} />
            </div>

            {/* Divider */}
            <div className="mt-16 mb-8 border-t border-gray-200"></div>

            {/* Back to Resources Link */}
            <div className="text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-[var(--color-action)] font-semibold hover:text-[var(--color-action-hover)] transition-colors text-lg group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Resources
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
