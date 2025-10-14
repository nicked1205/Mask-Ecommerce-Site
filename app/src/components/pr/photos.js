import React, { useEffect, useMemo, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const photoData = [
  { id: 1, title: "Head office (Saving story)", url: "/images/head-office.jpg" },
  { id: 2, title: "Research Institute", url: "/images/research-institute.jpg" },
  { id: 3, title: "Microorganism identification process", url: "/images/microorganism-process.jpg" },
  { id: 4, title: "Ministry of Public Administration and Security Award Ceremony", url: "/images/award-ceremony.jpg" },
  { id: 5, title: "Korean Patent and Trademark Convention for Invention", url: "/images/korean-patent-1.jpg" },
  { id: 6, title: "Korean Patent and Trademark Convention for Invention", url: "/images/korean-patent-2.jpg" },
  { id: 7, title: "Korean Patent and Trademark Convention for Invention", url: "/images/korean-patent-3.jpg" },
  { id: 8, title: "2023 Tokyo International Emergency Management Agency", url: "/images/tokyo-expo-1.jpg" },
  { id: 9, title: "2023 Tokyo International Emergency Management Agency", url: "/images/tokyo-expo-2.jpg" },
  { id: 10, title: "2023 Osaka Fire Prevention Expo, Japan", url: "/images/osaka-expo-1.jpg" },
  { id: 11, title: "2023 Osaka Fire Prevention Expo, Japan", url: "/images/osaka-expo-2.jpg" },
  { id: 12, title: "Cutting, attachment, drilling of fabric", url: "/images/fabric-cutting.jpg" },
  { id: 13, title: "Mixing and packaging of oxygen-generating substances", url: "/images/oxygen-mixing.jpg" },
  { id: 14, title: "Manufacture of the internal cover of the oxygen generator", url: "/images/oxygen-cover.jpg" },
  { id: 15, title: "Fusion of the oxygen generator", url: "/images/oxygen-fusion.jpg" },
  { id: 16, title: "Fusion of the handle", url: "/images/handle-fusion.jpg" },
  { id: 17, title: "Solution filling and packaging", url: "/images/solution-packaging-1.jpg" },
  { id: 18, title: "Solution filling and packaging", url: "/images/solution-packaging-2.jpg" },
];


export default function Photos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("title");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(2);
      else if (w < 1024) setPerPage(6);
      else setPerPage(12);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = useMemo(() => {
    return photoData
      .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [searchTerm, sortKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800 relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <p className="text-lg font-semibold">Total {filtered.length}</p>

        <div className="flex items-center gap-2">
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="border rounded-md px-3 py-2 text-gray-700"
          >
            <option value="title">Title</option>
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Please enter your search term."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="border rounded-md px-3 py-2 pr-10 text-gray-700 w-64"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {current.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setLightbox(photo)}
          >
            <div className="w-full overflow-hidden rounded-2xl shadow-md">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-center text-gray-900 font-medium">
              {photo.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <nav className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition ${
              page === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            ‹
          </button>

          {(() => {
            const pages = [];
            const maxVisible = 5;
            let start = Math.max(1, page - 2);
            let end = Math.min(totalPages, start + maxVisible - 1);

            if (end - start < maxVisible - 1)
              start = Math.max(1, end - maxVisible + 1);

            for (let i = start; i <= end; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`min-w-9 h-9 rounded-full text-sm font-medium transition ${
                    i === page
                      ? "bg-gray-900 text-white shadow"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {i}
                </button>
              );
            }
            return pages;
          })()}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition ${
              page === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            ›
          </button>

          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition ${
              page === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            »
          </button>
        </nav>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
            <p className="text-center text-white mt-4 text-lg font-medium">
              {lightbox.title}
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
