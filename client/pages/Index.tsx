import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight,
    Briefcase,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "@/components/ui/count";
import Scrollprogress from "@/components/ui/scrollprogress";
import TestimonialsScroller from "@/components/TestimonialsScroller";
import Popform from "@/components/Popform";


export default function Index() {
 const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
  const letterAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };


 {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbylkinHbzqVm12OZ_8rABZgVivRD-EtyfYfemZysvJyZLN_P9QroFiVrC8QQyxtUM0o/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong: " + error);
    }
  };


  return (
    <div className="min-h-screen   ">
      <Navbar />

      {/* Hero Section */}
      <Scrollprogress>
        <motion.section
          id="hero"
          className="relative min-h-screen  flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-100 -z-10 animate-pulse"></div>

          {/* Content */}

          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <motion.h1
              animate={{ y: -30, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-8xl font-bold text-primary mb-6 leading-tight"
            >
              {`Build Your Future`.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnim}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}

              <br />

              <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {`Right Here`.split("").map((char, i) => (
                  <motion.span
                    key={`r-${i}`}
                    custom={i + 20} // offset so it starts after first line
                    variants={letterAnim}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <p className="text-lg md:text-2xl text-foreground/70 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Career guidance for students • AI & Tech Workshops • Web &
              Automation Solutions for Companies
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-background border-0 text-lg px-4 py-0 h-12"
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
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-background border-0 text-lg px-4 py-0 h-12"
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
                <p className="text-3xl md:text-4xl font-bold text-secondary">
                  <Counter from={0} to={500} duration={1} />+
                </p>
                <p className="text-sm md:text-base text-foreground/60">
                  Students Guided
                </p>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary">
                  <Counter from={0} to={50} duration={1} />+
                </p>
                <p className="text-sm md:text-base text-foreground/60">
                  Workshops Conducted
                </p>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary">
                  <Counter from={0} to={100} duration={1} />+
                </p>
                <p className="text-sm md:text-base text-foreground/60">
                  Companies Served
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </Scrollprogress>

      {/* About Us Section */}
      <Scrollprogress>
        <motion.section className="      ">
          <div className=" mb-40 md:mb-10 relative h-screen">
            <div
              className=" absolute inset-0    bg-no-repeat bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/about2.svg')" }}
            ></div>
            <div className=" relative  max-w-4xl  mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-3xl md:text-8xl font-bold  text-black mb-3 bg-secondary/10 px-4 py-8 rounded-full">
                  ABOUT US
                </span>
                {/* <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2> */}
                <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed">
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
                    className="bg-background hover:bg-gray-100 transition-all duration-200 ease-in hover:scale-110 rounded-2xl p-8 border border-primary-100"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </Scrollprogress>

      {/* Services Section */}
      <Scrollprogress>
        <motion.section
          id="services"
          className=" section-spacing bg-gradient-primary"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-8xl font-bold text-primary mb-6">
                Our Services
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored for students and businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Career Guidance & Counseling",
                  description:
                    "Personalized career counseling to help students identify their path and build skills for success.",
                },
                {
                  title: "AI & Technology Workshops",
                  description:
                    "Interactive 2-day workshops introducing students to AI, machine learning, and emerging technologies.",
                },
                {
                  title: "Web Development & Support",
                  description:
                    "Full-stack web development and ongoing technical support for your digital presence.",
                },
                {
                  title: "Business Automation Solutions",
                  description:
                    "Streamline operations with intelligent automation and process optimization.",
                },
                {
                  title: "Consulting Services for Companies",
                  description:
                    "Strategic consulting to help businesses leverage technology for growth.",
                },
                {
                  title: "Custom Training Programs",
                  description:
                    "Tailored training modules designed for your team's specific needs.",
                },
              ].map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </Scrollprogress>

      {/* Workshops Section */}
      <Scrollprogress>
        <section id="workshops" className=" ">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className=" text-3xl md:text-8xl font-bold text-primary mb-3 bg-secondary/10 px-4 py-2 rounded-full">
                LEARNING PROGRAMS
              </span>
              <h2 className="text-xl md:text-3xl  font-bold text-primary mb-6">
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
                      For grades 1-12, our comprehensive workshops cover AI
                      fundamentals, machine learning basics, and real-world
                      applications.
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <p className="text-foreground/80">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white border-0 text-base px-8 py-6 h-auto"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              {/* Popup Modal */}
              <Popform isOpen={isOpen} setIsOpen={setIsOpen} />

              {/* Testimonials */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-primary-100">
                  <p className="text-foreground/80 mb-4">
                    "The workshop transformed my understanding of AI. The
                    instructors were excellent and the hands-on projects were
                    super practical!"
                  </p>
                  <p className="font-semibold text-primary">Ananya Singh</p>
                  <p className="text-sm text-foreground/60">Grade 10 Student</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-200 rounded-2xl p-8 border border-primary-100">
                  <p className="text-foreground/80 mb-4">
                    "Highly recommended! My daughter's confidence in STEM
                    subjects increased significantly after the workshop."
                  </p>
                  <p className="font-semibold text-primary">Rajesh Kumar</p>
                  <p className="text-sm text-foreground/60">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Scrollprogress>

      {/* For Companies Section */}
      <Scrollprogress>
        <section id="companies" className=" section-spacing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-3xl md:text-8xl font-bold text-black mb-3 bg-secondary/10 px-4 py-2 rounded-full">
                FOR ENTERPRISES
              </span>
              <h2 className="text-xl md:text-3xl font-bold text-black mb-6">
                Solutions for Companies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 w-[100%] items-center ">
              {/* Content */}
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Transform Your Business with Technology
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      We help organizations harness the power of emerging
                      technologies to drive innovation, improve efficiency, and
                      stay competitive.
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
                        <p className="text-sm text-foreground/70">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white border-0 text-lg px-8 py-2 h-16"
                  >
                    Talk to Our Experts
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="order-1 md:order-2">
                <img
                  src="/bs.svg"
                  alt="Company Solutions"
                  className="w-[700px] "
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-8">
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
      </Scrollprogress>

      {/* Testimonials Section */}
      <Scrollprogress>
        <section id="testimonials" className="section-spacing  ">
          <div className="">
            <div className="text-center mb-5">
              <span className="inline-block text-3xl md:text-8xl font-bold text-black mb-3 bg-secondary/10 px-4 py-2 rounded-full">
                TESTIMONIALS
              </span>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-2">
                What Our Clients Say
              </h2>
            </div>
            <TestimonialsScroller />
          </div>
        </section>
      </Scrollprogress>
      <Scrollprogress>
        {/* Contact Section */}
        <section id="contact" className="">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="text-center mb-12">
              <span className="inline-block text-3xl md:text-8xl font-bold text-black mb-3 px-4 py-2 rounded-full">
                GET IN TOUCH
              </span>
              <h2 className="text-xl md:text-3xl  font-bold text-primary mb-6">
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
                  <label className="block text-lg font-semibold text-primary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-primary mb-2">
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
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white border-0 text-lg py-6 h-16"
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
                    Connect with us through multiple channels for your
                    convenience.
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
      </Scrollprogress>

      {/* Footer */}
      <Footer />
    </div>
  );
}}
