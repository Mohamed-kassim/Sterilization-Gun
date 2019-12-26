import React, { Component } from "react";
import { StyleSheet, TextInput, Image } from "react-native";
import { Block, Button, Text } from "_atoms";
import { Spacing, Colors, Typography } from "_styles";
import Icon from "react-native-vector-icons/FontAwesome";
export default class Input extends Component {
  state = {
    toggleSecure: false
  };

  renderLabel() {
    const { label, error, correct } = this.props;
    return (
      <Block flex={false}>
        {label ? (
          <Text gray={!error} success={correct} error={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  renderToggle() {
    const {
      secure,
      rightLabel,
      accent,
      primary,
      secondary,
      black,
      white,
      gray,
      gray2,
      gray3,
      color
    } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;
    const iconStyles = [
      styles.toggle,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      gray3 && styles.gray3
    ];
    return (
      <Button
        style={iconStyles}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            name={!toggleSecure ? "eye" : "eye-slash"}
            size={Typography.FONT_SIZE_16}
            color="black"
          />
        )}
      </Button>
    );
  }

  renderRight() {
    const {
      rightLabel,
      rightStyle,
      onRightPress,
      accent,
      primary,
      secondary,
      black,
      white,
      gray,
      gray2,
      gray3
    } = this.props;

    if (!rightLabel) return null;
    const iconRightLabel = [
      styles.toggle,
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      gray3 && styles.gray3
    ];
    return (
      <Button
        style={[iconRightLabel, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  render() {
    const {
      email,
      phone,
      number,
      secure,
      error,
      correct,
      style,
      border,
      accent,
      primary,
      secondary,
      black,
      white,
      gray,
      gray2,
      gray3,
      color,
      normal,
      full,
      rounded,
      errMsg,
      ...props
    } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      { width: normal ? "60%" : full ? "95%" : null },
      error && { borderColor: Colors.ERROR },
      correct && { borderColor: Colors.SUCCESS },
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      gray3 && styles.gray3,
      border && styles.border,
      rounded && styles.rounded,
      style
    ];

    const inputType = email
      ? "email-address"
      : number
      ? "numeric"
      : phone
      ? "phone-pad"
      : "default";

    return (
      <Block>
        <Block margin={[Spacing.BASE, 0]}>
          {this.renderLabel()}
          <TextInput
            style={inputStyles}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={inputType}
            {...props}
          />
          {this.renderToggle()}
          {this.renderRight()}
        </Block>
        {error ? (
          <Block margin={[Spacing.BASE * 2, 0]}>
            <Text small bold color={"red"}>
              {errMsg}
            </Text>
          </Block>
        ) : null}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: "500",
    color: Colors.BLACK,
    height: Spacing.BASE * 2.4,
    padding: Spacing.PADDING_15 * 0.5
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: Spacing.BASE * 2,
    height: Spacing.BASE * 2,
    top: Spacing.BASE * 0.8,
    right: Spacing.BASE * 0.5
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth
  },
  rounded: {
    borderRadius: Spacing.RADIUS
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
