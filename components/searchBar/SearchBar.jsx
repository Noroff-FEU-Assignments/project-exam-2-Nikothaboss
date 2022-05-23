import { SearchBarStyled } from "./searchBar.styled";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {searchWord && (
          <motion.div
            className="filterResults"
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 500 }}
            exit={{ maxHeight: 0 }}
          >
            {searchWord.length !== 0 &&
              filterData.map((d) => {
                const data = d.attributes;
                return (
                  <Link key={d.id} href={`/hotels/${d.id}`}>
                    <div className="singleResult">
                      <div className="img_container">
                        <Image
                          src={data.main_img}
                          //   layout="responsive"
                          height="100"
                          width="200"
                          className="searchImg"
                        />
                      </div>
                      <p>{data.name}</p>
                    </div>
                  </Link>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </SearchBarStyled>
  );
};

export default SearchBar;
