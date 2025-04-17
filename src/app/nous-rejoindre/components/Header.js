"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Server, Network } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScrollTo = (e) => {
      const link = e.target.closest('a');
      if (link && link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
          setOpen(false);
        }
      }
    };

    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", handleScrollTo);
    });

    return () => {
      document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.removeEventListener("click", handleScrollTo);
      });
    };
  }, []);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #eaeaea",
      padding: "1rem 2rem"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ 
            fontSize: "3.7rem", 
            fontWeight: "bold", 
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.1rem"
          }}>

            <span style={{ color: "#2c5364", marginRight: 6 }}>C</span>

            <span style={{ color: "#1a1a1a", marginRight: 6 }}>S</span>
            <span style={{ color: "#1a1a1a", marginRight: 6 }}>I</span>

          </div>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="menu-toggle"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} style={{ marginLeft: "auto" }}>
          <Link href="/"><span style={linkStyle}>Accueil</span></Link>
          <Link href="/nous-rejoindre"><span style={linkStyle}>Nous rejoindre</span></Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links span:hover {
          background-color: #f1f1f1;
        }

        .menu-toggle {
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #1a1a1a;
          display: none;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
            width: 100%;
            animation: fadeIn 0.3s ease-in-out;
          }

          .nav-links.open {
            display: flex;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#2c5364",
  backgroundColor: "white",
  padding: "1.5rem 1.25rem",
  borderRadius: "30px",
  fontWeight: 600,
  fontSize: "1rem",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
  borderBottom: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0)",
  cursor: "pointer",
  display: "inline-block"
};