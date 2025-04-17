"use client";
import Header from "./components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Upload, ArrowRight, CheckCircle } from "lucide-react";

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState("consultant");
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ""
  });
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setFormStatus({
      submitted: true,
      message: "Votre candidature a bien été envoyée. Nous reviendrons vers vous rapidement."
    });
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        message: ""
      });
      e.target.reset();
      setFileName("");
    }, 5000);
  };

  const positions = {
    consultant: [
      {
        title: "Consultant DevOps",
        description: "Expert en automatisation, CI/CD et infrastructures cloud",
        requirements: "Expérience en Kubernetes, Docker, AWS ou Azure. Maîtrise des outils d'automatisation."
      },
      {
        title: "Consultant Sécurité",
        description: "Protection des systèmes d'information et audit de sécurité",
        requirements: "Certifications en cybersécurité, expérience en pentest, gestion des vulnérabilités."
      },
      {
        title: "Consultant Cloud",
        description: "Migration et optimisation d'infrastructures cloud",
        requirements: "Expertise AWS/Azure/GCP, expérience en architecture cloud, certifications associées."
      }
    ],
    developer: [
      {
        title: "Développeur Full Stack",
        description: "Conception et développement d'applications web modernes",
        requirements: "Maîtrise de React, Node.js, et SQL/NoSQL. Expérience en API REST et architectures microservices."
      },
      {
        title: "Développeur Mobile",
        description: "Création d'applications mobiles natives et cross-platform",
        requirements: "Expertise en React Native ou Flutter, connaissance d'iOS/Android, expérience en API REST."
      },
      {
        title: "Ingénieur Backend",
        description: "Développement de services backend robustes et performants",
        requirements: "Maîtrise de Java/Spring, Python ou Node.js. Expérience en API, bases de données et microservices."
      }
    ]
  };

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
        backgroundColor: "#f8f9fa",
        padding: "6rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#2c5364",
            position: "relative",
            display: "inline-block"
          }}>
            Rejoignez notre équipe
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
          </h1>
          
          <p style={{ 
            marginBottom: "3rem", 
            fontSize: "1.1rem", 
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 3rem auto"
          }}>
            Nous recherchons des talents compétents, sérieux et motivés pour accompagner nos clients dans leur transformation numérique. 
            Découvrez nos opportunités et rejoignez une entreprise en pleine croissance.
          </p>

          {/* Intro */}
          <div style={{
            backgroundColor: "white",
            padding: "2.5rem",
            borderRadius: "12px",
            marginBottom: "4rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            textAlign: "left"
          }}>
            <h2 style={{ color: "#2c5364", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
              Pourquoi nous rejoindre ?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <div>
                <h3 style={{ color: "#2c5364", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                  Projets passionnants
                </h3>
                <p style={{ color: "#666" }}>
                  Travaillez sur des projets innovants pour des clients prestigieux dans divers secteurs d'activité.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#2c5364", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                  Évolution de carrière
                </h3>
                <p style={{ color: "#666" }}>
                  Progressez rapidement grâce à nos programmes de formation continue et d'accompagnement personnalisé.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#2c5364", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                  Équilibre vie pro/perso
                </h3>
                {/*
                <p style={{ color: "#666" }}>
                  Bénéficiez de conditions de travail flexibles et d'un environnement bienveillant.
                </p> */}
                <p style={{ color: "#666" }}>
                  on te met pas la pression
                </p>
              </div>
              <div>
                <h3 style={{ color: "#2c5364", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
                  Innovation technique
                </h3>
                <p style={{ color: "#666" }}>
                  Restez à la pointe de la technologie et développez vos compétences sur les dernières technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginBottom: "3rem",
            gap: "1rem",
            flexWrap: "wrap"
          }}>
            <button 
              onClick={() => setActiveTab("consultant")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: activeTab === "consultant" ? "#2c5364" : "#e5e7eb",
                color: activeTab === "consultant" ? "white" : "#4b5563",
                border: "none",
                transition: "all 0.3s ease"
              }}
            >
              Consultants
            </button>
            <button 
              onClick={() => setActiveTab("developer")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: activeTab === "developer" ? "#2c5364" : "#e5e7eb",
                color: activeTab === "developer" ? "white" : "#4b5563",
                border: "none",
                transition: "all 0.3s ease"
              }}
            >
              Développeurs
            </button>
          </div>

          {/* Postes disponibles */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem"
          }}>
            {positions[activeTab].map((position, index) => (
              <div key={index} style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "2rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                textAlign: "left",
                transition: "transform 0.3s ease",
                border: "1px solid #eaeaea"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <h3 style={{ 
                  color: "#2c5364", 
                  marginBottom: "0.75rem", 
                  fontSize: "1.25rem",
                  fontWeight: "600"
                }}>
                  {position.title}
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>{position.description}</p>
                <div style={{
                  backgroundColor: "rgba(44, 83, 100, 0.08)",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem"
                }}>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    color: "#2c5364", 
                    fontWeight: "500",
                    marginBottom: "0.5rem"
                  }}>
                    Profil recherché:
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>{position.requirements}</p>
                </div>
                <a href="#application-form" style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  color: "#2c5364",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "2px solid #2c5364",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = "#2c5364";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#2c5364";
                }}
                >
                  <span>Postuler</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>

          {/* Formulaire de candidature */}
          <div id="application-form" style={{
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left"
          }}>
            <h3 style={{ 
              fontWeight: "600", 
              fontSize: "1.4rem", 
              color: "#2c5364", 
              marginBottom: "2rem"
            }}>
              Envoyez-nous votre candidature
            </h3>

            <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}>
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
                type="tel" 
                placeholder="Téléphone" 
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

              <select 
                required
                style={{ 
                  padding: "1rem 1.2rem", 
                  borderRadius: "8px", 
                  border: "1px solid #e0e0e0",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  outline: "none",
                  backgroundColor: "white",
                  appearance: "none",
                  backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%232c5364\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1rem"
                  
                }}
                onFocus={e => e.target.style.borderColor = "#2c5364"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
              >
                <option value="Sélectionnez" disabled selected>Poste souhaité</option>
                {positions.consultant.map((position, index) => (
                  <option key={`consultant-${index}`} value={position.title}>
                    {position.title}
                  </option>
                ))}
                {positions.developer.map((position, index) => (
                  <option key={`developer-${index}`} value={position.title}>
                    {position.title}
                  </option>
                ))}
                <option value="other">Autre (préciser dans le message)</option>
              </select>
              
              <textarea 
                placeholder="Votre message (présentez-vous, vos motivations, expériences...)" 
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

              {/* Upload CV */}
              <div style={{
                border: "2px dashed #e0e0e0",
                borderRadius: "8px",
                padding: "1.5rem",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = "#2c5364"}
              onMouseOut={e => e.currentTarget.style.borderColor = "#e0e0e0"}
              >
                <label htmlFor="cv-upload" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer"
                }}>
                  <Upload size={24} color="#2c5364" />
                  <span style={{ fontWeight: "500", color: "#2c5364" }}>
                    {fileName ? `Fichier sélectionné: ${fileName}` : "Téléchargez votre CV (PDF, Word)"}
                  </span>
                  <p style={{ fontSize: "0.9rem", color: "#666", margin: "0.5rem 0 0 0" }}>
                    Cliquez ou glissez-déposez votre fichier ici
                  </p>
                </label>
                <input 
                  type="file" 
                  id="cv-upload" 
                  accept=".pdf,.doc,.docx" 
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginTop: "0.5rem" }}>
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  required
                  style={{ 
                    width: "18px", 
                    height: "18px", 
                    marginTop: "0.25rem",
                    accentColor: "#2c5364"
                  }}
                />
                <label htmlFor="privacy-consent" style={{ fontSize: "0.9rem", color: "#666", textAlign: "left" }}>
                  J'accepte que mes données personnelles soient traitées conformément à la politique de confidentialité de Consultant-SI.fr pour le traitement de ma candidature.
                </label>
              </div>
              
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
                  transition: "all 0.3s ease",
                  marginTop: "0.5rem"
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
                {formStatus.submitted ? <CheckCircle size={18} /> : "Envoyer ma candidature"}
              </button>
              
              {formStatus.submitted && (
                <div style={{
                  marginTop: "1rem",
                  color: "#2e7d32",
                  backgroundColor: "#e8f5e9",
                  padding: "0.75rem",
                  borderRadius: "6px",
                  fontWeight: "500",
                  textAlign: "center"
                }}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}