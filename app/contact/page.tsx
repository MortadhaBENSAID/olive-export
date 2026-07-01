import QuoteForm from "../QuoteForm";

export default function Page() {
  return (
    <main style={{ padding: "80px" ,color: "#000", background: "#fff"}}>

      <h1 style={{

            marginBottom: "33px",
            padding: "12px 12px",
            textDecoration: "underline",

          }}>Contact</h1>
       
      <QuoteForm />
    </main>
  );
}
