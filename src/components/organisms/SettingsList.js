import React from "react";
import { Section, Block } from "_atoms";
import { SettingsList as StyledSettingsList } from "_molecules";
import { Spacing } from "_styles";
import {SettingsButtons} from '_mocks'


const SettingsList = ({ navigation }) => {
  return (
    <Block padding={[Spacing.PADDING_15 * 0.5, Spacing.PADDING_15 * 0.5]}>
      <StyledSettingsList navigation={navigation} data={SettingsButtons} />
    </Block>
  );
};

export default SettingsList;
