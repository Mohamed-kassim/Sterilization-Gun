import React from "react";
import { VerticalList } from "_atoms";
import { SearchItem } from "_molecules";
const SearchList = ({data, navigation}) => {
  return <VerticalList key={Math.random()} data={data} renderMenuItem={({item}) => <SearchItem item={item} navigation={navigation}/>} />;
};

export default SearchList;
