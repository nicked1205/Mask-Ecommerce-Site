const RecruitmentBanner = () => {
  return (
    <div className="relative w-full pt-24">
      <h1 className="text-3xl font-medium mb-6">Recruitment</h1>
      <div className="relative w-full h-[500px]">
        <img
          src="/recruitment-bg.png"
          alt="Recruitment Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Performance-based System
          </h1>
          <p className="max-w-3xl text-white text-sm md:text-base leading-relaxed">
            In the era of infinite competition, securing competent talents is
            directly related to corporate growth. Therefore, Saving Story is
            operating a reasonable, fair HR system based on individual
            capabilities and a strictly performance-based reward system.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-10 mt-12">
            <div className="flex flex-col items-center justify-center h-40 md:h-48 aspect-square rounded-full border-2 border-gray-300 bg-black/60 text-white p-1">
              {/* <Users className="w-10 h-10 mb-3" /> */}
              <span className="text-sm md:text-base text-center font-medium">
                Reasonable and fair <br /> HR management system
              </span>
            </div>

            <span className="text-white text-4xl font-bold">+</span>

            <div className="flex flex-col items-center justify-center h-40 md:h-48 aspect-square rounded-full border-2 border-gray-300 bg-black/60 text-white p-1">
              {/* <Flag className="w-10 h-10 mb-3" /> */}
              <span className="text-sm md:text-base text-center font-medium">
                Strictly <br /> performance-based reward
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentBanner;
