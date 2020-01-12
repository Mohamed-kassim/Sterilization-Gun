import React from "react";
import {
  ScrollView,
} from "react-native";

import { t } from "_i18n";

import { SearchBox, HomeSlider, Features, HomeHeader, TopPicks} from "_organisms";
import {Divider} from '_atoms'
import { Spacing } from "_styles";
const HomeScreen = ({ navigation }) => {
  console.log("6");

  return (

      <ScrollView contentContainerStyle={{paddingTop: Spacing.BASE}}>
        <HomeHeader navigation={navigation}/>
        <SearchBox navigation={navigation}/>
        <HomeSlider/>
        <Divider width={'92%'}/>
        <Features navigation={navigation}/>
        <Divider width={'92%'}/>
        <TopPicks navigation={navigation}/>
      </ScrollView>
  );
};
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
     header: () => null
  } 
}

export default HomeScreen;
