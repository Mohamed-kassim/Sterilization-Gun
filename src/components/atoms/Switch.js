import React from "react";
import { Switch, Platform } from "react-native";
import { Colors } from "_styles";
export default class SwitchInput extends React.PureComponent {
  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === "android") {
      thumbColor = Colors.GRAY_MEDIUM;
      if (props.value) thumbColor = COLORS.SECONDARY;
    }

    return (
      <Switch
        thumbColor={thumbColor}
        ios_backgroundColor={Colors.GRAY_MEDIUM}
        trackColor={{
          false: Colors.GRAY_MEDIUM,
          true: Colors.SECONDARY
        }}
        value={value}
        {...props}
      />
    );
  }
}
