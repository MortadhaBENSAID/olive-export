export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="w-full py-24 px-6 md:px-16 lg:px-32 bg-[#f8f7f3]">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Organic Extra Virgin Olive Oil
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Authentic Tunisian olive oil for international B2B markets.
            Traceable, consistent, and carefully selected from family-owned groves.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-green-700 text-white rounded-lg">
              Request Wholesale Pricing
            </button>
            <button className="px-6 py-3 border border-green-700 text-green-700 rounded-lg">
              Become a Partner
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            About Us
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              Our company was founded by two engineers driven by a shared vision:
              to structure and export a premium, traceable Tunisian extra virgin olive oil
              to international markets.
            </p>

            <p>
              With backgrounds in electrical and mechanical engineering, we apply a
              structured and quality-driven approach to every step of the supply chain.
              Our focus is reliability, consistency, and long-term value.
            </p>

            <p>
              Our olive oil comes from family-owned groves located in two historic
              regions of Tunisia: Kef and Gafsa. These lands are known for their rich
              soil and traditional olive cultivation.
            </p>

            <p>
              We are transforming this agricultural heritage into a structured export
              product meeting international B2B standards, with full traceability and
              strict quality control.
            </p>

            <p>
              Our initial focus is on France and the United Kingdom, working with
              importers, distributors, private label brands, and food professionals.
            </p>

          </div>

        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-[#f8f7f3]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Product
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            We supply premium extra virgin olive oil designed for professional use.
          </p>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>• 100% organic cultivation</li>
            <li>• Cold extraction process</li>
            <li>• Low acidity & rich sensory profile</li>
            <li>• Batch traceability</li>
            <li>• Export-ready logistics</li>
          </ul>

          <p className="mt-8 text-gray-700">
            Available in bulk, private label, and retail-ready formats.
          </p>

        </div>
      </section>

      {/* QUALITY */}
      <section className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Quality & Traceability
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            We ensure full control from grove to shipment: harvesting supervision,
            batch selection, laboratory testing, and standardized export processes.
            Our objective is to guarantee consistent quality at scale.
          </p>

        </div>
      </section>

      {/* MARKET FOCUS */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-[#f8f7f3]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Market Focus
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            We currently focus on:
          </p>

          <ul className="space-y-3 text-lg text-gray-700">
            <li>• France</li>
            <li>• United Kingdom</li>
          </ul>

          <p className="mt-6 text-gray-700">
            And we are expanding toward Europe and international markets.
          </p>

        </div>
      </section>

      {/* VISION */}
      <section className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Vision
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            To become a trusted reference in premium Tunisian olive oil exports
            by combining agricultural heritage, engineering discipline, and
            modern supply chain standards.
          </p>

          <p className="mt-6 text-lg font-medium text-gray-900">
            We do not aim to reinvent olive oil — we aim to structure its origin
            into a reliable international product.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-green-800 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s build a long-term partnership
          </h2>

          <p className="text-lg mb-10">
            We work with importers, distributors, and private label brands worldwide.
          </p>

          <button className="px-8 py-4 bg-white text-green-800 font-semibold rounded-lg">
            Contact Sales
          </button>

        </div>
      </section>

    </main>
  );
}