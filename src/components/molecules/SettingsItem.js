import React from "react";
import { Block, Button, Text } from "_atoms";
import { Colors, Spacing } from "_styles";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsItem = ({item, navigation, onPress}) => {
  return (
    <Button
      onPress={onPress}
      color={Colors.GRAY_LIGHT}
      style={{ paddingHorizontal: Spacing.PADDING_15 }}
    >
      <Block center row space={"around"}>
        <Block row>
          {item.icon}
          <Text color={(item.id==='logout'? 'red': null)}bold style={{paddingLeft: Spacing.PADDING_15*.5}}>{item.name}</Text>
        </Block>

          <Icon
            name="chevron-right"
            size={Spacing.BASE}
            color={Colors.GRAY_DARK}
          />
      </Block>
    </Button>
  );
};

export default SettingsItem;
