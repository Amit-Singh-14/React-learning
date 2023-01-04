import React from "react";

function SearchItem({ search, setsearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        role="searchbox"
        placeholder="search item"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </form>
  );
}

export default SearchItem;
