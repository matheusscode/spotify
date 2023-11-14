import React from "react";

interface BadgeProps {
  content: string;
}

const Badge: React.FC<BadgeProps> = ({ content }) => {
  return (
    <div className="select-none hover:bg-neutral-700 transition-all cursor-pointer p-1 w-auto px-2 rounded-full bg-neutral-800 text-medium text-sm text-center">
      {" "}
      {content}
    </div>
  );
};

export default Badge;
