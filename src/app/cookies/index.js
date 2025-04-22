"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function CookiesPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#f4f7fa",
      color: "#1a1a1a",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflowX: "hidden"
    }}>
      <Header />
      
      <section style={{
        padding: isMobile ? "3rem 1.5rem" : "6rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: "bold",
          marginBottom: isMobile ? "2rem" : "3rem",
          color: "#2c5364",
          textAlign: "center",
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)"
        }}>
          Politique des Cookies
          <span style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "60px" : "80px",
            height: "4px",
            backgroundColor: "#2c5364",
            borderRadius: "2px"
          }}></span>
        </h1>
        
        <div style={{
          backgroundColor: "white",
          padding: isMobile ? "1.5rem" : "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          lineHeight: "1.8"
        }}>
          <p style={{ marginBottom: "2rem" }}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            1. Notre politique concernant les cookies
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Le site www.consultant-si.fr n'utilise aucun cookie, traceur ou technologie similaire pour collecter des informations sur ses visiteurs. Nous respectons votre vie privée et avons choisi de ne pas implémenter de cookies sur notre site.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            2. Qu'est-ce qu'un cookie ?
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lors de la visite d'un site web. Les cookies permettent généralement aux sites web de reconnaître les visiteurs, de mémoriser leurs préférences et de suivre leur navigation.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            3. Pourquoi n'utilisons-nous pas de cookies ?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Nous avons choisi de ne pas utiliser de cookies pour :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Respecter au maximum votre vie privée</li>
            <li style={{ marginBottom: "0.5rem" }}>Assurer la transparence totale sur le traitement de vos données</li>
            <li style={{ marginBottom: "0.5rem" }}>Simplifier votre expérience de navigation</li>
            <li style={{ marginBottom: "0.5rem" }}>Éviter toute collecte de données non nécessaire</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            4. Technologies tiers
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Bien que notre site n'utilise pas de cookies, nous tenons à vous informer que :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Notre site est hébergé sur Vercel</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre API est hébergée sur Render</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre nom de domaine est géré par Hostinger</li>
          </ul>
          <p style={{ marginBottom: "2rem" }}>
            Ces services peuvent utiliser leurs propres technologies de suivi. Nous vous recommandons de consulter leurs politiques de confidentialité respectives pour plus d'informations.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            5. Votre consentement
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Puisque notre site n'utilise pas de cookies, aucun consentement n'est requis pour la navigation sur notre site concernant l'utilisation de cookies.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            6. Comment gérer les cookies sur votre navigateur ?
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Même si notre site n'utilise pas de cookies, d'autres sites peuvent en utiliser. Vous pouvez configurer votre navigateur pour :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Accepter ou refuser les cookies</li>
            <li style={{ marginBottom: "0.5rem" }}>Être averti lorsqu'un site tente de placer un cookie</li>
            <li style={{ marginBottom: "0.5rem" }}>Supprimer les cookies existants</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            7. Modifications de cette politique
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Si nous décidons d'utiliser des cookies à l'avenir, nous mettrons à jour cette politique et vous en informerons clairement. Toute modification sera indiquée par la date de mise à jour en haut de cette page.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            8. Contact
          </h2>
          <p style={{ marginBottom: 0 }}>
            Pour toute question concernant notre politique des cookies, vous pouvez nous contacter à l'adresse : contact@consultant-si.fr
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}