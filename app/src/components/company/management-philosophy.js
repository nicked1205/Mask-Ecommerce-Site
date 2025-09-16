const ManagementPhilosophy = () => {
  const visions = [
    {
      title: "Human Management",
      bigtext: "Human",
      description: "We promote people-centered management.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // example teamwork image
      orientation: "left"
    },
    {
      title: "Respect for Life",
      bigtext: "Life",
      description: "We are committed to protecting the safety of all.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      orientation: "right"
    },
    {
      title: "Customer Value",
      bigtext: "Value",
      description: "Customers are our family.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      orientation: "left"
    },
    {
      title: "Pursuit for Innovation",
      bigtext: "Innovation",
      description: "We pursue creative innovation.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      orientation: "right"
    }
  ];
  return (
    <div className="pt-20 pb-16 px-6 md:px-20 lg:px-40">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Corporate Vision
      </h1>

      <p className="text-center text-lg md:text-xl font-medium text-gray-700 mb-12 max-w-3xl mx-auto">
        As a people-centered company that manufactures fire evacuation supplies,
        <br />
        Saving Story places the highest priority on protecting human life.
      </p>
      <div className="flex flex-col gap-10">
      {visions.map((vision, index) => (
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className={`flex-1 ${vision.orientation === "right" ? "md:order-2" : "md:order-1"}`}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" // example teamwork image
              alt="Human Management"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className={`flex-1 text-center md:text-left ${vision.orientation === "right" ? "md:order-1" : "md:order-2"}`}>
            <h2 className="text-3xl font-bold mb-4">{vision.title}</h2>
            <p className="text-gray-700 text-lg">
              {vision.description}
            </p>
            <span
              className="text-gray-300 font-bold text-[4rem] md:text-[3rem] lg:text-[4rem] opacity-20 select-none pointer-events-none"
            >
              {vision.bigtext}
            </span>
          </div>
        </div>
      ))}
      </div>  
    </div>
  );
};

export default ManagementPhilosophy;