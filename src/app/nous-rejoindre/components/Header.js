"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollLock, setScrollLock] = useState(false); // Verrou anti-tremblement
  const [isMobile, setIsMobile] = useState(false); // État pour détecter le mobile

  useEffect(() => {
    // Détection de mobile au chargement
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Exécuter immédiatement et ajouter l'écouteur
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Gestion du défilement smooth
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

    // Détection du scroll pour changer l'apparence du header
    const handleScroll = () => {
      if (scrollLock) return; // Ne rien faire si verrouillé
      
      const offset = window.scrollY;
      
      // Utilisation de seuils différents pour éviter l'oscillation
      if (!scrolled && offset > 150) {
        setScrolled(true);
        // Verrouiller temporairement pour éviter les rebonds
        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 200);
      } else if (scrolled && offset < 100) { // Seuil inférieur plus bas
        setScrolled(false);
        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 200);
      }
    };

    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", handleScrollTo);
    });

    // Écoute de défilement avec throttling pour de meilleures performances
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.removeEventListener("click", handleScrollTo);
      });
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [scrolled, scrollLock]);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff",
      borderBottom: scrolled ? "1px solid rgba(234, 234, 234, 0.8)" : "1px solid #eaeaea",
      padding: scrolled ? "0.6rem 2rem" : "1rem 2rem",
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.08)" : "none"
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
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontWeight: "bold",
            marginBottom: scrolled ? "0" : "1.5rem",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              fontSize: scrolled ? "3rem" : "3.8rem", 
              color: "#0f2027", 
              letterSpacing: "-0.5px",
              transition: "all 0.3s ease"
            }}>c</span>
            <span style={{ 
              fontSize: scrolled ? "3rem" : "3.8rem", 
              color: "#4a9cb5",
              fontWeight: "800",
              position: "relative",
              letterSpacing: "-1px",
              transition: "all 0.3s ease"
            }}>S</span>
            <span style={{ 
              fontSize: scrolled ? "3rem" : "3.8rem", 
              color: "#0f2027",
              letterSpacing: "-0.5px",
              marginRight: "5px",
              transition: "all 0.3s ease"
            }}>i</span>
          </div>
        </Link>

        {/* Afficher le bouton hamburger uniquement si l'état mobile est détecté */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            className="menu-toggle"
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#1a1a1a",
              display: "block" // Toujours afficher quand isMobile est true
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        )}

        <nav className={`nav-links ${open ? "open" : ""}`} style={{ 
          marginLeft: "auto",
          display: isMobile ? (open ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          marginTop: isMobile ? "1rem" : "0",
          width: isMobile ? "100%" : "auto",
          animation: isMobile && open ? "fadeIn 0.3s ease-in-out" : "none"
        }}>
          <Link href="/"><span style={linkStyle}>Accueil</span></Link>
          <Link href="/nous-rejoindre"><span style={linkStyle}>Nous rejoindre</span></Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links span:hover {
          background-color: #f1f1f1;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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