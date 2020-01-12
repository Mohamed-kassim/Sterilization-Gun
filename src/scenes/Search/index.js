import React from "react";
import { Divider } from "_atoms";
import { ScrollView } from "react-native";

import { SearchBox, SearchList, HomeHeader } from "_organisms";
import { Spacing } from "_styles";
const Search = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: Spacing.BASE }}>
      <HomeHeader navigation={navigation}/>
      <SearchBox navigation={navigation} />
      <Divider width={'92%'}/>
      <SearchList navigation={navigation} />
    </ScrollView>
  );
};

Search.navigationOptions = ({ navigation }) => {
  return {
     header: () => null
  } 
}

export default Search;
