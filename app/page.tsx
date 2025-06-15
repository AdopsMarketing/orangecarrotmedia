'use client'
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import WhyItMatters from "./components/WhyItMatters";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AuditForm from "./components/AuditForm";
import HowItWorks from "./components/HowItWorks";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleGetAudit = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onGetAudit={handleGetAudit} />
      <About />
      <Features />
      <WhyItMatters />
      <HowItWorks />
      <CTA onGetAudit={handleGetAudit} />
      <Footer />
      <AuditForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );

}
