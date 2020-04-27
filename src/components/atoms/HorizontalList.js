import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text } from "_atoms";
const HorizontalList = ({ data, renderMenuItem, menuStyles }) => {
  return (
    <FlatList
      horizontal
      // pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      style={[styles.shadow, menuStyles]}
      data={data}
      keyExtractor={(item, index) => `${index+Math.random()}`}
      renderItem={(item, index) => renderMenuItem(item, index)}
    />
  );
};
const styles = StyleSheet.create({
  shadow: {
    // paddingVertical: 20
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 6
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 10,
    // elevation: 5
  }
});

export default HorizontalList;
