import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BioCard from "@/components/ui/BioCard";

import { sanityClient } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

interface Doctor {
  _id: string;
  name: string;
  role: string;
  credentials?: string;
  bio: any[];
  imageUrl: string;
  slug: string;
  specialties?: string[];
}

async function getDoctors(): Promise<Doctor[]> {
  const query = `
    *[_type == "doctor"]{
      _id,
      name,
      role,
      credentials,
      bio,
      "imageUrl": image.asset->url,
      "slug": slug.current,
      specialties
    }
  `;
  return sanityClient.fetch(query);
}

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function TeamPage() {
  const teamMembers = await getDoctors();
  return (
    <>
      <Header />
      <main className="bg-[var(--color-background)] min-h-screen">
        <div className="bg-blue-50 border-b border-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1">Meet Our Specialists</h1>
            <p className="body-lg max-w-2xl mx-auto">
              A multidisciplinary team dedicated to your musculoskeletal health and overall well-being.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            {teamMembers.map((member) => (
              <BioCard key={member.slug} {...member} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
