import { SearchBarStyled } from "./searchBar.styled";
import { useState, useRef, useEffect } from "react";

const SearchBar = ({ data }) => {
  const searchRef = useRef();
  const [searchWord, setSearchWord] = useState("");

  const filterData = data.filter((d) =>
    d.attributes.name.toLowerCase().includes(searchWord)
  );

  useEffect(() => {
    console.log(filterData);
  }, [searchWord]);

  return (
    <SearchBarStyled>
      <input
        type="text"
        placeholder="Search"
        ref={searchRef}
        value={searchWord}
        onChange={() => setSearchWord(searchRef.current.value)}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
