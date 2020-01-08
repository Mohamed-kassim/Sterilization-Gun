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
    children,
    horizontal,
    contentContainerStyles,
    onPress=null
  } = props;

  const cardStyles = [styles.card, cover && styles.cover, style];
  const coverImageStyle = [styles.coverImageStyle, cover && cover.style];
  if (!horizontal) {
    return (
      <Block column center>
        <Block
          row
          flex={false}
          color={color || Colors.WHITE}
          style={cardStyles}
          {...props}
        >
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              flex: 0
            }}
            onPress={onPress}
            disabled={!touchable}
          >
            {cover ? <Image style={coverImageStyle} uri={cover.uri} /> : null}
            {title ? (
              <Block flex={false} padding={Spacing.PADDING_15 * 0.6}>
                <Text title bold>
                  {title}
                </Text>
                {subtitle ? (
                  <Text title gray>
                    {subtitle}
                  </Text>
                ) : null}
              </Block>
            ) : null}
            <Block
              style={contentContainerStyles}
              flex={false}
              padding={[0, Spacing.PADDING_15 * 0.6]}
            >
              {children}
            </Block>

            {actions ? (
              <Block flex={false} row space={"between"}>
                {actions.map(action => {
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
      </Block>
    );
  } else {
    return (
      <Block
        flex={false}
        column
        color={color || Colors.WHITE}
        style={cardStyles}
        {...props}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          disabled={!touchable}
          onPress={onPress}
        >
          {cover ? <Image style={coverImageStyle} uri={cover.uri} /> : null}
          <Block space={"between"} column>
            {title ? (
              <Block flex={false} padding={Spacing.PADDING_15 * 0.6}>
                <Text size={Spacing.BASE} bold>
                  {title}
                </Text>
                {subtitle ? (
                  <Text title gray>
                    {subtitle}
                  </Text>
                ) : null}
              </Block>
            ) : null}
            <Block
              style={[contentContainerStyles]}
              color={"orange"}
              flex={false}
              padding={[0, Spacing.PADDING_15 * 0.6]}
            >
              {children}
            </Block>

            {actions ? (
              <Block flex={false} row space={"between"}>
                {actions.map(action => {
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
          </Block>
        </TouchableOpacity>
      </Block>
    );
  }
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
