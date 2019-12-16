import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {useGlobalState} from '_globalState'
const HomeScreen = ({navigation}) => {
  const [count, setCount] = useGlobalState('count')
return (
  
  <SafeAreaView>
    <Text>Screen: Home</Text>
    <Text>{count}</Text>
    <TouchableHighlight onPress={() => navigation.navigate('About')}>
      <Text>Go to about</Text>
    </TouchableHighlight>
  </SafeAreaView>
);
}

export default HomeScreen;
