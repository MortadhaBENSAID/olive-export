"use client";
import QuoteForm from "./QuoteForm";
export default function Home() {

  

  return (
    
    <main style={{ fontFamily: "Inter, Arial", color: "#1f1f1f" }}>


      <section style={{
        padding: "120px 60px",
        background: "linear-gradient(to right, #f5f1e6, #ffffff)"
      }}>
        <p style={{ letterSpacing: "2px", color: "#6b7a5c" }}>
          TUNISIAN OLIVE OIL EXPORT
        </p>

        <h1 style={{
          fontSize: "56px",
          marginTop: "20px",
          maxWidth: "800px",
          fontWeight: "600"
        }}>
          Bulk Olive Oil Supplier from Tunisia - Export Worldwide
        </h1>

        <p style={{
          fontSize: "18px",
          marginTop: "20px",
          maxWidth: "700px",
          color: "#555"
        }}>
          We are a direct Tunisian olive oil producer supplying bulk extra virgin olive oil and private label solutions to distributors, wholesalers, and food brands worldwide.</p>

        <a href="#quote" style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 26px",
          background: "#556B2F",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}>
          Get FOB Price & Quote
        </a>
     
      </section>

            <section style={{
        padding: "80px 60px",
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px"
      }}>

        <div>
          <h3>🇹🇳 Origin Tunisia</h3>
          <p>High-quality Mediterranean olive groves with controlled harvesting.</p>
        </div>

        <div>
          <h3>🧪 Lab Tested</h3>
          <p>Each batch is tested for acidity, purity, and international compliance.</p>
        </div>

        <div>
          <h3>🚢 Export Ready</h3>
          <p>Bulk logistics: IBC tanks, drums, and full container shipments.</p>
        </div>

      </section>

      <section style={{
        padding: "80px 60px",
        background: "#f5f1e6",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center"
      }}>

        <div>
          <h2>+500T</h2>
          <p>Annual Capacity</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Export Countries</p>
        </div>

        <div>
          <h2>24h</h2>
          <p>Quote Response</p>
        </div>

      </section>


      {/* FEATURES */}
      <section style={{
        padding: "80px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        background: "#fff"
      }}>
        <div>
          <h3>Cold Pressed</h3>
          <p>Premium extra virgin olive oil extracted at low temperature.</p>
        </div>

        <div>
          <h3>Export Certified</h3>
          <p>Meets EU & international food safety standards.</p>
        </div>

        <div>
          <h3>Bulk Supply</h3>
          <p>IBC, drums 200L, flexitank shipments worldwide.</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{
        padding: "80px 60px",
        background: "#f5f1e6"
      }}>
        <h2>Export Solutions</h2>

        <ul style={{ fontSize: "18px", marginTop: "20px", lineHeight: "2" }}>
          <li>Extra Virgin Olive Oil (Premium Grade)</li>
          <li>Virgin Olive Oil</li>
          <li>Organic Certified Olive Oil</li>
          <li>Private Label Manufacturing</li>
          <li>Bulk Industrial Supply (B2B Export)</li>
        </ul>
      </section>

      {/* FORM */}
      <section id="quote" style={{ padding: "80px 60px" }}>
        <h2>Request a Quote</h2>


       <QuoteForm />       
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 60px",
        background: "#1f1f1f",
        color: "white",
        marginTop: "40px"
      }}>
        <p>© Tunisian Olive Oil Export - Mediterranean Quality</p>
      </footer>
      
      <a
  href="https://wa.me/216XXXXXXXX"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "14px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  }}
>
  WhatsApp Export
</a>


    </main>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px"
};

const buttonStyle = {
  padding: "14px",
  background: "#556B2F",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

