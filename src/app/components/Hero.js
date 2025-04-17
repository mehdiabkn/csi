"use client";
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [gradientPosition, setGradientPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Détection de la taille d'écran
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Exécuter immédiatement et ajouter l'écouteur
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Animation lente et continue du gradient
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 0.2) % 200); // Mouvement lent, cycle complet après 1000 étapes
    }, 50);
    
    // Nettoyage en cas de démontage du composant
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Animation subtile au mouvement de souris (seulement sur desktop)
  const handleMouseMove = (e) => {
    if (isMobile) return; // Désactiver sur mobile pour de meilleures performances
    
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
        padding: isMobile ? "4rem 1.5rem" : "6rem 2rem", // Moins de padding sur mobile
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
          fontSize: isMobile ? "2rem" : "3rem", // Taille réduite sur mobile
          fontWeight: "bold", 
          marginBottom: isMobile ? "0.75rem" : "1rem", // Marge réduite sur mobile
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          lineHeight: isMobile ? "1.3" : "1.2" // Hauteur de ligne légèrement augmentée sur mobile
        }}>
          Plus de 20 ans d'expertise au service des systèmes d'information de grandes organisations
        </h1>
        <p style={{ 
          fontSize: isMobile ? "1rem" : "1.25rem", // Taille réduite sur mobile
          lineHeight: "1.8", 
          marginBottom: isMobile ? "2rem" : "2.5rem", // Marge réduite sur mobile
          opacity: 0.95,
          textShadow: "0 1px 2px rgba(0,0,0,0.2)"
        }}>
          Tous nos consultants sont ingénieurs diplômés et expérimentés.
          {!isMobile && <br />} {/* Pas de saut de ligne sur mobile */}
          Nous intervenons dans des environnements complexes et sensibles,
          majoritairement au sein de grandes organisations internationales, depuis plus de 20 ans.
        </p>
        
        <a
          href="#contact"
          style={{
            backgroundColor: "white",
            color: "#2c5364",
            padding: isMobile ? "0.7rem 1.5rem" : "0.75rem 2rem", // Bouton légèrement plus petit sur mobile
            borderRadius: "999px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            fontSize: isMobile ? "0.95rem" : "1rem" // Texte du bouton légèrement plus petit sur mobile
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