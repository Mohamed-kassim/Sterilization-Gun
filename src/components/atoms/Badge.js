import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Spacing } from "_styles";

import { Block } from "_atoms";
export default class Badge extends Component {
  render() {
    const { children, style, size, color, ...props } = this.props;

    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size
      },
      style
    ]);

    return (
      <Block
        flex={false}
        middle
        center
        color={color}
        style={badgeStyles}
        {...props}
      >
        {children}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    height: Spacing.BASE_16,
    width: Spacing.BASE_16,
    borderRadius: Spacing.RADIUS_6
  }
});
