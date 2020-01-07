import React from "react";
import { Dimensions, Animated, FlatList, StyleSheet } from "react-native";
import { Block, Card } from "_atoms";
import { Colors, Spacing } from "_styles";
const { width, height } = Dimensions.get("window");
const scrollX = new Animated.Value(0);
const Features = ({ items }) => {
  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <Block row center middle style={{ marginTop: 10 }}>
        {items.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, Spacing.BASE * .08, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth }
              ]}
            />
          );
        })}
      </Block>
    );
  };
  const renderItem = (item, index) => (
    <Card
      style={{
        paddingHorizontal: Spacing.PADDING_15 * 2,
        borderRadius: Spacing.RADIUS
      }}
      touchable
      onPress={item.onPress}
      cover={{
        uri: item.image,
        style: {
          width: width - Spacing.PADDING_15 * 4,
          height: width - Spacing.PADDING_15 * 4,
          borderRadius: Spacing.RADIUS
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
        // style={{ overflow: "visible" }}
        data={items}
        keyExtractor={(item, index) => `${item.id}`}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ])}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
      {renderDots()}
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
  },
  dots: {
    width: Spacing.BASE * .6,
    height: Spacing.BASE * .6,
    borderWidth: Spacing.BASE * .08,
    borderRadius: Spacing.RADIUS*.5,
    marginHorizontal: Spacing.BASE*.2,
    backgroundColor: Colors.GRAY_DARK,
    borderColor: "transparent"
  },
  activeDot: {
    width: Spacing.BASE*.5,
    height: Spacing.BASE*.5,
    borderRadius: Spacing.RADIUS*.5,
    borderColor: Colors.PRIMARY
  }
});
export default Features;
