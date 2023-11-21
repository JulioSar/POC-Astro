interface SearchProp {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export default function Search({ searchProps }: { searchProps: SearchProp }) {
  return (
    <input
      type="search"
      className="px-3 py-2 border-t-0 border-x-0 w-80 border-b-2 "
      placeholder="Search apps..."
      value={searchProps.searchTerm}
      onChange={(e) => searchProps.setSearchTerm(e.target.value)}
      style={{ outline: "none", boxShadow: "none" }}
    />
  );
}
