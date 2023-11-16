import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  iconLeft,
  iconRight,
  className,
  ...rest
}) => {
  return (
    <div
      className={`flex items-center textinput border-none outline-none rounded-full bg-neutral-900 !text-neutral-400 font-light text-sm p-2 px-4 w-full text-[14px] ${className}`}
    >
      {iconLeft && <span className="px-1">{iconLeft}</span>}
      <input
        type="text"
        className="w-full outline-none border-none px-1 bg-transparent rounded-none "
        {...rest}
      />
      {iconRight && <span className="px-1">{iconRight}</span>}
    </div>
  );
};

export default Input;
