import { ArrowRight } from "lucide-react";

export function InteractiveHoverButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`group relative w-auto cursor-pointer overflow-hidden rounded-full 
      border border-[#00ff66] 
      px-4 py-1.5 sm:px-6 sm:py-2
      text-sm sm:text-base
      font-semibold transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Default View */}
      <div className="flex items-center gap-2 text-white transition-all duration-300">
        {/* Dot */}
        <div className="h-2 w-2 rounded-full bg-[#00ff66] transition-all duration-300 
        group-hover:scale-[80] sm:group-hover:scale-[100] group-hover:opacity-20"></div>

        {/* Text Slide Out */}
        <span className="inline-block transition-all duration-300 
        group-hover:translate-x-10 sm:group-hover:translate-x-12 
        group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Hover View */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full 
      translate-x-10 sm:translate-x-12
      items-center justify-center gap-2 
      opacity-0 text-black 
      text-sm sm:text-base
      transition-all duration-300 
      group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight size={16} />
      </div>
    </button>
  );
}