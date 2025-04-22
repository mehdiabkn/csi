"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: "#0f2027",
      color: "white",
      padding: "4rem 2rem 2rem",
      fontSize: "0.875rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {/* Colonne 1: Logo et description */}
        <div style={{ textAlign: "left" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ 
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontFamily: "'Segoe UI', Arial, sans-serif",
              fontWeight: "bold",
              marginBottom: "1.5rem"
            }}>
              <span style={{ 
                fontSize: "1.8rem", 
                color: "#ffffff", 
                letterSpacing: "-0.5px"
              }}>c</span>
              <span style={{ 
                fontSize: "1.8rem", 
                color: "#4a9cb5",  // Version plus claire pour meilleur contraste sur fond foncé
                fontWeight: "800",
                position: "relative",
                letterSpacing: "-1px"
              }}>S</span>
              <span style={{ 
                fontSize: "1.8rem", 
                color: "#ffffff",
                letterSpacing: "-0.5px",
                marginRight: "5px" 
              }}>i</span>
              
            </div>
          </Link>
          
          <p style={{ lineHeight: "1.6", opacity: "0.8", marginBottom: "1.5rem" }}>
            Experts en transformation digitale, sécurisation des infrastructures et développement de solutions sur mesure.
          </p>
          
          <div style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem"
          }}>
            {/* Icônes de réseaux sociaux - version simple pour ne pas dépendre d'une bibliothèque */}
            <a href="https://www.linkedin.com/in/mohamed-aberkane-49334718/" target="_blank" rel="noopener noreferrer" style={{ 
              width: "32px", 
              height: "32px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              backgroundColor: "rgba(255,255,255,0.1)", 
              borderRadius: "50%",
              transition: "all 0.3s ease"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ display: "block" }}>
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
</svg>

</a>
           
          </div>
        </div>
        
        {/* Colonne 2: Liens utiles */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ 
            fontSize: "1.1rem", 
            fontWeight: "600", 
            marginBottom: "1.5rem",
            position: "relative",
            paddingBottom: "0.75rem"
          }}>
            Navigation
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50px",
              height: "3px",
              backgroundColor: "#4a9cb5",
              borderRadius: "2px"
            }}></span>
          </h3>
          
          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            margin: 0, 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.8rem" 
          }}>
            <li>
              <Link href="/" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link href="/nous-rejoindre" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Nous rejoindre
              </Link>
            </li>
            <li>
              <Link href="#contact" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Colonne 3: Mentions légales */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ 
            fontSize: "1.1rem", 
            fontWeight: "600", 
            marginBottom: "1.5rem",
            position: "relative",
            paddingBottom: "0.75rem"
          }}>
            Informations légales
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50px",
              height: "3px",
              backgroundColor: "#4a9cb5",
              borderRadius: "2px"
            }}></span>
          </h3>
          
          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            margin: 0, 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.8rem" 
          }}>
            <li>
              <Link href="/mentions-legales" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Politique de confidentialité
              </Link>
            </li>

            <li>
              <Link href="/cookies" style={{
                color: "white",
                opacity: 0.8,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                display: "block"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              >
                Gestion des cookies
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Colonne 4: Contact */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ 
            fontSize: "1.1rem", 
            fontWeight: "600", 
            marginBottom: "1.5rem",
            position: "relative",
            paddingBottom: "0.75rem"
          }}>
            Contactez-nous
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50px",
              height: "3px",
              backgroundColor: "#4a9cb5",
              borderRadius: "2px"
            }}></span>
          </h3>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <a href="tel:+33680881668" style={{
              color: "white",
              opacity: 0.8,
              textDecoration: "none",
              transition: "opacity 0.3s ease"
            }}
            onMouseOver={e => e.currentTarget.style.opacity = 1}
            onMouseOut={e => e.currentTarget.style.opacity = 0.8}
            >
              +33 6 80 88 16 68
            </a>
            
            <a href="mailto:contact@consultant-si.fr" style={{
              color: "white",
              opacity: 0.8,
              textDecoration: "none",
              transition: "opacity 0.3s ease"
            }}
            onMouseOver={e => e.currentTarget.style.opacity = 1}
            onMouseOut={e => e.currentTarget.style.opacity = 0.8}
            >
              contact@consultant-si.fr
            </a>
            
            <address style={{ 
              fontStyle: "normal", 
              opacity: 0.8, 
              marginTop: "0.5rem",
              lineHeight: "1.6"
            }}>
              66 Avenue des Champs Elysées<br />
              75008 Paris, France
            </address>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation */}
      <div style={{
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.1)",
        margin: "0 auto 1.5rem"
      }}></div>
      
      {/* Copyright */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        opacity: 0.7,
        fontSize: "0.8rem"
      }}>
        <div>
          © {currentYear} Consultant-si.fr - Tous droits réservés
        </div>
        
        <div>
          Conçu par l'équipe CSI
        </div>
      </div>
    </footer>
  );
}