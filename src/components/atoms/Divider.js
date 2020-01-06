import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Block } from "_atoms";
import { Colors, Spacing } from "_styles";
export default class Divider extends Component {
  render() {
    const { color, style, width, height, ...props } = this.props;
    const custom = {
      width: width || "85%",
      height: height || Spacing.BASE*.05
    };

    const dividerStyles = [styles.divider, style, custom];

    return (
      <Block
      
        flex={false}
        color={color || Colors.GRAY_MEDIUM}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    margin: Spacing.BASE ,
    borderBottomColor: Colors.GRAY_MEDIUM,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
