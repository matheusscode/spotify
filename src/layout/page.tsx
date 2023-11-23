"use client";

import React from "react";
import Sidebar from "../components/common/sidebar";
import PageWrapper from "./page-wrapper";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <PageWrapper>{children}</PageWrapper>
      </div>
      <div className="sticky bottom-0">
        <Footer />
        <Navbar />
      </div>
    </div>
  );
}
