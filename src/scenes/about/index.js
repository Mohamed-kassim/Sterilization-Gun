import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {useGlobalState} from '_globalState'
const AboutScreen = () => {
  const [count, setCount] = useGlobalState('count')
  return(
  <SafeAreaView>
    <Text>Screen: About</Text>
    <Text>{count}</Text>
    <TouchableHighlight onPress={() => setCount((count)=> count +1)}>
      <Text>inc Count</Text>
    </TouchableHighlight>
  </SafeAreaView>
  )
};

export default AboutScreen;
