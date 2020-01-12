import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text } from "_atoms";
const VerticalList = ({ data, renderMenuItem, menuStyles }) => {
  return (
    <FlatList
      // pagingEnabled
      scrollEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      style={[{width: '100%'},menuStyles]}
      data={data}
      keyExtractor={(item, index) => `${index+Math.random()}`}
      renderItem={(item, index) => renderMenuItem(item, index)}
    />
  );
};

export default VerticalList;
