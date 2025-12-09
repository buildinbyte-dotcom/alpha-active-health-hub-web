import Hero from "@/components/ui/Hero";
import InfoSection from "@/components/ui/InfoSection";
import Checklist from "@/components/ui/Checklist";
import ProcessStep from "@/components/ui/ProcessStep";
import BioCard from "@/components/ui/BioCard";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Expert Care for Arthritis & Autoimmune Conditions"
          subtitle="We are a premier destination for specialists and allied health professionals dedicated to optimising health and well-being. Located in Bella Vista."
          ctaText="Book Appointment"
          imageSrc="" // Will add placeholder logic in component
        />

        {/* Self Qualification / When to see us */}
        <InfoSection title="When to see a Rheumatologist" bgColor="white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div>
                <p className="body-lg mb-6">
                  Rheumatologists are specialists in diagnosing and treating arthritis and other musculoskeletal conditions and autoimmune diseases. 
                  You should consider asking your GP for a referral if you experience:
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                     <span className="text-[var(--color-secondary)] font-bold text-xl">✓</span>
                     <span className="text-lg">Persistent joint pain or swelling</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[var(--color-secondary)] font-bold text-xl">✓</span>
                     <span className="text-lg">Morning stiffness lasting more than 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[var(--color-secondary)] font-bold text-xl">✓</span>
                     <span className="text-lg">Unexplained chronic fatigue or fever</span>
                  </div>
                   <div className="flex items-center gap-3">
                     <span className="text-[var(--color-secondary)] font-bold text-xl">✓</span>
                     <span className="text-lg">Abnormal blood test results (ANA, ENA, Rheumatoid Factor)</span>
                  </div>
                </div>
             </div>
             <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-4">Did you know?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Early diagnosis and treatment of conditions like Rheumatoid Arthritis can significantly reduce long-term joint damage.
                </p>
                <Link href="/services" className="text-[var(--color-action)] font-bold hover:underline">
                  View Our Services &rarr;
                </Link>
             </div>
          </div>
        </InfoSection>

        {/* New Patient Journey */}
        <InfoSection title="New Patient Journey" bgColor="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Get Referral"
              description="Obtain a valid referral from your GP. This ensures you receive your Medicare rebate."
            />
             <ProcessStep
              number={2}
              title="Send to Us"
              description="Fax or email your referral to us before your appointment so we can triage your needs."
            />
             <ProcessStep
              number={3}
              title="Book Time"
              description="Call our friendly reception team to schedule an appointment that suits you."
            />
             <ProcessStep
              number={4}
              title="Appointment"
              description="Arrive 10 minutes early with your Medicare card and any relevant X-rays."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/new-patients"
              className="inline-block bg-[var(--color-primary)] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors"
            >
              See Full Guide
            </Link>
          </div>
        </InfoSection>

        {/* Meet the Team Preview */}
        <InfoSection title="Meet Our Specialists" bgColor="white">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <BioCard
                name="Dr Shyamini Gunaratne"
                role="Consultant Rheumatologist"
                bio="Dr. Shyamini is a highly accomplished physician and rheumatologist. As a Staff Specialist at Macarthur Health Service and private practitioner since 2019, she specializes in complex autoimmune conditions."
                slug="dr-shyamini-gunaratne"
                imageUrl="" // Placeholder
              />
              <BioCard
                name="Physiotherapy Team"
                role="Allied Health"
                bio="Our physiotherapy team focuses on rehabilitation, mobility, and pain management, working closely with rheumatologists for holistic care."
                slug="physiotherapy"
                imageUrl="" // Placeholder
              />
           </div>
        </InfoSection>

        {/* Location / Call to Action */}
        <section className="bg-[var(--color-primary)] py-16 text-white text-center">
           <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to prioritize your health?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Located conveniently in Bella Vista with on-site parking and lift access.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[var(--color-action)] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[var(--color-action-hover)] transition-colors shadow-lg"
              >
                Contact Us Today
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
