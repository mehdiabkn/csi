"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function PolitiqueConfidentialite() {
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
          Politique de Confidentialité
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
            1. Introduction
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Consultant SI s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web www.consultant-si.fr.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            2. Responsable du traitement
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Le responsable du traitement des données est :
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Société :</strong> Consultant SI (SASU)</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>SIREN :</strong> 949 148 662</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Adresse :</strong> 66 AVENUE DES CHAMPS ELYSEES, 75008 PARIS, France</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Contact :</strong> contact@consultant-si.fr</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            3. Données collectées
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Nous collectons uniquement les données que vous nous fournissez volontairement via :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Notre formulaire de contact : nom, prénom, email, sujet, message</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre formulaire de candidature : nom, prénom, email, téléphone, CV, message de motivation</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            4. Finalités du traitement
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Vos données sont utilisées pour :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Répondre à vos demandes de contact</li>
            <li style={{ marginBottom: "0.5rem" }}>Traiter vos candidatures</li>
            <li style={{ marginBottom: "0.5rem" }}>Vous contacter concernant nos services</li>
            <li style={{ marginBottom: "0.5rem" }}>Améliorer nos services</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            5. Base légale du traitement
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Le traitement de vos données est fondé sur :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Votre consentement explicite lors de la soumission des formulaires</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre intérêt légitime à répondre à vos demandes</li>
            <li style={{ marginBottom: "0.5rem" }}>L'exécution de mesures précontractuelles</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            6. Destinataires des données
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Vos données sont transmises à :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Notre équipe interne pour le traitement de vos demandes</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre service technique (emails envoyés à contact@consultant-si.fr et mehdi.aberkane.pro@gmail.com)</li>
            <li style={{ marginBottom: "0.5rem" }}>Notre API hébergée par Render pour le transfert des données</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            7. Durée de conservation
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Vos données sont conservées :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Données de contact : jusqu'au traitement complet de votre demande et pendant 3 ans maximum</li>
            <li style={{ marginBottom: "0.5rem" }}>Données de candidature : pendant 2 ans maximum après le dernier contact</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            8. Vos droits
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Droit d'accès à vos données</li>
            <li style={{ marginBottom: "0.5rem" }}>Droit de rectification</li>
            <li style={{ marginBottom: "0.5rem" }}>Droit à l'effacement</li>
            <li style={{ marginBottom: "0.5rem" }}>Droit à la limitation du traitement</li>
            <li style={{ marginBottom: "0.5rem" }}>Droit à la portabilité</li>
            <li style={{ marginBottom: "0.5rem" }}>Droit d'opposition</li>
          </ul>
          <p style={{ marginBottom: "2rem" }}>
            Pour exercer ces droits, contactez-nous à : contact@consultant-si.fr
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            9. Sécurité
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            10. Transferts de données
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Vos données sont stockées sur des serveurs situés dans l'Union Européenne et aux États-Unis (via Vercel et Render). Ces transferts sont encadrés par des garanties appropriées conformément à la réglementation en vigueur.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            11. Modifications
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            12. Contact
          </h2>
          <p style={{ marginBottom: 0 }}>
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à : contact@consultant-si.fr
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}