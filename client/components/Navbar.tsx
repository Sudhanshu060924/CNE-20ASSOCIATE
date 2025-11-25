import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Workshops", id: "workshops" },
    { label: "For Companies", id: "companies" },
    
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky  md:h-[10vh] top-0 z-50 w-full  backdrop-blur-md border-b border-primary-200 shadow-sm">
      <div className="max-w-8xl   px-4 md:px-2 lg:px-8">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex  items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <div className=" flex  md:ml-10  items-center">
            <img src="/logo.svg" alt="Logo" className="w-25 h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-base font-[poppins] font-semibold text-primary hover:text-secondary transition-colors rounded-md "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              className=" md:mr-10 bg-[#146dd2] hover:bg-[#012381] text-white border-0"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary hover:bg-primary-50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary-200">
            <div className="space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:text-secondary "
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                className="w-full mt-4  bg-[#146dd2] hover:bg-[#012381] text-white border-0"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
