import React from "react";

interface TooltipProps {
  content?: string;
  children: React.ReactNode;
  className?: string;
  classContent?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, className, classContent }) => {
  return (
    <div className="group relative flex justify-center w-auto">
      <div className={`${className} flex justify-center items-center border-0 bg-transparent cursor-pointer outline-none ring-0`}>
        {children}
      </div>
      <span className={`${classContent} absolute bottom-8 scale-0 transition-all w-auto rounded bg-neutral-800 p-2 text-xs font-medium text-white group-hover:scale-100 whitespace-nowrap`}>
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
