"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ""
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setFormStatus({
      submitted: true,
      message: "Votre message a bien été envoyé. Nous vous recontacterons sous 24h."
    });
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        message: ""
      });
      e.target.reset();
    }, 5000);
  };

  // Styles communs pour les cartes de contact
  const contactCardStyle = {
    backgroundColor: "#f8f9fa",
    padding: isMobile ? "1.5rem 1rem" : "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    width: isMobile ? "100%" : "280px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit"
  };

  // Style pour l'icône circulaire
  const iconCircleStyle = {
    backgroundColor: "rgba(44, 83, 100, 0.1)",
    width: isMobile ? "50px" : "60px",
    height: isMobile ? "50px" : "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.2rem auto"
  };

  return (
    <section id="contact" style={{
      backgroundColor: "white",
      padding: isMobile ? "3rem 1.5rem" : "6rem 2rem",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: "bold",
          marginBottom: isMobile ? "1rem" : "1.5rem",
          color: "#2c5364",
          position: "relative",
          display: "inline-block"
        }}>
          Une question ?
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
        </h2>
        
        <p style={{ 
          marginBottom: isMobile ? "2rem" : "3rem", 
          fontSize: isMobile ? "1rem" : "1.1rem", 
          color: "#555",
          maxWidth: "600px",
          margin: `0 auto ${isMobile ? "2rem" : "3rem"} auto`
        }}>
          Nous sommes à votre écoute. Contactez-nous directement ou utilisez le formulaire ci-dessous.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isMobile ? "1.2rem" : "2rem",
          marginBottom: isMobile ? "2.5rem" : "4rem"
        }}>
          {/* Téléphone principal */}
          <a 
            href="tel:+33680881668" 
            style={contactCardStyle}
            onMouseOver={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            } : undefined}
            onMouseOut={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            } : undefined}
          >
            <div style={iconCircleStyle}>
              <Phone size={isMobile ? 20 : 24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ 
              fontWeight: "600", 
              fontSize: isMobile ? "1.1rem" : "1.2rem", 
              color: "#2c5364", 
              marginBottom: "0.6rem"
            }}>
              Téléphone principal
            </h3>
            <p style={{ 
              fontSize: isMobile ? "1rem" : "1.1rem", 
              color: "#444" 
            }}>
              +33 6 80 88 16 68
            </p>
          </a>

          {/* Téléphone secondaire */}
          <a 
            href="tel:+33619725224" 
            style={contactCardStyle}
            onMouseOver={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            } : undefined}
            onMouseOut={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            } : undefined}
          >
            <div style={iconCircleStyle}>
              <Phone size={isMobile ? 20 : 24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ 
              fontWeight: "600", 
              fontSize: isMobile ? "1.1rem" : "1.2rem", 
              color: "#2c5364", 
              marginBottom: "0.6rem"
            }}>
              Téléphone secondaire
            </h3>
            <p style={{ 
              fontSize: isMobile ? "1rem" : "1.1rem", 
              color: "#444" 
            }}>
              +33 6 19 72 52 24
            </p>
          </a>

          {/* Email */}
          <a 
            href="mailto:contact@consultant-si.fr" 
            style={contactCardStyle}
            onMouseOver={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            } : undefined}
            onMouseOut={!isMobile ? e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            } : undefined}
          >
            <div style={iconCircleStyle}>
              <Mail size={isMobile ? 20 : 24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ 
              fontWeight: "600", 
              fontSize: isMobile ? "1.1rem" : "1.2rem", 
              color: "#2c5364", 
              marginBottom: "0.6rem"
            }}>
              Email
            </h3>
            <p style={{ 
              fontSize: isMobile ? "1rem" : "1.1rem", 
              color: "#444" 
            }}>
              contact@consultant-si.fr
            </p>
          </a>
        </div>

        {/* Formulaire de contact */}
        <form 
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#f8f9fa",
            padding: isMobile ? "1.5rem" : "2.5rem",
            borderRadius: "1rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "1rem" : "1.2rem",
            position: "relative"
          }}
          onSubmit={handleSubmit}
        >
          <h3 style={{ 
            fontWeight: "600", 
            fontSize: isMobile ? "1.2rem" : "1.4rem", 
            color: "#2c5364", 
            marginBottom: isMobile ? "0.8rem" : "1rem",
            textAlign: "left" 
          }}>
            Envoyez-nous un message
          </h3>
          

          
          <input 
            type="text" 
            placeholder="Prénom" 
            required 
            style={{ 
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              transition: "border-color 0.3s ease",
              outline: "none"
            }} 
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          <input 
            type="text" 
            placeholder="Nom" 
            required 
            style={{ 
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              transition: "border-color 0.3s ease",
              outline: "none"
            }} 
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          <input 
            type="email" 
            placeholder="Email" 
            required 
            style={{ 
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              transition: "border-color 0.3s ease",
              outline: "none"
            }} 
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          
          <input 
            type="text" 
            placeholder="Objet" 
            required 
            style={{ 
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              transition: "border-color 0.3s ease",
              outline: "none"
            }}
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          
          <textarea 
            placeholder="Votre message" 
            rows={isMobile ? 4 : 5} 
            style={{ 
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              resize: "vertical",
              fontFamily: "inherit",
              transition: "border-color 0.3s ease",
              outline: "none"
            }}
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          
          <button 
            type="submit" 
            style={{
              backgroundColor: "#2c5364",
              color: "white",
              fontWeight: "600",
              padding: isMobile ? "0.8rem" : "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              border: "none",
              fontSize: isMobile ? "0.95rem" : "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease"
            }}
            onMouseOver={!isMobile ? e => {
              e.currentTarget.style.backgroundColor = "#203a43";
              e.currentTarget.style.transform = "translateY(-2px)";
            } : undefined}
            onMouseOut={!isMobile ? e => {
              e.currentTarget.style.backgroundColor = "#2c5364";
              e.currentTarget.style.transform = "translateY(0)";
            } : undefined}
          >
            {formStatus.submitted ? <CheckCircle size={isMobile ? 16 : 18} /> : <Send size={isMobile ? 16 : 18} />}
            {formStatus.submitted ? "Envoyé" : "Envoyer le message"}
          </button>
          
          {formStatus.submitted && (
            <div style={{
              marginTop: "1rem",
              color: "#2e7d32",
              backgroundColor: "#e8f5e9",
              padding: isMobile ? "0.6rem" : "0.75rem",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}>
              {formStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}