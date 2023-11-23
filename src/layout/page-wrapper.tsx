"use client";

import React from "react";
import Header from "../components/common/header";

interface IPageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: IPageWrapperProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const scrolled = wrapperRef.current.scrollTop > 0;
        setIsScrolled(scrolled);
      }
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`flex flex-col w-full h-screen transition-all overflow-hidden scrollbar max-[600px]:scroll-hidden bg-gradient-to-b bg-no-repeat ${
        isScrolled
          ? "from-neutral-950   to-neutral-950"
          : "from-neutral-800  via-neutral-950  to-neutral-950"
      } max-[1200px]:border-none   border-l-[0.4rem] border-solid border-neutral-950 overflow-y-scroll`}
    >
      <div className="flex flex-col flex-1 w-full ">
        <Header scrolling={isScrolled} />
        {children}
      </div>
    </div>
  );
}
