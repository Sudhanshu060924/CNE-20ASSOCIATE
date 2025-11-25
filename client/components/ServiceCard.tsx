import { ReactNode } from "react";

interface ServiceCardProps {

  title: string;
  description: string;
}

export default function ServiceCard({
  
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-primary-100">
     

      {/* Content */}
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-foreground/70 text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-8 transition-all duration-300"></div>
    </div>
  );
}
