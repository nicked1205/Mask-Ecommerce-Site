export default function PartnersSection() {
  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
    "/images/partner6.png",
    "/images/partner7.png",
    "/images/partner8.png",
    "/images/partner9.png",
    "/images/partner10.png",
    "/images/partner11.png",
    "/images/partner12.png",
    "/images/partner13.png",
    "/images/partner14.png",
    "/images/partner15.png",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Our Partners</h2>
        <p className="text-gray-700 mb-12">
          Many companies and government organizations are using the products of Saving Story.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition duration-300"
            >
              <img
                src="/images/product-main.png"
                alt={`Partner ${index + 1}`}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}