import React from "react";
import { HorizontalList } from "_atoms";
import { Pick } from "_molecules";
const Picks = ({data, navigation}) => {
  return <HorizontalList data={data} renderMenuItem={({item}) => <Pick item={item} navigation={navigation}/>} />;
};

export default Picks;
