import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-primary-100">
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
        <div className="text-3xl text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
          {icon}
        </div>
      </div>

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
