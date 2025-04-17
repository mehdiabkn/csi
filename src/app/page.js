"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientLogos from "./components/ClientLogos";
import HeroSection from "./components/Hero";
import ContactSection from "./components/Contact";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ 
      }}>
        <main style={{
          minHeight: "100vh",
          backgroundColor: "#f4f7fa",
          color: "#1a1a1a",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          overflowX: "hidden"
        }}>
          <HeroSection />
          <ClientLogos />
          <Services />
          <ContactSection />
          <Footer />
        </main>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}