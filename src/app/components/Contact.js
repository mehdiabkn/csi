"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ""
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitCount, setSubmitCount] = useState(0);
  const lastSubmitTime = useRef(0);
  const formRef = useRef(null);
  
  // Captcha simple côté client (sera renforcé côté serveur)
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaChallenge, setCaptchaChallenge] = useState("");

  useEffect(() => {
    // Détection de la taille d'écran
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Exécuter immédiatement et ajouter l'écouteur
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Générer un captcha simple
    generateCaptcha();
    
    // Nettoyage en cas de démontage du composant
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Génère un simple captcha mathématique
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaChallenge(`${num1} + ${num2} = ?`);
    setCaptchaValue("");
  };

  // Vérifie le captcha
  const verifyCaptcha = () => {
    const [num1, num2] = captchaChallenge.split('+').map(part => 
      parseInt(part.trim())
    );
    return parseInt(captchaValue) === (num1 + num2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Effacer l'erreur si elle existe pour ce champ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validation de base
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.subject.trim()) newErrors.subject = "L'objet est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    // Validation anti-spam
    if (!captchaValue) {
      newErrors.captcha = "Veuillez résoudre le captcha";
    } else if (!verifyCaptcha()) {
      newErrors.captcha = "Captcha incorrect";
      generateCaptcha(); // Régénérer en cas d'erreur
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Anti-spam: limite de fréquence
    const now = Date.now();
    if (now - lastSubmitTime.current < 10000) { // 10 secondes entre soumissions
      setFormStatus({
        success: false,
        error: true,
        message: "Merci de patienter quelques secondes avant de renvoyer un message"
      });
      return;
    }
    
    // Anti-spam: limite de tentatives
    if (submitCount >= 5) {
      setFormStatus({
        success: false,
        error: true,
        message: "Trop de tentatives. Veuillez réessayer plus tard."
      });
      return;
    }
    
    // Validation du formulaire
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    lastSubmitTime.current = now;
    setSubmitCount(prev => prev + 1);
    
    try {
      // Préparation des données avec nonce et timestamp pour sécurité
      const payload = {
        ...formData,
        timestamp: Date.now(),
        nonce: Math.random().toString(36).substring(2, 15)
      };
      
      const response = await fetch("https://backnewsloc2.onrender.com/consultant-si", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": "consultant-si-frontend",
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur est survenue");
      }
      
      const data = await response.json();
      
      // Succès
      setFormStatus({
        success: true,
        error: false,
        message: "Votre message a bien été envoyé. Nous vous recontacterons sous 24h."
      });
      
      // Réinitialiser le formulaire
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      formRef.current.reset();
      generateCaptcha();
      
      // Effacer le message après 5 secondes
      setTimeout(() => {
        setFormStatus({
          success: false,
          error: false,
          message: ""
        });
      }, 5000);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormStatus({
        success: false,
        error: true,
        message: error.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      });
    } finally {
      setIsSubmitting(false);
    }
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

  // Style pour les champs du formulaire
  const inputStyle = {
    padding: isMobile ? "0.8rem 1rem" : "1rem 1.2rem", 
    borderRadius: "8px", 
    border: "1px solid #e0e0e0",
    fontSize: isMobile ? "0.95rem" : "1rem",
    transition: "border-color 0.3s ease",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
  };

  // Style pour les messages d'erreur
  const errorStyle = {
    color: "#d32f2f",
    fontSize: "0.8rem",
    marginTop: "0.25rem",
    textAlign: "left"
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
          ref={formRef}
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
          
          <div style={{ position: "relative" }}>
            <input 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Prénom" 
              required 
              style={{ 
                ...inputStyle,
                borderColor: errors.firstName ? "#d32f2f" : "#e0e0e0"
              }} 
              onFocus={e => e.target.style.borderColor = errors.firstName ? "#d32f2f" : "#2c5364"}
              onBlur={e => e.target.style.borderColor = errors.firstName ? "#d32f2f" : "#e0e0e0"}
            />
            {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
          </div>
          
          <div style={{ position: "relative" }}>
            <input 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Nom" 
              required 
              style={{ 
                ...inputStyle,
                borderColor: errors.lastName ? "#d32f2f" : "#e0e0e0"
              }} 
              onFocus={e => e.target.style.borderColor = errors.lastName ? "#d32f2f" : "#2c5364"}
              onBlur={e => e.target.style.borderColor = errors.lastName ? "#d32f2f" : "#e0e0e0"}
            />
            {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
          </div>
          
          <div style={{ position: "relative" }}>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              required 
              style={{ 
                ...inputStyle,
                borderColor: errors.email ? "#d32f2f" : "#e0e0e0"
              }} 
              onFocus={e => e.target.style.borderColor = errors.email ? "#d32f2f" : "#2c5364"}
              onBlur={e => e.target.style.borderColor = errors.email ? "#d32f2f" : "#e0e0e0"}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>
          
          <div style={{ position: "relative" }}>
            <input 
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Objet" 
              required 
              style={{ 
                ...inputStyle,
                borderColor: errors.subject ? "#d32f2f" : "#e0e0e0"
              }}
              onFocus={e => e.target.style.borderColor = errors.subject ? "#d32f2f" : "#2c5364"}
              onBlur={e => e.target.style.borderColor = errors.subject ? "#d32f2f" : "#e0e0e0"}
            />
            {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
          </div>
          
          <div style={{ position: "relative" }}>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message" 
              rows={isMobile ? 4 : 5} 
              style={{ 
                ...inputStyle,
                borderColor: errors.message ? "#d32f2f" : "#e0e0e0",
                resize: "vertical",
                fontFamily: "inherit"
              }}
              onFocus={e => e.target.style.borderColor = errors.message ? "#d32f2f" : "#2c5364"}
              onBlur={e => e.target.style.borderColor = errors.message ? "#d32f2f" : "#e0e0e0"}
            />
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>
          
          {/* Captcha simple */}
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: "1rem",
            marginTop: "0.5rem"
          }}>
            <div style={{ 
              backgroundColor: "#e8f5e9", 
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontWeight: "bold",
              minWidth: "100px",
              textAlign: "center"
            }}>
              {captchaChallenge}
            </div>
            <div style={{ position: "relative", flex: 1 }}>
              <input 
                type="text"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                placeholder="Réponse" 
                required 
                style={{ 
                  ...inputStyle,
                  borderColor: errors.captcha ? "#d32f2f" : "#e0e0e0"
                }} 
                onFocus={e => e.target.style.borderColor = errors.captcha ? "#d32f2f" : "#2c5364"}
                onBlur={e => e.target.style.borderColor = errors.captcha ? "#d32f2f" : "#e0e0e0"}
              />
              {errors.captcha && <div style={errorStyle}>{errors.captcha}</div>}
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              backgroundColor: isSubmitting ? "#90a4ae" : "#2c5364",
              color: "white",
              fontWeight: "600",
              padding: isMobile ? "0.8rem" : "1rem",
              borderRadius: "8px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              border: "none",
              fontSize: isMobile ? "0.95rem" : "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
              opacity: isSubmitting ? 0.8 : 1
            }}
            onMouseOver={!isMobile && !isSubmitting ? e => {
              e.currentTarget.style.backgroundColor = "#203a43";
              e.currentTarget.style.transform = "translateY(-2px)";
            } : undefined}
            onMouseOut={!isMobile && !isSubmitting ? e => {
              e.currentTarget.style.backgroundColor = "#2c5364";
              e.currentTarget.style.transform = "translateY(0)";
            } : undefined}
          >
            {isSubmitting ? "Envoi en cours..." : formStatus.success ? (
              <>
                <CheckCircle size={isMobile ? 16 : 18} />
                Envoyé
              </>
            ) : (
              <>
                <Send size={isMobile ? 16 : 18} />
                Envoyer le message
              </>
            )}
          </button>
          
          {(formStatus.success || formStatus.error) && (
            <div style={{
              marginTop: "1rem",
              color: formStatus.success ? "#2e7d32" : "#d32f2f",
              backgroundColor: formStatus.success ? "#e8f5e9" : "#ffebee",
              padding: isMobile ? "0.6rem" : "0.75rem",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: isMobile ? "0.9rem" : "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              {formStatus.success ? (
                <CheckCircle size={16} color="#2e7d32" />
              ) : (
                <AlertCircle size={16} color="#d32f2f" />
              )}
              {formStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}