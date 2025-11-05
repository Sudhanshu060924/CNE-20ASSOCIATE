import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center text-primary font-bold text-lg">
                CNE
              </div>
              <span className="ml-3 font-bold text-lg">CNE Associate</span>
            </div>
            <p className="text-white/80 text-sm">
              Empowering minds and transforming businesses through career guidance, AI workshops, and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "Services", id: "services" },
                { label: "Workshops", id: "workshops" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Career Guidance",
                "AI Workshops",
                "Web Development",
                "Automation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@cneassociate.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@cneassociate.com</span>
              </a>
              <a
                href="tel:+91123456789"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 123 456 789</span>
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} CNE Associate. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Facebook, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
