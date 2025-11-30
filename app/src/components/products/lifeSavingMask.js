import MaskPackage from '../../assets/mask/mask-package-front.jpg';

const ProductLifeSavingMask = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* ================== HERO ================== */}
      <section className="pt-12 text-center">
        <h1 className="text-[38px] font-medium text-[#333]">Life Saving Mask</h1>
      </section>

      <section
      style={{backgroundImage: 'url(/mask-background.jpg)'}}
      className="flex flex-col lg:flex-row items-center justify-between mt-10 px-6 md:px-20 py-14 gap-10">
        {/* Text */}
        <div className="lg:w-1/2 space-y-5 leading-relaxed text-[18px] text-[#444] bg-white/90 p-6 rounded-md shadow-md">
          <p>
            <span className="font-bold text-[22px] text-gray-900">
              O₂ Dream Life Saving Mask
            </span>{" "}
            is a mask version of Life Saving Towel that has been certified by the{" "}
            <span className="font-semibold text-[#b50000]">
              Ministry of the Interior and Safety
            </span>{" "}
            as a disaster safety product, and the{" "}
            <span className="font-semibold text-[#b50000]">
              National Fire Agency
            </span>{" "}
            as a new firefighting product.
          </p>
          <p>
            This is a{" "}
            <span className="font-semibold text-gray-900">
              disaster safety product
            </span>{" "}
            that frees both hands of a user in case of fire, enabling the user to
            evacuate from toxic gas safely.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center translate-y-24">
          <img
            src={MaskPackage}
            alt="Life Saving Mask"
            className="max-w-[500px] w-full"
          />
        </div>
      </section>

      {/* ================== VIDEO SECTION ================== */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-20 bg-[#fdfdfd] gap-10">
        <h2 className="text-[22px] font-semibold text-[#222] lg:w-1/3">
          Video of Life Saving Mask Verification Test
        </h2>
        <div className="lg:w-2/3 w-full">
          <video
            className="rounded-md shadow-md w-full"
            controls
            poster="/images/products/life-saving-mask/video-thumbnail.jpg"
          >
            <source src="/videos/life-saving-mask.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================== PRODUCT COMPOSITION ================== */}
      <section className="px-6 md:px-20 py-20 flex flex-col lg:flex-row items-start gap-12 bg-white">
        <div className="lg:w-1/3">
          <h2 className="text-[28px] font-semibold text-[#222] leading-snug">
            Life Saving Mask <br />
            Product Composition
          </h2>
        </div>

        <div className="lg:w-2/3 space-y-6 text-[17px] text-gray-700">
          <p>
            O₂ Dream Life Saving Mask is available as a single product and in
            packs of two, four, or ten, which can be used depending on the space
            or as necessary.
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <img
              src="/images/mask-general-1.jpg"
              alt="Mask Composition"
              className="w-full md:w-[60%] rounded-md"
            />
            <div className="flex flex-col space-y-4 text-[16px] text-gray-700 my-auto">
              <div className="flex items-start gap-4">
                <div className="bg-[#eee] text-gray-900 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap w-[30%]">
                  Single Product
                </div>
                <p>Carried by a person or stored in cars without storage case</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#eee] text-gray-900 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap w-[30%]">
                  Two Products
                </div>
                <p>
                  For one/two-person households and accommodation facilities
                  such as hotels
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#eee] text-gray-900 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap w-[30%]">
                  Four Products
                </div>
                <p>
                  For residential space such as apartment house, or small
                  offices
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#eee] text-gray-900 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap w-[30%]">
                  Ten Products
                </div>
                <p>For public establishments, offices, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== HOW TO USE ================== */}
      <section className="px-6 md:px-20 py-20 bg-[#fafafa]">
        <h2 className="text-[28px] font-semibold mb-10 text-[#222]">
          How to Use Life Saving Mask
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* STEP 1 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="/images/products/life-saving-mask/step1.png"
              alt="Step 1"
              className="w-[120px]"
            />
            <button className="bg-[#e60000] text-white px-6 py-1 rounded-full font-semibold">
              01. Open
            </button>
            <p className="text-[15px] text-gray-700">
              Quickly open the package by selecting one of 12 perforated lines
            </p>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="/images/products/life-saving-mask/step2.png"
              alt="Step 2"
              className="w-[120px]"
            />
            <button className="bg-[#e60000] text-white px-6 py-1 rounded-full font-semibold">
              02. Remove cover
            </button>
            <p className="text-[15px] text-gray-700">
              Remove the film cover of the oxygen generator inside the mask
            </p>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="/images/products/life-saving-mask/step3.png"
              alt="Step 3"
              className="w-[120px]"
            />
            <button className="bg-[#e60000] text-white px-6 py-1 rounded-full font-semibold">
              03. Put on mask
            </button>
            <p className="text-[15px] text-gray-700 leading-snug">
              After putting on the mask, secure it tightly against face to
              prevent the inflow of smoke
              <br />
              <span className="text-[14px] text-gray-500">
                (short yellow strings for children and women)
              </span>
            </p>
          </div>

          {/* STEP 4 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="/images/products/life-saving-mask/step4.png"
              alt="Step 4"
              className="w-[120px]"
            />
            <button className="bg-[#e60000] text-white px-6 py-1 rounded-full font-semibold">
              04. Evacuate
            </button>
            <p className="text-[15px] text-gray-700">
              Evacuate to a safe place, keeping the body hunched, within 15
              minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLifeSavingMask;
