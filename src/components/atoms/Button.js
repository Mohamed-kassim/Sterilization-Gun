import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Spacing, Colors } from "_styles";
import { Badge, Block } from "_atoms";
class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      circular,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      size,
      children,
      normal,
      full,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      { width: normal ? "60%" : full ? "95%" : null },
      shadow && styles.shadow,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={opacity}
          {...props}
        >
          <LinearGradient
            start={start}
            end={end}
            locations={locations}
            style={buttonStyles}
            colors={[startColor, endColor]}
          >
            {children}
          </LinearGradient>
        </TouchableOpacity>
      );
    }
    if (circular) {
      return (
        <TouchableOpacity activeOpacity={opacity || 0.8} {...props}>
          <Badge color={color} size={size}>
            {children}
          </Badge>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  startColor: Colors.PRIMARY,
  endColor: Colors.ACCENT,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: Colors.WHITE
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: Spacing.RADIUS_6,
    height: Spacing.BASE_16 * 3,
    justifyContent: "center",
    marginVertical: Spacing.PADDING_25 / 3
  },
  shadow: {
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: Colors.ACCENT },
  primary: { backgroundColor: Colors.PRIMARY },
  secondary: { backgroundColor: Colors.SECONDARY },
  black: { backgroundColor: Colors.BLACK },
  white: { backgroundColor: Colors.WHITE },
  gray: { backgroundColor: Colors.GRAY_DARK },
  gray2: { backgroundColor: Colors.GRAY_MEDIUM },
  gray3: { backgroundColor: Colors.GRAY_LIGHT }
});
