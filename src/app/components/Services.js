"use client";

export default function Services() {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      padding: "4rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        color: "#2c5364",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Infrastructure IT</h2>
        <p>Hyperconvergée (HCI)<br/>Convergée (IC)</p>
      </div>
      <div style={{
        backgroundColor: "white",
        color: "#2c5364",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Architecture réseau</h2>
        <p>Audit, conseil, support</p>
      </div>
      <div style={{
        backgroundColor: "white",
        color: "#2c5364",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Système</h2>
        <p>Windows Server, Hyper-V<br/>Failover-Clustering, VEEAM</p>
      </div>
    </section>
  );
}
