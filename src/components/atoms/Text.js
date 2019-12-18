// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import { Colors, Typography } from "_styles";
export default class Text extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,

      success,
      underlined,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      success && styles.success,
      underlined && styles.underlined,
      style // rewrite predefined styles
    ];

    return (
      <NativeText style={textStyles} {...props}>
        {children}
      </NativeText>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.BLACK
  },
  // variations
  regular: {
    fontWeight: "normal"
  },
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  medium: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: Colors.ACCENT },
  primary: { color: Colors.PRIMARY },
  secondary: { color: Colors.SECONDARY },
  black: { color: Colors.BLACK },
  white: { color: Colors.WHITE },
  gray: { color: Colors.GRAY_DARK },
  gray2: { color: Colors.GRAY_MEDIUM },
  success: { color: Colors.SUCCESS },
  // fonts
  h1: { fontSize: Typography.FONT_SIZE_H1 },
  h2: { fontSize: Typography.FONT_SIZE_H2 },
  h3: { fontSize: Typography.FONT_SIZE_H3 },
  title: { fontSize: Typography.TITLE },
  body: { fontSize: Typography.BODY },
  caption: { fontSize: Typography.CAPTION },
  small: { fontSize: Typography.SMALL },
  underlined: { textDecorationLine: "underline" }
});
