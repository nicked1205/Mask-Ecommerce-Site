import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const locations = [
  {
    title: "Head Office",
    address: "#210, 594-7, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea",
    phone: "+82-70-4909-7570",
  },
  {
    title: "Research Center",
    address: "#209, 594-7, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea",
    phone: "+82-70-4909-7570",
  },
  {
    title: "Dongtan Plant",
    address: "#B102, 594-7, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea",
    phone: "+82-70-4909-7570",
  },
];

export default function Directions() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4">Location</h2>
        <p className="text-lg font-medium text-gray-700">
          Saving Story Growing with Customers
        </p>
        <p className="text-lg text-gray-700">
          Saving Story will dedicate its best effort to creating a safe world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 md:px-20">
        {locations.map((loc, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 flex-1 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{loc.title}</h3>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mt-1 mr-2" />
              <p className="text-gray-700 text-sm">{loc.address}</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 text-blue-500 mr-2" />
              <p className="text-gray-700 text-sm">{loc.phone}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full h-96">
        <iframe
          title="Company Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.031481029326!2d127.0817!3d37.1974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5e5b5e9f1c41%3A0x2f6f2c7bbbbb!2sHwaseong-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v0000000000"
          className="w-full h-full border-0 rounded-2xl shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
