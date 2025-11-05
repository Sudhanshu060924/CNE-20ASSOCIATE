import { useState } from "react";
import { ArrowRight, BookOpen, Zap, Code, Cog, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Empowering Minds,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Transforming Businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Career guidance for students • AI & Tech Workshops • Web & Automation Solutions for Companies
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base px-8 py-6 h-auto"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Career Guidance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="text-base px-8 py-6 h-auto border-2 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => {
                document.getElementById("companies")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Request Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="animate-slide-up">
              <p className="text-3xl md:text-4xl font-bold text-secondary">500+</p>
              <p className="text-sm md:text-base text-foreground/60">Students Guided</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-3xl md:text-4xl font-bold text-accent">50+</p>
              <p className="text-sm md:text-base text-foreground/60">Workshops Conducted</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-3xl md:text-4xl font-bold text-secondary">100+</p>
              <p className="text-sm md:text-base text-foreground/60">Companies Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              CNE Associate is a dynamic service-based company dedicated to
              bridging the gap between education and industry. We empower
              students with career guidance, inspire them through AI and
              technology workshops, and provide innovative solutions to
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                content:
                  "To provide transformative career guidance and technology solutions that empower individuals and organizations.",
              },
              {
                title: "Our Vision",
                content:
                  "To be the leading bridge between emerging technologies and real-world applications.",
              },
              {
                title: "Our Values",
                content:
                  "Innovation, integrity, and impact drive everything we do.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-primary-100"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-spacing bg-gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions tailored for students and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Career Guidance & Counseling",
                description:
                  "Personalized career counseling to help students identify their path and build skills for success.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "AI & Technology Workshops",
                description:
                  "Interactive 2-day workshops introducing students to AI, machine learning, and emerging technologies.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Web Development & Support",
                description:
                  "Full-stack web development and ongoing technical support for your digital presence.",
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Business Automation Solutions",
                description:
                  "Streamline operations with intelligent automation and process optimization.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Consulting Services for Companies",
                description:
                  "Strategic consulting to help businesses leverage technology for growth.",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Custom Training Programs",
                description:
                  "Tailored training modules designed for your team's specific needs.",
              },
            ].map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              LEARNING PROGRAMS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              AI & Technology Workshops
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Workshop Info */}
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Intensive 2-Day Workshop
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    For grades 1-12, our comprehensive workshops cover AI fundamentals, machine learning basics, and real-world applications.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Introduction to Artificial Intelligence",
                    "Machine Learning Basics",
                    "Hands-on Coding Sessions",
                    "Real-world Project Work",
                    "Certification & Mentorship",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base px-8 py-6 h-auto">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
                <p className="text-foreground/80 mb-4">
                  "The workshop transformed my understanding of AI. The instructors were excellent and the hands-on projects were super practical!"
                </p>
                <p className="font-semibold text-primary">Ananya Singh</p>
                <p className="text-sm text-foreground/60">Grade 10 Student</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-primary-100">
                <p className="text-foreground/80 mb-4">
                  "Highly recommended! My daughter's confidence in STEM subjects increased significantly after the workshop."
                </p>
                <p className="font-semibold text-primary">Rajesh Kumar</p>
                <p className="text-sm text-foreground/60">Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="companies" className="section-spacing bg-gradient-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              FOR ENTERPRISES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Solutions for Companies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Transform Your Business with Technology
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We help organizations harness the power of emerging technologies to drive innovation, improve efficiency, and stay competitive.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Web Development",
                      desc: "Modern, scalable web solutions tailored to your needs",
                    },
                    {
                      title: "Automation",
                      desc: "Streamline operations with intelligent automation",
                    },
                    {
                      title: "AI Integration",
                      desc: "Implement AI solutions for smarter business decisions",
                    },
                    {
                      title: "Consulting",
                      desc: "Expert guidance on digital transformation strategies",
                    },
                  ].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-primary mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-foreground/70">{service.desc}</p>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base px-8 py-6 h-auto">
                  Talk to Our Experts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl p-8 border border-primary-100 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Briefcase className="w-24 h-24 mx-auto text-secondary/30 mb-4" />
                  <p className="text-foreground/40 font-semibold">
                    Business Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: "100+", label: "Companies Partnered" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "5yr+", label: "Industry Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "CNE Associate helped me discover my passion for technology. The career guidance was invaluable!",
                author: "Priya Sharma",
                role: "Student, Grade 12",
              },
              {
                quote:
                  "The workshop was engaging, informative, and perfectly designed for young learners. Highly recommended!",
                author: "Vikram Patel",
                role: "Parent & Educator",
              },
              {
                quote:
                  "Their consulting services helped us automate 40% of our operations. Professional and results-driven.",
                author: "Neha Gupta",
                role: "CEO, Tech Startup",
              },
              {
                quote:
                  "Best career guidance I could have received. They really understood my strengths and goals.",
                author: "Arjun Singh",
                role: "Student, Grade 11",
              },
              {
                quote:
                  "The web development team delivered exactly what we needed, on time and within budget.",
                author: "Rajiv Kumar",
                role: "Founder, E-commerce Company",
              },
              {
                quote:
                  "Exceptional AI workshop! The practical approach made complex concepts easy to understand.",
                author: "Meera Nair",
                role: "Student, Grade 10",
              },
            ].map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-gradient-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-foreground/70">
              Have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 focus:border-secondary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 focus:border-secondary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 focus:border-secondary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base py-6 h-auto"
              >
                Send Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Other Ways to Reach Us
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Connect with us through multiple channels for your convenience.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@cneassociate.com",
                    href: "mailto:info@cneassociate.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 123 456 789",
                    href: "tel:+91123456789",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "India",
                    href: "#",
                  },
                ].map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={idx}
                      href={contact.href}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-primary">
                          {contact.label}
                        </p>
                        <p className="text-foreground/70">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary">
                <p className="text-sm font-semibold text-primary mb-1">
                  Response Time
                </p>
                <p className="text-foreground/70 text-sm">
                  We typically respond to inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
