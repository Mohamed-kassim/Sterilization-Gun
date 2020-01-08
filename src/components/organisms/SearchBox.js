import React, { useRef, useState } from "react";
import { SearchBox as StyledSearchBox } from "_molecules";

const SearchBox = ({ navigation }) => {
  const searchRef = useRef(null);
  const [Loading, setLoading] = useState(false);
  const Search = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Search",);
    }, 500);
  };

  return (
    <StyledSearchBox
      Loading={Loading}
      setLoading={setLoading}
      Search={Search}
    />
  );
};

export default SearchBox;
