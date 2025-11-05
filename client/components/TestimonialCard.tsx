import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="border-t border-primary-100 pt-4">
        <p className="font-semibold text-primary text-sm">{author}</p>
        <p className="text-foreground/60 text-xs">{role}</p>
      </div>
    </div>
  );
}
