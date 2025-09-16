export default function InquirySection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-center"
      style={{
        backgroundImage: "url('/images/background.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
          Would you like to find out more about <br />
          the products of Saving Story?
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Saving Story is a company manufacturing flame-retardant products such as Life Saving
          Towel and Life Saving Mask, which are personal fire evacuation supplies. Saving Story will
          fulfill its responsibility as a protector of citizens’ lives through continuous technological
          innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#purchase"
            className="flex self-center items-center justify-center w-60 h-14 bg-gradient-to-b from-gray-800 to-black rounded-full text-white font-semibold text-lg shadow hover:opacity-90 transition duration-300"
          >
            How to Purchase
          </a>

          <a
            href="#inquiry"
            className="flex self-center items-center justify-center w-60 h-14 bg-gradient-to-b from-gray-800 to-black rounded-full text-white font-semibold text-lg shadow hover:opacity-90 transition duration-300"
          >
            To Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}