import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setShowNav }) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <Link to="/productListPage">
      <div
        onClick={() => setShowNav(false)}
        className="text-xl border-2 border-gray-700 w-12 h-12 rounded-full flex justify-center items-center mx-2 hover:shadow-lg hover:bg-blue"
      >
        {searchIcon}
      </div>
    </Link>
  );
};

export default Search;
