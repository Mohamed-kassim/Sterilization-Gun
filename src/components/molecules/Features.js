import React from "react";
import { Dimensions, Animated, FlatList, StyleSheet } from "react-native";
import { Block, Card, Image } from "_atoms";
import { Colors, Spacing, Mixins } from "_styles";
const { width, height } = Dimensions.get("window");
const scrollX = new Animated.Value(0);
const Features = ({ images }) => {
  const renderItem = (item, index) => (
    <Card
      //   shadow
      style={{ padding: 20 }}
      touchable
      cover={{
        uri: item,
        style: {
          width: width - 40,
          height: width
          //   shadow: Mixins.boxShadow("black")
        }
      }}
    />
  );
  return (
    <Block column space={"between"}>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={{ overflow: "visible" }}
        data={images}
        keyExtractor={(item, index) => `${item.id}`}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ])}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  destination: {
    width: width - Spacing.PADDING_15 * 2,
    height: width * 0.6,
    marginHorizontal: Spacing.PADDING_15,
    paddingHorizontal: Spacing.PADDING_15,
    paddingVertical: Spacing.PADDING_15 * 0.66,
    borderRadius: Spacing.RADIUS
  }
});
export default Features;
