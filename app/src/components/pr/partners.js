import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

const partnerData = [
  { id: 1, name: "Ministry of Public Administration and Security", logo: "/images/partners/ministry-public.png" },
  { id: 2, name: "Administrative Complex City Construction Agency", logo: "/images/partners/admin-complex.png" },
  { id: 3, name: "Government Building Management Headquarters", logo: "/images/partners/gov-building.png" },
  { id: 4, name: "Ministry of SMEs and Startups", logo: "/images/partners/smes.png" },
  { id: 5, name: "Forest Service", logo: "/images/partners/forest-service.png" },
  { id: 6, name: "National Oceanographic Agency", logo: "/images/partners/ocean-agency.png" },
  { id: 7, name: "Daegu Metropolitan City", logo: "/images/partners/daegu.png" },
  { id: 8, name: "Daejeon Metropolitan City", logo: "/images/partners/daejeon.png" },
  { id: 9, name: "Yongin City", logo: "/images/partners/yongin.png" },
  { id: 10, name: "City of Pohang", logo: "/images/partners/pohang.png" },
  { id: 11, name: "Osan City", logo: "/images/partners/osan.png" },
  { id: 12, name: "Namyangju City", logo: "/images/partners/namyangju.png" },
  { id: 13, name: "Korea Fire Institute", logo: "/images/partners/fire-institute.png" },
  { id: 14, name: "Korea Institute of Safety Technology", logo: "/images/partners/safety-tech.png" },
  { id: 15, name: "Korea Disaster Prevention Association", logo: "/images/partners/disaster-prevention.png" },
  { id: 16, name: "Korea Industrial Complex Corporation", logo: "/images/partners/industrial-complex.png" },
  { id: 17, name: "Seoul Metropolitan Government", logo: "/images/partners/seoul.png" },
  { id: 18, name: "Busan Metropolitan City", logo: "/images/partners/busan.png" },
  { id: 19, name: "Incheon Metropolitan City", logo: "/images/partners/incheon.png" },
  { id: 20, name: "Jeonju City", logo: "/images/partners/jeonju.png" },
  { id: 21, name: "Cheongju City", logo: "/images/partners/cheongju.png" },
  { id: 22, name: "Suwon City", logo: "/images/partners/suwon.png" },
  { id: 23, name: "Changwon City", logo: "/images/partners/changwon.png" },
  { id: 24, name: "Ulsan Metropolitan City", logo: "/images/partners/ulsan.png" },
  { id: 25, name: "Gwangju Metropolitan City", logo: "/images/partners/gwangju.png" },
  { id: 26, name: "Korea Aerospace Research Institute", logo: "/images/partners/kari.png" },
  { id: 27, name: "Korea Hydro & Nuclear Power", logo: "/images/partners/khnp.png" },
  { id: 28, name: "Korea Gas Corporation", logo: "/images/partners/kgc.png" },
  { id: 29, name: "Korea Electric Power Corporation", logo: "/images/partners/kepco.png" },
  { id: 30, name: "Korea Expressway Corporation", logo: "/images/partners/expressway.png" },
  { id: 31, name: "Korea Railroad Corporation", logo: "/images/partners/korail.png" },
  { id: 32, name: "Korea Shipbuilding & Offshore Engineering", logo: "/images/partners/ksoe.png" },
  { id: 33, name: "POSCO", logo: "/images/partners/posco.png" },
  { id: 34, name: "Hyundai Heavy Industries", logo: "/images/partners/hhi.png" },
  { id: 35, name: "Samsung Engineering", logo: "/images/partners/samsung-eng.png" },
  { id: 36, name: "LG Chem", logo: "/images/partners/lgchem.png" },
  { id: 37, name: "SK Innovation", logo: "/images/partners/skinnovation.png" },
  { id: 38, name: "Korea University", logo: "/images/partners/korea-uni.png" },
  { id: 39, name: "Yonsei University", logo: "/images/partners/yonsei.png" },
  { id: 40, name: "KAIST", logo: "/images/partners/kaist.png" },
];

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

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
    return partnerData
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [searchTerm, sortKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <p className="text-lg font-semibold">Total {filtered.length}</p>

        <div className="flex items-center gap-2">
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="border rounded-md px-3 py-2 text-gray-700"
          >
            <option value="name">Title</option>
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Please enter your search word"
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
        {current.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center"
          >
            <div className="w-full bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex items-center justify-center h-40">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 object-contain"
              />
            </div>
            <p className="mt-4 text-center text-gray-900 font-medium">
              {partner.name}
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
    </section>
  );
}
