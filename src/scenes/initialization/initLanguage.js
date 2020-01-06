import React from "react";
import { Block, Text, Button } from "_atoms";
import { Spacing } from "_styles";
import AsyncStorage from "@react-native-community/async-storage";

const initLanguage = () => {
  console.log('5 language screen')
  const setLanguage=async(lang)=>{
    try{
      await AsyncStorage.setItem("language", lang)
    }
    catch(err){
      console.log(err)
    }

  }
  return (
    <Block center middle>
      <Text bold h1 center>
        Choose Language
      </Text>
      <Text spacing={Spacing.BASE * 0.7} bold h1 center>
        إختر اللغة
      </Text>
      <Button normal color={'primary'} style={{marginTop: Spacing.BASE*2}} onPress={()=>{
        setLanguage('en')
      }}>
        <Text bold> English</Text>
      </Button>
      <Button normal shadow onPress={()=>{
        setLanguage('ar')
      }}>
        <Text bold>العربية</Text>
      </Button>
    </Block>
  );
};

export default initLanguage;
