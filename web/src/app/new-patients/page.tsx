import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProcessStep from "@/components/ui/ProcessStep";
import Checklist from "@/components/ui/Checklist";

export default function NewPatientsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1">New Patient Information</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Welcome to Alpha Active Health. We aim to make your first visit as smooth and comfortable as possible.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* The Journey */}
            <section>
              <h2 className="h2 text-center mb-10">Your Journey With Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <ProcessStep
                    number={1}
                    title="Referral"
                    description="Obtain a valid referral from your General Practitioner (GP). This is essential for claiming your Medicare rebate."
                 />
                 <ProcessStep
                    number={2}
                    title="Booking"
                    description="Contact our reception team to book your initial consultation. Please mention if you have urgent concerns."
                 />
                 <ProcessStep
                    number={3}
                    title="Preparation"
                    description="Gather your medical history, current medications list, and any relevant test results."
                 />
                 <ProcessStep
                    number={4}
                    title="Consultation"
                    description="Meet with Dr. Shyamini or our team for a comprehensive assessment and treatment plan."
                 />
              </div>
            </section>

            {/* What to Bring Checklist */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <Checklist 
                  title="What to bring"
                  items={[
                     "Valid referral letter from your GP",
                     "Medicare card and Pension card (if applicable)",
                     "List of current medications",
                     "Previous X-rays, scans, or blood test results",
                     "Comfortable clothing if undergoing physical examination"
                  ]}
               />
               
               <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="h3 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                     <div>
                        <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">Do you bulk bill?</h4>
                        <p className="text-gray-700">We are a private billing practice. Payment is required at the time of consultation. We can process your Medicare rebate on the spot.</p>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">Is there parking?</h4>
                        <p className="text-gray-700">Yes, visitor parking is available on-site, and there is ample street parking nearby.</p>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">Do I need a referral for Physiotherapy?</h4>
                        <p className="text-gray-700">A referral is not strictly required for physiotherapy unless you are claiming through DVA, Medicare (EPC), or Workers Compensation.</p>
                     </div>
                  </div>
               </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
