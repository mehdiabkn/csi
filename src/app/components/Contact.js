"use client";
import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ""
  });

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

  return (
    <section id="contact" style={{
      backgroundColor: "white",
      padding: "6rem 2rem",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
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
            width: "80px",
            height: "4px",
            backgroundColor: "#2c5364",
            borderRadius: "2px"
          }}></span>
        </h2>
        
        <p style={{ 
          marginBottom: "3rem", 
          fontSize: "1.1rem", 
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto 3rem auto"
        }}>
          Nous sommes à votre écoute. Contactez-nous directement ou utilisez le formulaire ci-dessous.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "4rem"
        }}>
          <a href="tel:+33680881668" style={{
            backgroundColor: "#f8f9fa",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            width: "280px",
            textAlign: "center",
            transition: "all 0.3s ease",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
          }}>
            <div style={{
              backgroundColor: "rgba(44, 83, 100, 0.1)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto"
            }}>
              <Phone size={24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem", color: "#2c5364", marginBottom: "0.8rem" }}>
              Téléphone principal
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#444" }}>+33 6 80 88 16 68</p>

          </a>

          <a href="tel:+33619725224" style={{
            backgroundColor: "#f8f9fa",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            width: "280px",
            textAlign: "center",
            transition: "all 0.3s ease",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
          }}>
            <div style={{
              backgroundColor: "rgba(44, 83, 100, 0.1)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto"
            }}>
              <Phone size={24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem", color: "#2c5364", marginBottom: "0.8rem" }}>
              Téléphone secondaire
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#444" }}>+33 6 19 72 52 24</p>

          </a>

          <a href="mailto:contact@consultant-si.fr" style={{
            backgroundColor: "#f8f9fa",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            width: "280px",
            textAlign: "center",
            transition: "all 0.3s ease",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
          }}>
            <div style={{
              backgroundColor: "rgba(44, 83, 100, 0.1)",
              width: "60px",
              height: "60px", 
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto"
            }}>
              <Mail size={24} strokeWidth={2} color="#2c5364" />
            </div>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem", color: "#2c5364", marginBottom: "0.8rem" }}>
              Email
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#444" }}>contact@consultant-si.fr</p>

          </a>
        </div>

        <form 
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#f8f9fa",
            padding: "2.5rem",
            borderRadius: "1rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            position: "relative"
          }}
          onSubmit={handleSubmit}
        >
          <h3 style={{ 
            fontWeight: "600", 
            fontSize: "1.4rem", 
            color: "#2c5364", 
            marginBottom: "1rem",
            textAlign: "left" 
          }}>
            Envoyez-nous un message
          </h3>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <input 
              type="text" 
              placeholder="Prénom" 
              required 
              style={{ 
                padding: "1rem 1.2rem", 
                borderRadius: "8px", 
                border: "1px solid #e0e0e0",
                flex: "1",
                minWidth: "200px",
                fontSize: "1rem",
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
                padding: "1rem 1.2rem", 
                borderRadius: "8px", 
                border: "1px solid #e0e0e0",
                flex: "1",
                minWidth: "200px",
                fontSize: "1rem",
                transition: "border-color 0.3s ease",
                outline: "none"
              }} 
              onFocus={e => e.target.style.borderColor = "#2c5364"}
              onBlur={e => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>
          
          <input 
            type="email" 
            placeholder="Email" 
            required 
            style={{ 
              padding: "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: "1rem",
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
              padding: "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: "1rem",
              transition: "border-color 0.3s ease",
              outline: "none"
            }}
            onFocus={e => e.target.style.borderColor = "#2c5364"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />
          
          <textarea 
            placeholder="Votre message" 
            rows={5} 
            style={{ 
              padding: "1rem 1.2rem", 
              borderRadius: "8px", 
              border: "1px solid #e0e0e0",
              fontSize: "1rem",
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
              padding: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              border: "none",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease"
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "#203a43";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "#2c5364";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {formStatus.submitted ? <CheckCircle size={18} /> : <Send size={18} />}
            {formStatus.submitted ? "Envoyé" : "Envoyer le message"}
          </button>
          
          {formStatus.submitted && (
            <div style={{
              marginTop: "1rem",
              color: "#2e7d32",
              backgroundColor: "#e8f5e9",
              padding: "0.75rem",
              borderRadius: "6px",
              fontWeight: "500"
            }}>
              {formStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}