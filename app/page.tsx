"use client";
import QuoteForm from "./QuoteForm";

export default function Home() {
  return (

    <main style={{ fontFamily: "Inter, Arial", color: "#1f1f1f",  margin: 0,
  padding: 0 ,}}>

      {/* HERO */}

      
      <section style={{
        padding: "120px 60px",
        background: "linear-gradient(to right, #f5f1e6, #ffffff)",
        display: "grid",

 
        alignItems: "center"
      }}>
          <p style={{ letterSpacing: "2px", color: "#55a504" }}>
            TUNISIAN OLIVE OIL EXPORT
          </p>
          
          <h1 style={{
            fontSize: "56px",
            marginTop: "20px",
            fontWeight: "600"
          }}>
            Bulk Olive Oil Supplier from Tunisia - Export Worldwide
          </h1 >
        </section>






<section style={{
        padding: "0px 30px",
        background: "linear-gradient(to right, #f5f1e6, #ffffff)",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
        alignItems: "center"
      }}>
          <p style={{
            fontSize: "18px",
            marginTop: "0px",
            color: "#555"
          }}>
            We are a direct Tunisian olive oil producer supplying bulk extra virgin olive oil and private label solutions to distributors worldwide.
          </p>
        <img src="/images/femme_recolt.jfif" 
          alt="olive oil export"
          style={{
            width: "100%",
            borderRadius: "1px",
            objectFit: "cover"
          }}/>
        


        
      </section>

<section style={{
        padding: "60px 30px",
        background: "linear-gradient(to right, #f5f1e6, #ffffff)",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
        alignItems: "center"
      }}>

        <img src="/images/plusieurs femme_recolt.jfif" 
          alt="olive oil export"
          style={{
            width: "100%",
            borderRadius: "1px",
            objectFit: "cover"
          }}/>
        
          <p style={{
            fontSize: "18px",
            marginTop: "0px",
            color: "#555"
          }}>
            We are a direct Tunisian olive oil producer supplying bulk extra virgin olive oil and private label solutions to distributors worldwide.
          </p>

        
      </section>



            <section style={{
        padding: "80px 60px",
        background: "#fff",
        display: "grid",

        gap: "30px"
      }}>

<img src="/images/homeimage.png" 
          alt="olive oil export"
          style={{
            width: "100%",
            borderRadius: "1px",
            objectFit: "cover"
          }}/>
      {/* TRUST SECTION */}

      
      </section>
          <section style={{
        padding: "80px 60px",
        background: "#fff",
 
        /*gridTemplateColumns: "repeat(2, 1fr)",*/
        gap: "30px"
      }}>
            <a href="#quote" style={{
            display: "inline-block",
            marginTop: "0px",
            padding: "14px 16px",
            background: "#556B2F",
            color: "white",
            textDecoration: "none",
            borderRadius: "18px"
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
          <img
            src="/images/origin.jfif"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>🇹🇳 Origin Tunisia</h3>
          <p>High-quality Mediterranean olive groves with controlled harvesting.</p>
        </div>

        <div>
          <img
            src="/images/qualitytest.jfif"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>🧪 Lab Tested</h3>
          <p>Each batch is tested for acidity, purity, and compliance.</p>
        </div>

        <div>
          <img
            src="/images/exportready.jfif"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>🚢 Export Ready</h3>
          <p>Bulk logistics: containers, drums, and flexitank shipments.</p>
        </div>

      </section>

      {/* STATS */}
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
          <img
            src="/images/coldpressure.jfif"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>Cold Pressed</h3>
          <p>Premium extra virgin olive oil extracted at low temperature.</p>
        </div>

        <div>
          <img
            src="/images/certifyed1.jfif"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>Export Certified</h3>
          <p>Meets EU & international food safety standards.</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>Bulk Supply</h3>
          <p>IBC tanks, drums, flexitank worldwide export.</p>
        </div>

      </section>

      {/* PRODUCTS */}
      <section style={{
        padding: "80px 60px",
        background: "#f5f1e6",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px"
      }}>
<div> 
        <h1>Export Solutions</h1>
      <ul style={{ fontSize: "18px", marginTop: "20px", lineHeight: "2" }}>
          <li>Extra Virgin Olive Oil (Premium Grade)</li>
          <li>Virgin Olive Oil</li>
          <li>Organic Certified Olive Oil</li>
          <li>Private Label Manufacturing</li>
          <li>Bulk Industrial Supply (B2B Export)</li>
        </ul>
        </div> 
        <img
          src="/images/exportation solution.jfif"
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "12px"
          }}
        />
        </section>


      {/* FORM */}
      <section id="quote" style={{ padding: "80px 60px", background: "#fff"
       }}>
        <h2>Request a Quote</h2>
        <QuoteForm />
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 60px",
        background: "#1f1f1f",
        color: "white"
      }}>
        <p>© Tunisian Olive Oil Export - Mediterranean Quality</p>
      </footer>

      {/* WHATSAPP */}
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
          fontWeight: "bold"
        }}
      >
        WhatsApp Export
      </a>

    </main>
  );
}