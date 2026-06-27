export default function Page() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial", lineHeight: "1.6" , color: "#000000", background: "#ffffff"}}>
      
      <h1>Bulk Extra Virgin Olive Oil Export from Tunisia</h1>

      <p>
        We are a Tunisian olive oil supplier specializing in bulk extra virgin olive oil
        for international distributors, wholesalers, and private label brands.
      </p>

      <h2>Bulk Supply Options</h2>
      <ul>
        <li>IBC Tanks (1000L)</li>
        <li>200L Drums</li>
        <li>Flexitank Shipments</li>
        <li>Full Container Loads (FCL)</li>
      </ul>

      <h2>Private Label Manufacturing</h2>
      <p>
        We offer full private label production including bottling, labeling, and packaging.
      </p>

      <h2>Quality Assurance</h2>
      <p>
        Cold pressed extra virgin olive oil, laboratory tested and export certified.
      </p>

      <a href="/" style={{
        display: "inline-block",
        marginTop: "30px",
        padding: "12px 20px",
        background: "#556B2F",
        color: "white",
        textDecoration: "none"
      }}>
        Request a Quote
      </a>
        <a href="#quote" style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "14px 26px",
            background: "#556B2F",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
            }}>
            Get FOB Price & Quote
        </a>

    </main>
  );
}