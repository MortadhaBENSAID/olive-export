export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-[#F8F6F1] py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">

          <span className="uppercase tracking-[0.3em] text-green-700 font-medium">
            Our Story
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            A Family Heritage,
            <br />
            Rooted in Tunisia
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the fertile hills of Le Kef to the sun-drenched landscapes of
            Gafsa, our olive oil is the expression of generations of family
            tradition, exceptional terroirs and an uncompromising commitment to quality.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-16">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            About Us
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-9">

            <p>
              Our story begins long before the creation of our company.
              It began with our families, whose lives have been closely connected
              to olive cultivation for generations. Across the fertile lands of
              <strong> Le Kef</strong>, in northwestern Tunisia, and the historic
              region of <strong>Gafsa</strong>, in the south, olive growing has
              always been more than agriculture—it is a heritage passed from one
              generation to the next.
            </p>

            <p>
              Together, our family-owned estates extend over more than
              <strong> 300 hectares</strong>, bringing together thousands of olive
              trees carefully cultivated with respect for nature and traditional
              farming practices. Each region contributes its own identity:
              the Mediterranean climate and fertile soils of Le Kef produce
              elegant and balanced oils, while the dry, mineral-rich landscapes
              of Gafsa create olives with remarkable depth and intensity.
            </p>

            <p>
              This unique combination of northern and southern terroirs gives our
              olive oil a distinctive character that reflects the richness and
              diversity of Tunisia's olive-growing heritage.
            </p>

            <p>
              Every harvest is carried out at the optimal stage of ripeness, and
              the olives are cold extracted within hours to preserve their natural
              freshness, antioxidants and aromatic complexity. Every batch is
              carefully selected to ensure consistency, purity and exceptional quality.
            </p>

            <p>
              Today, we proudly bring this family heritage to international markets, 
              building long-term partnerships with wholesalers, distributors, retailers,
              food service professionals, private label brands, and selected import partners
              who share our commitment to authenticity, uncompromising quality, 
              complete traceability, and reliable supply.
            </p>

            <p>
              Our ambition extends far beyond exporting olive oil. We are committed to showcasing
              the excellence of Tunisia's finest terroirs while preserving the values that have 
              guided our families for generations: integrity, respect for the land, and an uncompromising
              pursuit of excellence.
            </p>

          </div>

        </div>

      </section>

      {/* Numbers */}

      <section className="bg-[#F8F6F1] py-24 px-6 md:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-5xl font-bold text-green-700">
                300+
              </h3>
              <p className="mt-3 text-gray-600">
                Hectares of Olive Groves
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-700">
                40,000+
              </h3>
              <p className="mt-3 text-gray-600">
                Olive Trees
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-700">
                100%
              </h3>
              <p className="mt-3 text-gray-600">
                Family-Owned Production
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Closing Quote */}

      <section className="py-24 px-6 md:px-16">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-3xl italic text-gray-800 leading-relaxed">
            "Every olive tells the story of our land.
            Every drop reflects generations of dedication,
            craftsmanship and respect for nature."
          </p>

        </div>

      </section>

    </main>
  );
}