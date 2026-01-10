import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

const SERVICES = [
  {
    title: "Rheumatology",
    description: "Diagnosis and management of autoimmune and inflammatory conditions affecting joints, muscles, and bones.",
    items: ["Rheumatoid Arthritis", "Psoriatic Arthritis", "Ankylosing Spondylitis", "Gout", "Lupus (SLE)"],
    icon: "/icon-rheumatology.png"
  },
  {
    title: "Musculoskeletal Medicine",
    description: "Non-surgical management of pain and injuries affecting the musculoskeletal system.",
    items: ["Osteoarthritis", "Back Pain", "Tendinopathies", "Fibromyalgia", "Soft Tissue Injuries"],
    icon: "/icon-musculoskeletal.png"
  },
  {
    title: "Physiotherapy",
    description: "Rehabilitation and physical therapies to restore movement and function.",
    items: ["Post-operative Rehabilitation", "Manual Therapy", "Exercise Prescription", "Hydrotherapy Guidance", "Falls Prevention"],
    icon: "/icon-physiotherapy.png"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">Our Services</h1>
            <p className="text-xl text-gray-700">Comprehensive care for joint, muscle, and autoimmune health.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-6 relative">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
