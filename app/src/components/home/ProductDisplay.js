import Mask from '../../assets/mask/mask-1.jpg';

export default function ProductDisplay({ orientation = 'left', id = "01" }) {
  return (
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 md:aspect-[2/1] mt-20 md:mt-0">        
        <div className={`md:w-1/2 text-left space-y-6 ${orientation === 'right' ? 'md:order-2' : ''}`}>
          <div className="relative">
            <span className="absolute text-brand-textMuted text-[120px] font-bold -top-24 -left-2 opacity-20 select-none">{id}</span>
            <h1 className="text-4xl font-bold text-brand-text leading-snug">
              O<sub>2</sub> Dream Life Saving Mask
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            『O<sub>2</sub> Dream Life Saving Mask』 has been certified by the Ministry of the Interior and Safety as a disaster safety product. Developed as a mask version of Life Saving Towel, this product frees both hands of the user in case of fire, enabling the user to evacuate from toxic gas safely.
          </p>

          <button className="flex items-center px-6 py-3 bg-brand-surface border border-brand-border rounded-full shadow hover:bg-gray-100 duration-300 transition text-brand-text font-medium">
             <a href="/products/mask">VIEW MORE <span className="text-brand-primary ml-2 text-xl">+</span></a>
          </button>
        </div>

        <div className={`md:w-1/2 mt-10 md:mt-0 flex justify-center relative ${orientation === 'right' ? 'md:order-1' : ''}`}>
          <img
            src={Mask}
            alt="Life Saving Towel"
            className="w-[90%] relative z-10 md:ml-16 rounded-lg shadow-lg"
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