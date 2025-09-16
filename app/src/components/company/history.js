import HistoryBanner from "../../assets/images/history-banner.png";

const History = () => {
  const data = [
    {
      year: "2023",
      events: [
        {
          month: "12",
          text: [
            "Won New Firefighting Product certification from National Fire Agency (Fire Commissioner)",
            "Sanso Drim Life Saving Mask added to Disaster Safety Product certification (Minister of the Interior and Safety)",
            "Registered patent in the U.S. (Life Saving Towel with oxygen generating function)",
          ],
        },
        {
          month: "09",
          text: [
            "Won Innovation Product certification for Life Saving Towel with oxygen generating device (Minister of the Interior and Safety)",
          ],
        },
        {
          month: "05",
          text: [
            "Registered patent (Oxygen generation composition and a device thereof)",
            "Registered patent (Mask with oxygen generator including oxygen generating material)",
          ],
        },
        {
          month: "04",
          text: [
            "Won designation for trial purchase project of Public Procurement Service",
          ],
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          month: "11",
          text: [
            "Won Gold Prize at the 2022 Korea Invention Patent Exhibition (Minister of Science and ICT Award)",
          ],
        },
        {
          month: "08",
          text: ["Applied for international patent (PCT)"],
        },
        {
          month: "07",
          text: [
            "Won Disaster Safety Product certification for Sanso Drim Life Saving Towel (Minister of the Interior and Safety)",
          ],
        },
        {
          month: "06",
          text: [
            "Registered two patents (Life Saving Towel with oxygen generating function, etc.)",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
        <h1 className="pt-24 text-4xl font-semibold">History</h1>
      <div className="relative w-full h-80 mt-10">
        <img
          src={HistoryBanner}
          alt="History Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto py-20 px-6">
        <h1 className="absolute text-gray-200 font-bold text-[10rem] top-0 left-0 -z-10 select-none md:block hidden pointer-events-none">
          History
        </h1>

        <div className="relative border-l-4 border-red-900 ml-20">
          {data.map((yearData, i) => (
            <div key={i} className="md:mb-16 mb-8 relative">
              {/* Year */}
              <div className="absolute -left-24 -top-1.5 text-3xl font-bold text-gray-800">
                {yearData.year}
              </div>
              <span className="absolute -left-2.5 w-4 h-4 bg-white border-4 border-red-900 rounded-full"></span>

              {yearData.events.map((event, j) => (
                <div key={j} className="relative md:mb-10 mb-6 pl-8">
                  <span className="font-bold text-gray-700">{event.month}.</span>
                  <ul className="mt-2 space-y-1 text-gray-700 md:text-lg sm:text-sm text-xs">
                    {event.text.map((t, idx) => (
                      <li key={idx}>- {t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
