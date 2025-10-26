import PaginatedGrid from "../helper/paginatedGrid";

const noticeData = [
];

const Notice = () => (
  <PaginatedGrid
    data={noticeData}
    itemsPerPage={6}
    sortKeys={[{ key: "title", label: "Title" }]}
    title="Notices"
  />
);

export default Notice;