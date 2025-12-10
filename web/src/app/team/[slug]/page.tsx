import { sanityClient } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import type { Metadata } from 'next';

interface Doctor {
  _id: string;
  name: string;
  role: string;
  credentials?: string;
  bio: any[]; // Portable Text
  imageUrl: string;
  slug: string;
  specialties?: string[];
}

async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const query = `
    *[_type == "doctor" && slug.current == $slug][0]{
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
  return sanityClient.fetch(query, { slug });
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: 'Doctor Not Found | Alpha Active Health',
    };
  }

  // Extract a plain text excerpt from Portable Text for the description
  const bioExcerpt = doctor.bio
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((span: any) => span.text).join('');
      }
      return '';
    })
    .join(' ')
    .substring(0, 150) + '...'; // Truncate for description

  return {
    title: `${doctor.name} - ${doctor.role} | Alpha Active Health`,
    description: bioExcerpt,
  };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 text-lg">Doctor not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-[var(--color-background)] min-h-screen">
        <div className="bg-white border-b border-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1">{doctor.name}</h1>
            {doctor.credentials && (
              <p className="text-lg text-gray-600 mt-2">{doctor.credentials}</p>
            )}
            <p className="body-lg max-w-2xl mx-auto mt-2">{doctor.role}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            {doctor.imageUrl && (
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                width={400}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            )}
            {doctor.specialties && doctor.specialties.length > 0 && (
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-serif text-lg font-bold text-[var(--color-primary)] mb-4">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:w-2/3 prose lg:prose-xl">
            <PortableText value={doctor.bio} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
