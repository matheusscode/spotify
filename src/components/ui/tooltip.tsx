import React from "react";

interface TooltipProps {
  content?: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
  return (
    <div className="group relative flex justify-center w-auto">
      <button className={`${className} border-0 bg-transparent outline-none ring-0`}>
        {children}
      </button>
      <span className="absolute bottom-10 scale-0 transition-all w-auto rounded bg-neutral-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
