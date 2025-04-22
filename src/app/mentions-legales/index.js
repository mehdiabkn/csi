"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function MentionsLegales() {
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
          Mentions Légales
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
          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            1. Informations légales
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Le site www.consultant-si.fr est édité par :
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Dénomination sociale :</strong> Consultant SI</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Forme juridique :</strong> SASU (Société par actions simplifiée à associé unique)</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Capital social :</strong> [À compléter]</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>SIREN :</strong> 949 148 662</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>SIRET du siège social :</strong> 949 148 662 00016</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>TVA intracommunautaire :</strong> FR37949148662</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Code NAF/APE :</strong> 6202A - Conseil en systèmes et logiciels informatiques</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Date de création :</strong> 21 février 2023</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Adresse du siège social :</strong> 66 AVENUE DES CHAMPS ELYSEES, 75008 PARIS, France</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Dirigeant :</strong> Mohamed ABERKANE</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Contact :</strong> contact@consultant-si.fr</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            2. Hébergement
          </h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Hébergeur du site :</strong> Vercel Inc.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Hébergeur du nom de domaine :</strong> Hostinger International Ltd.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Hébergeur de l'API :</strong> Render Services, Inc.</li>
          </ul>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            3. Propriété intellectuelle
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            4. Données personnelles
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Les informations recueillies sur le site www.consultant-si.fr font l'objet d'un traitement informatique destiné à répondre à vos demandes.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne, vous bénéficiez d'un droit d'accès, de rectification, de suppression et d'opposition aux informations qui vous concernent.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : contact@consultant-si.fr
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            5. Responsabilité
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Les informations fournies sur ce site le sont à titre indicatif. Consultant SI ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur son site.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            6. Liens hypertextes
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Consultant SI.
          </p>

          <h2 style={{ color: "#2c5364", marginBottom: "1rem", fontSize: isMobile ? "1.4rem" : "1.6rem" }}>
            7. Droit applicable
          </h2>
          <p style={{ marginBottom: 0 }}>
            Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}