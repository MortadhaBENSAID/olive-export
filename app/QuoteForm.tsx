"use client";

import { useState } from "react";

export default function QuoteForm() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const data = {
        company: formData.get("company"),
        country: formData.get("country"),
        email: formData.get("email"),
        volume: formData.get("volume"),
        message: formData.get("message"),
      };

      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Request sent!");
      form.reset();
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "44px",
      maxWidth: "450px"
    }}>

      <input name="company" placeholder="Company Name" />
      <input name="country" placeholder="Country" />
      <input name="email" placeholder="Email" />
      <input name="volume" placeholder="Volume (liters)" />

      <textarea
        name="message"
        placeholder="Additional details"
        style={{ padding: "12px", minHeight: "100px" }}
      />

      <button type="submit">
         <a href="#quote" style={{
            display: "inline-block",
            marginTop: "0px",
            padding: "14px 10px",
            background: "#556B2F",
            color: "white",
            textDecoration: "none",
            borderRadius: "18px"
          }}>
          Send Request          
          </a>
        
      </button>

    </form>
  );
}