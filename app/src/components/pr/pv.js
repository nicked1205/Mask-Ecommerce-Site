import React, { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

// 🔁 Replace with your real video URLs (use single-video embeds, not playlists)
const videoData = [
  { id: 1, title: "Life-saving towel demonstration image", embedUrl: "https://www.youtube.com/embed/0tFvGqH1V3g" },
  { id: 2, title: "Life-saving mask demonstration image", embedUrl: "https://www.youtube.com/embed/fU7TzGJ9X6M" },
  { id: 3, title: "Empirical images of oxygen generators", embedUrl: "https://www.youtube.com/embed/I1fNDg6cP8I" },
  // add more if you want to see multiple pages
];

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("title");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3); // desktop default

  // 🧠 Responsive page size without any library
  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);        // sm: 1 per page
      else if (w < 1024) setPerPage(2);  // md: 2 per page
      else setPerPage(3);                // lg+: 3 per page
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const filtered = useMemo(() => {
    return videoData
      .filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [searchTerm, sortKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  // keep page in range if filters change
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center my-24 gap-4">
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
              onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
              className="border rounded-md px-3 py-2 pr-10 text-gray-700 w-64"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Grid of videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {current.map(video => (
          <div key={video.id} className="flex flex-col items-center">
            <div className="w-full aspect-video overflow-hidden rounded-xl shadow-md">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-gray-900 font-medium">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Numbered pagination (no arrows) */}
      <div className="flex justify-center mt-24">
        <nav className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => {
            const active = n === page;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={[
                  "min-w-9 h-9 px-3 rounded-full text-sm font-medium transition",
                  active
                    ? "bg-gray-900 text-white shadow"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {n}
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
