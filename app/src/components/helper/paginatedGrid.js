import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const PaginatedGrid = ({
  data = [],
  itemsPerPage = 6,
  sortKeys = [{ key: "title", label: "Title" }],
  defaultSortKey = "title",
  title = "Items",
  columns = 3,
  imageKey = "image",
  titleKey = "title",
  renderCard
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(defaultSortKey);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = data
    .filter((item) =>
      item[titleKey]?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      (a[sortKey] || "").localeCompare(b[sortKey] || "", undefined, {
        sensitivity: "base",
      })
    );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayed = filtered.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (num) => {
    if (num > 0 && num <= totalPages) setCurrentPage(num);
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-4">
        <p className="text-lg font-semibold">
          Total {filtered.length} {title}
        </p>

        <div className="flex items-center gap-2">
          {sortKeys.length > 0 && (
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="border rounded-md px-3 py-2 text-gray-600"
            >
              {sortKeys.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          )}

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Please enter your search term."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border rounded-md px-3 py-2 pr-10 text-gray-600 w-64"
            />
            <button className="bg-gray-700 hover:bg-gray-800 text-white rounded-r-md absolute right-0 top-0 h-full w-10 flex items-center justify-center">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-4" />

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-gray-500 text-lg">
          There is no registered post.
        </div>
      ) : (
        <>
          {/* Grid */}
          <div
            className={`grid gap-10 mb-10 ${
              columns === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {displayed.map((item) => (
              <div key={item.id || item[titleKey]} className="flex flex-col items-center">
                {renderCard ? (
                  renderCard(item)
                ) : (
                  <>
                    <img
                      src={item[imageKey]}
                      alt={item[titleKey]}
                      className="rounded-md shadow-sm w-full h-56 object-cover"
                    />
                    <p
                      className="mt-4 text-center text-gray-800 font-medium leading-snug truncate w-full"
                      title={item[titleKey]}
                    >
                      {item[titleKey]}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => changePage(currentPage - 1)}
              className={`px-3 py-1 text-gray-700 ${
                currentPage === 1
                  ? "opacity-50 cursor-default"
                  : "hover:text-red-600"
              }`}
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              const shouldShow =
                totalPages <= 5 ||
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              if (!shouldShow) {
                if (
                  (page === currentPage - 2 && page > 2) ||
                  (page === currentPage + 2 && page < totalPages - 1)
                ) {
                  return (
                    <span key={page} className="px-1 text-gray-500">
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentPage === page
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => changePage(currentPage + 1)}
              className={`px-3 py-1 text-gray-700 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-default"
                  : "hover:text-red-600"
              }`}
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default PaginatedGrid;
