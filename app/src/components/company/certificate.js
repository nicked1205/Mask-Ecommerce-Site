import React from "react";
import PaginatedGrid from "../helper/paginatedGrid";

const certificateData = [
  {
    id: 1,
    title:
      "Fire products new product certification (National Fire Agency, Republic of Korea)",
    imgUrl: "/certificates/cert1.jpg",
  },
  {
    id: 2,
    title: "Certificate of Test Purchase Product",
    imgUrl: "/certificates/cert2.jpg",
  },
  {
    id: 3,
    title:
      "Certificate of disaster safety product (Mask) (Ministry of the Interior and Safety)",
    imgUrl: "/certificates/cert3.jpg",
  },
  {
    id: 4,
    title:
      "Certificate of disaster safety product (Towel) (Ministry of the Interior and Safety)",
    imgUrl: "/certificates/cert4.jpg",
  },
];

const Certificates = () => {
  return (
    <PaginatedGrid
      data={certificateData}
      itemsPerPage={12}
      columns={4}
      imageKey="imgUrl"
      titleKey="title"
      title="Certificates"
      renderCard={(item) => (
        <div className="flex flex-col items-center text-center">
          <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="w-full h-80 object-contain p-2"
              onError={(e) => (e.target.style.display = "none")} // hides broken images
            />
          </div>
          <p
            className="mt-4 text-gray-800 font-medium leading-snug text-center break-words w-11/12 line-clamp-2"
            title={item.title}
          >
            {item.title}
          </p>
        </div>
      )}
    />
  );
};

export default Certificates;
