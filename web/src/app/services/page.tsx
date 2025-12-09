import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const SERVICES = [
  {
    title: "Rheumatology",
    description: "Diagnosis and management of autoimmune and inflammatory conditions affecting joints, muscles, and bones.",
    items: ["Rheumatoid Arthritis", "Psoriatic Arthritis", "Ankylosing Spondylitis", "Gout", "Lupus (SLE)"]
  },
  {
    title: "Musculoskeletal Medicine",
    description: "Non-surgical management of pain and injuries affecting the musculoskeletal system.",
    items: ["Osteoarthritis", "Back Pain", "Tendinopathies", "Fibromyalgia", "Soft Tissue Injuries"]
  },
  {
    title: "Physiotherapy",
    description: "Rehabilitation and physical therapies to restore movement and function.",
    items: ["Post-operative Rehabilitation", "Manual Therapy", "Exercise Prescription", "Hydrotherapy Guidance", "Falls Prevention"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-[var(--color-primary)] text-white py-16">
           <div className="container mx-auto px-4 text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl opacity-90">Comprehensive care for joint, muscle, and autoimmune health.</p>
           </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
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
