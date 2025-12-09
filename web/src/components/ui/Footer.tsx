import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Address */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Alpha Active Health</h2>
            <address className="not-italic opacity-90 leading-relaxed mb-4">
              Level 3, Suite 306, Alpha Building<br />
              5 Celebration Drive<br />
              Bella Vista NSW 2153
            </address>
            <div className="flex flex-col gap-1 opacity-90">
              <a href="tel:0291891008" className="hover:underline">Phone: (02) 9189 1008</a>
              <span>Fax: (02) 8905 9625</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 opacity-90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/new-patients" className="hover:underline">New Patients</Link></li>
              <li><Link href="/team" className="hover:underline">Our Team</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 opacity-90">
              <li>Rheumatology</li>
              <li>Physiotherapy</li>
              <li>Autoimmune Conditions</li>
              <li>Musculoskeletal Care</li>
              <li>Holistic Therapy</li>
            </ul>
          </div>

          {/* Emergency Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Important</h3>
            <p className="opacity-90 mb-4 leading-relaxed">
              If you are experiencing a medical emergency, please dial <strong>000</strong> immediately.
            </p>
            <p className="opacity-90 text-sm">
              Our practice is wheelchair accessible with lifts available from the parking level.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Alpha Active Health Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
