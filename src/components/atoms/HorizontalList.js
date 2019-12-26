import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text } from "_atoms";
const HorizontalList = ({ data, renderMenuItem, menuStyles }) => {
  return (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      style={[styles.shadow, { overflow: "visible" }, menuStyles]}
      data={data}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={(item, index) => <Text>jhghjg</Text>}
    />
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5
  }
});

export default HorizontalList;
