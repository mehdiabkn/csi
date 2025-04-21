"use client";
import { useEffect, useRef } from 'react';

export default function Logo({ scrolled }) {
  // Utiliser une référence pour éviter les re-renders inutiles
  const logoRef = useRef(null);
  
  return (
    <div 
      ref={logoRef}
      style={{ 
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        fontWeight: "bold",
        transition: "transform 0.3s ease", // Utiliser transform au lieu de marginBottom
        transform: scrolled ? "scale(0.85)" : "scale(1)", // Scale au lieu de changer la taille des polices
        willChange: "transform" // Optimisation pour l'animation
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <span style={{
          fontSize: "3.8rem", // Taille de police fixe
          color: "#0f2027",
          letterSpacing: "-0.5px"
        }}>c</span>
        <span style={{
          fontSize: "3.8rem", // Taille de police fixe
          color: "#4a9cb5",
          fontWeight: "800",
          position: "relative",
          letterSpacing: "-1px"
        }}>S</span>
        <span style={{
          fontSize: "3.8rem", // Taille de police fixe
          color: "#0f2027",
          letterSpacing: "-0.5px",
          marginRight: "5px"
        }}>i</span>
      </div>
      <div style={{
        fontSize: "0.9rem", // Légèrement plus petit pour un look élégant
        color: "#2c5364", // Couleur coordonnée avec le "S" mais plus subtile
        letterSpacing: "1px", // Espacement des lettres pour un look premium
        fontWeight: "500", // Semi-bold pour plus de présence
        textTransform: "uppercase", // Majuscules pour un aspect plus professionnel
        marginTop: "-8px", // Ajusté pour être un peu plus proche du logo
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif", // Police plus moderne
        opacity: "1", // Légère transparence pour un effet subtil
        borderTop: "1px solid rgba(74, 156, 181, 0.3)", // Fine ligne au-dessus
        paddingTop: "2px", // Petit espace pour la ligne
        transform: "scaleX(0.95)" // Légèrement rétréci horizontalement
      }}>
        consultant-si
      </div>
    </div>
  );
}