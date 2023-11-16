"use client";

import React from "react";
import Sidebar from "../components/common/sidebar";
import PageWrapper from "./page-wrapper";
import Footer from "../components/common/footer";

export default function Page({ children }: { children: React.ReactNode }) {


  return (
    <div>
      <div className="flex">
        <Sidebar />
        <PageWrapper>{children}</PageWrapper>
      </div>
      <Footer />
    </div>
  );
}
