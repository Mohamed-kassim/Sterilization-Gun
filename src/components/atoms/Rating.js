import React from "react";
import { Block, Text } from "_atoms";
import Icon from "react-native-vector-icons/FontAwesome";
import { Typography, Colors } from "_styles";
import { Spacing } from "_styles";

const Rating = ({ rating, size, color, number }) => {
  const stars = new Array(5).fill(0);
  return (
    <Block row center flex={false}>
      {stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= index + 1;
        return (
          <Icon
            name="star"
            key={`star-${index}`}
            size={size || Typography.FONT_14}
            color={activeStar ? color || Colors.PRIMARY : Colors.GRAY_MEDIUM}
          />
        );
      })}
      {number ? (
        <Text
          style={{ marginHorizontal: Spacing.BASE / 3 }}
          bold
          size={size * 0.8 || Typography.FONT_14 * 0.8}
          gray
        >
          {rating}
        </Text>
      ) : null}
    </Block>
  );
};

export default Rating;
