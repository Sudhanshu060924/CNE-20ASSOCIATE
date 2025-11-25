"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const testimonials = [
  {
    quote:
      "This platform completely transformed the way I learn. Amazing experience!",
    author: "Rohit Sharma",
    role: "Student",
  },
  {
    quote:
      "Very smooth UI and great support. Highly recommended for beginners.",
    author: "Ananya Verma",
    role: "Frontend Developer",
  },
  {
    quote: "The animations and experience feel super modern. Loved it!",
    author: "Karan Patel",
    role: "Designer",
  },
  {
    quote: "Helped me improve my skills faster than any other platform.",
    author: "Meera Singh",
    role: "Software Engineer",
  },
  {
    quote: "The content quality is top-notch. Will definitely recommend.",
    author: "Aditya Raj",
    role: "Student",
  },
  {
    quote: "One of the best learning experiences I ever had.",
    author: "Sneha Das",
    role: "UI/UX Designer",
  },
  {
    quote: "The support team responds super fast. Great community.",
    author: "Harsh Kumar",
    role: "Developer",
  },
  {
    quote: "Very engaging lessons and interactive content.",
    author: "Pooja Pandey",
    role: "Content Creator",
  },
  {
    quote: "A complete game-changer for online learning.",
    author: "Rahul Yadav",
    role: "Full Stack Dev",
  },
  {
    quote: "Loved the smooth animations and modern interface.",
    author: "Simran Kaur",
    role: "Student",
  },
];
export default function TestimonialsScroller() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Row speeds (parallax effect)
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // reverse
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-16 space-y-12">
      <Row items={testimonials} x={x1} />
      <Row items={testimonials} x={x2} />
      <Row items={testimonials} x={x3} />
    </div>
  );
}

// ------------------------------
// Row Component
// ------------------------------
function Row({ items, x }) {
  return (
    <motion.div style={{ x }} className="flex gap-6 w-max">
      {[...items, ...items].map((t, i) => (
        <TestimonialCard
          key={i}
          quote={t.quote}
          author={t.author}
          role={t.role}
        />
      ))}
    </motion.div>
  );
}

// ------------------------------
// Testimonial Card
// ------------------------------
function TestimonialCard({ quote, author, role }) {
  return (
    <div className="min-w-[300px] max-w-[300px] p-6 bg-[#d8e6f6f4] rounded-xl shadow-lg border border-gray-200">
      <p className="text-black italic">“{quote}”</p>
      <h3 className="mt-3 font-semibold">{author}</h3>
      <p className="text-base  text-gray-600">{role}</p>
    </div>
  );
}

// ---------------------------
// Testimonial Card Component
// ---------------------------

