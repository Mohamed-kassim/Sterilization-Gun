import React, {useState, useEffect} from "react";
import {
  ScrollView,
} from "react-native";

import { t } from "_i18n";

import { SearchBox, HomeSlider, Features, HomeHeader, TopPicks} from "_organisms";
import {Divider} from '_atoms'
import { Spacing } from "_styles";
import {useDataApi} from '_utils/hooks'
import axios from 'axios'
const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState({slider: [], shortcuts: []})
  useEffect( () => {
    const  getData =async  () =>{
      const {data} = await axios.get('http://192.168.1.69:3002/ecommerce/home')
      setData(data.data)
    }
    getData()
  }, [])
  return (

      <ScrollView contentContainerStyle={{paddingTop: Spacing.BASE}}>
        <HomeHeader navigation={navigation}/>
        <SearchBox navigation={navigation}/>
        <HomeSlider images={data.slider}/>
        <Divider width={'92%'}/>
        <Features navigation={navigation} items={data.shortcuts}/>
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
