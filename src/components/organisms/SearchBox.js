import React, { useRef, useState } from "react";
import { SearchBox as StyledSearchBox } from "_molecules";

const SearchBox = () => {
  const searchRef = useRef(null);
  const [Loading, setLoading] = useState(false);
  console.log('test',searchRef)
  const Search = () => {
    setLoading(true);
    
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  };

  return <StyledSearchBox Loading={Loading} setLoading={setLoading} Search={Search} />;
};

export default SearchBox;
