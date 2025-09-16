export default function ProductDisplay({ orientation = 'left', id = "01" }) {
  return (
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 md:aspect-[2/1] mt-20 md:mt-0">        
        <div className={`md:w-1/2 text-left space-y-6 ${orientation === 'right' ? 'md:order-2' : ''}`}>
          <div className="relative">
            <span className="absolute text-gray-400 text-[120px] font-bold -top-24 -left-2 opacity-20 select-none">{id}</span>
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Life Saving Towel <br /> O<sub>2</sub> Dream
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            『Life Saving Towel O<sub>2</sub> Dream』 is a safety product and a daily necessity that is crucial in saving lives in case of fire by securing the golden time for safe evacuation through the prevention of suffocation due to smoke and toxic gas.
          </p>

          <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 duration-300 transition text-gray-800 font-medium">
            VIEW MORE <span className="text-red-600 ml-2 text-xl">+</span>
          </button>
        </div>

        <div className={`md:w-1/2 mt-10 md:mt-0 flex justify-center relative ${orientation === 'right' ? 'md:order-1' : ''}`}>
          <img
            src="/images/product-main.png"
            alt="Life Saving Towel"
            className="w-80 md:w-[400px] relative z-10"
          />
          {/* <img
            src="/images/product-bg.png"
            alt="Background"
            className="absolute top-10 right-0 w-64 opacity-90 hidden md:block"
          /> */}
        </div>
      </div>
  );
}