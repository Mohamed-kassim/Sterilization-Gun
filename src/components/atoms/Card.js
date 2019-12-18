import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Block, Image, Text } from "_atoms";
import { Colors, Spacing } from "_styles";

const Card = props => {
  const {
    cover,
    touchable,
    title,
    subtitle,
    actions,
    color,
    style,
    children
  } = props;

  const cardStyles = [styles.card, cover && styles.cover, style];
  const coverImageStyle = [styles.coverImageStyle, cover && cover.style];
  return (
    <Block color={color || Colors.WHITE} style={cardStyles} {...props}>
      <TouchableOpacity disabled={!touchable}>
        {cover ? <Image style={coverImageStyle} uri={cover.uri} /> : null}
        {title ? (
          <Block padding={Spacing.PADDING_15 * 0.6}>
            <Text h3 bold>
              {title}
            </Text>
            {subtitle ? (
              <Text title gray>
                {subtitle}
              </Text>
            ) : null}
          </Block>
        ) : null}
        <Block padding={[0, Spacing.PADDING_15 * 0.6]}>{children}</Block>

        {actions ? (
          <Block row space={"between"}>
            {actions.map(action => {
              console.log(action);
              return (
                <TouchableOpacity
                  onPress={action.onPress}
                  style={{ padding: Spacing.PADDING_15 * 0.6 }}
                >
                  {action.icon}
                </TouchableOpacity>
              );
            })}
          </Block>
        ) : null}
      </TouchableOpacity>
    </Block>
  );
};

export default Card;

export const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.RADIUS,
    marginBottom: Spacing.BASE
  },
  cover: {
    padding: 0,
    borderRadius: Spacing.RADIUS
  },
  coverImageStyle: {
    width: Spacing.BASE * 10,
    height: Spacing.BASE * 13,
    borderTopRightRadius: Spacing.RADIUS,
    borderTopLeftRadius: Spacing.RADIUS
  }
});
