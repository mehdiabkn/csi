"use client";

export default function References() {
  const logos = [
    "/siemens.svg",
    "/viaposte.svg",
    "/korber.svg"
  ];

  return (
    <section style={{
      backgroundColor: "#fff",
      padding: "2rem 0",
      overflow: "hidden",
      position: "relative",
      borderTop: "1px solid #e0e0e0",
      borderBottom: "1px solid #e0e0e0"
    }}>
      <div style={{
        display: "flex",
        position: "absolute",
        animation: "scroll-loop 15s linear infinite"
      }}>
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            style={{ height: "40px", margin: "0 2rem", opacity: 0.8, flexShrink: 0 }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
