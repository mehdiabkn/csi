"use client";
import { useState, useEffect } from 'react';

export default function ClientLogos() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Détection de la taille d'écran
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Exécuter immédiatement et ajouter l'écouteur
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Nettoyage en cas de démontage du composant
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const logos = [
    "/siemens.png",
    "/viapost.png",
    "/korber.png"
  ];

  return (
    <section style={{ 
      padding: isMobile ? "1.5rem 1rem" : "2rem 1rem", 
      textAlign: "center", 
      backgroundColor: "#ffffff"
    }}>
      <h2 style={{ 
        fontSize: isMobile ? "1.5rem" : "2rem", 
        fontWeight: "bold", 
        marginBottom: isMobile ? "1.5rem" : "2rem"
      }}>
        Ils nous font confiance
      </h2>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: isMobile ? "1.5rem" : "4rem",
        flexWrap: "wrap"
      }}>
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            style={{
              height: isMobile ? "60px" : "90px",
              opacity: 1,
              border: "1px solid #ddd",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              padding: isMobile ? "0.75rem" : "1rem",
              backgroundColor: "white",
              transition: "transform 0.3s ease"
            }}
            onMouseOver={!isMobile ? e => e.currentTarget.style.transform = "scale(1.05)" : undefined}
            onMouseOut={!isMobile ? e => e.currentTarget.style.transform = "scale(1)" : undefined}
          />
        ))}
      </div>
    </section>
  );
}