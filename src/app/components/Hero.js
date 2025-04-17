"use client";
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [gradientPosition, setGradientPosition] = useState(0);
  
  useEffect(() => {
    // Animation lente et continue du gradient
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev +.2) % 200); // Mouvement lent, cycle complet après 1000 étapes
    }, 50);
    
    // Nettoyage en cas de démontage du composant
    return () => clearInterval(interval);
  }, []);

  // Animation subtile au mouvement de souris
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 10 - 5; // Valeur entre -5 et 5
    const y = (clientY / window.innerHeight) * 10 - 5; // Valeur entre -5 et 5
    
    const section = e.currentTarget;
    section.style.backgroundPosition = `${50 + x/3}% ${50 + y/3}%`;
  };

  return (
    <section 
      style={{
        background: `linear-gradient(135deg, #0f2027, #203a43, #2c5364)`,
        backgroundSize: '200% 200%',
        backgroundPosition: `${50 + Math.sin(gradientPosition/10) * 5}% ${50 + Math.cos(gradientPosition/10) * 5}%`,
        color: "white",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background-position 0.5s ease-out",
        overflow: "hidden"
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Effet de lumière animé */}
      <div 
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          opacity: "0.05",
          background: `radial-gradient(circle at ${50 + Math.sin(gradientPosition/20) * 20}% ${50 + Math.cos(gradientPosition/15) * 20}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          pointerEvents: "none" // Pour ne pas interférer avec les clics
        }}
      />
      
      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: "2" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: "bold", 
          marginBottom: "1rem",
          textShadow: "0 2px 10px rgba(0,0,0,0.3)" 
        }}>
          Plus de 20 ans d'expertise au service des systèmes d'information de grandes organisations
        </h1>
        <p style={{ 
          fontSize: "1.25rem", 
          lineHeight: "1.8", 
          marginBottom: "2.5rem", 
          opacity: 0.95,
          textShadow: "0 1px 2px rgba(0,0,0,0.2)" 
        }}>
          Tous nos consultants sont ingénieurs diplômés et expérimentés. <br />
          Nous intervenons dans des environnements complexes et sensibles,
          majoritairement au sein de grandes organisations internationales, depuis plus de 20 ans.
        </p>
        
        <a
          href="#contact"
          style={{
            backgroundColor: "white",
            color: "#2c5364",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            display: "inline-block"
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = '#f1f1f1';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.25)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          Discutons de votre projet
        </a>
      </div>
    </section>
  );
}