import PaginatedGrid from "../helper/paginatedGrid";

const pressData = [
];

const PressReleases = () => (
  <PaginatedGrid
    data={pressData}
    itemsPerPage={6}
    sortKeys={[{ key: "title", label: "Title" }]}
    title="Press Releases"
  />
);

export default PressReleases;
