import { SearchBarStyled } from "./searchBar.styled";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
        onBlur={() => {
          setTimeout(() => {
            setSearchWord("");
          }, 100);
        }}
      />
      <div className="filterResults">
        {searchWord.length !== 0 &&
          filterData.map((d) => {
            const data = d.attributes;
            return (
              <Link key={d.id} href={`/hotels/${d.id}`}>
                <div>
                  <Image
                    src={data.main_img}
                    layout="responsive"
                    height="100"
                    width="200"
                    className="searchImg"
                  />
                  <h3>{data.name}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
