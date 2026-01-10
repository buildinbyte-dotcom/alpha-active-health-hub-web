import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AccessibilityBlock from "@/components/ui/AccessibilityBlock";

export default function ContactPage() {
   return (
      <>
         <Header />
         <main className="bg-white min-h-screen">
            <div className="bg-blue-50 py-16">
               <div className="container mx-auto px-4 text-center">
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">Contact Us</h1>
                  <p className="text-xl text-gray-700">We are here to help. Reach out to book an appointment or ask a question.</p>
               </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div>
                     <h2 className="h2 text-[var(--color-primary)]">Get in Touch</h2>

                     <div className="space-y-6 text-lg text-gray-700 mb-8">
                        <div className="flex items-start gap-4">
                           <div className="bg-blue-100 p-3 rounded-full text-[var(--color-primary)]">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900">Address</h3>
                              <p>Level 3, Suite 306, Alpha Building</p>
                              <p>5 Celebration Drive</p>
                              <p>Bella Vista NSW 2153</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-blue-100 p-3 rounded-full text-[var(--color-primary)]">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900">Phone & Fax</h3>
                              <p>Phone: <a href="tel:0291891008" className="text-[var(--color-action)] hover:underline">(02) 9189 1008</a></p>
                              <p>Fax: (02) 8905 9625</p>
                           </div>
                        </div>
                     </div>

                     <AccessibilityBlock />
                  </div>

                  {/* Form & Map */}
                  <div className="space-y-8">
                     {/* Contact Form */}
                     <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Send us a Message</h3>
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                           <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                           <div>
                              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-200 outline-hidden transition-colors" />
                           </div>

                           <div>
                              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-200 outline-hidden transition-colors" />
                           </div>

                           <div>
                              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                              <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-200 outline-hidden transition-colors" />
                           </div>

                           <div>
                              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-blue-200 outline-hidden transition-colors"></textarea>
                           </div>

                           <button type="submit" className="w-full bg-[var(--color-action)] text-white font-bold py-3 rounded-lg hover:bg-[var(--color-action-hover)] transition-colors focus:outline-hidden focus:ring-4 focus:ring-orange-200">
                              Send Message
                           </button>
                        </form>
                     </div>

                     {/* Interactive Map */}
                     <div className="h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7634937726864!2d150.95129607616468!3d-33.83547207323983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x10c4a9a3d5d3d3e0!2s5%20Celebration%20Dr%2C%20Bella%20Vista%20NSW%202153!5e0!3m2!1sen!2sau!4v1736491000000!5m2!1sen!2sau"
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           title="Alpha Active Health Location - 5 Celebration Drive, Bella Vista NSW 2153"
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
