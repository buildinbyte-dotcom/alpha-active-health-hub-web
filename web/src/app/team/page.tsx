import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BioCard from "@/components/ui/BioCard";

// This would typically fetch from Sanity
const TEAM_MEMBERS = [
  {
    name: "Dr Shyamini Gunaratne",
    role: "Consultant Rheumatologist",
    bio: "Dr. Shyamini is a highly accomplished physician and rheumatologist, integrating clinical expertise, academic research, and a passion for education. As a Staff Specialist at Macarthur Health Service and private practitioner since 2019, she has been instrumental in managing complex autoimmune and musculoskeletal conditions.",
    imageUrl: "", // Placeholder
    slug: "dr-shyamini-gunaratne"
  },
  {
    name: "Physiotherapy Team",
    role: "Allied Health Professionals",
    bio: "Our physiotherapy team is dedicated to restoring movement and function. They work closely with the rheumatology team to provide integrated care plans for conditions such as arthritis, back pain, and sports injuries.",
    imageUrl: "", // Placeholder
    slug: "physiotherapy"
  }
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-background)] min-h-screen">
        <div className="bg-white border-b border-gray-100 py-16">
           <div className="container mx-auto px-4 text-center">
              <h1 className="h1">Meet Our Specialists</h1>
              <p className="body-lg max-w-2xl mx-auto">
                A multidisciplinary team dedicated to your musculoskeletal health and overall well-being.
              </p>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <BioCard key={member.slug} {...member} />
              ))}
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
