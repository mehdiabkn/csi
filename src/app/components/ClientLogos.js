"use client";

export default function ClientLogos() {
  const logos = [
    "/siemens.png",
    "/viapost.png",
    "/korber.png"
  ];

  return (
    <section style={{ padding: "2rem 1rem", textAlign: "center", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Ils nous font confiance</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            style={{
              height: "90px",
              opacity: 1,
              border: "1px solid #ddd",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              padding: "1rem",
              backgroundColor: "white"
            }}
          />
        ))}
      </div>
    </section>
  );
}