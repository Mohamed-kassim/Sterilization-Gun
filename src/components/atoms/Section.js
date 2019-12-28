import React from "react";
import { Block, Text } from "_atoms";
import { Spacing } from "_styles";
import { TouchableOpacity } from "react-native";
const Section = ({
  children,
  more,
  Header,
  onPressMore,
  headerStyle,
  sectionStyle,
  centerHeader,
  centerMore,
  headerPadding
}) => {
  return (
    <Block style={sectionStyle} flex={false} column style={{ width: "100%" }}>
      <Block row space={"between"} end padding={[Spacing.BASE, headerPadding]}>
        <Text center={centerHeader} style={headerStyle} h2 bold>
          {Header ? Header : 'Header'}
        </Text>
        {more ? (
          <TouchableOpacity onPress={onPressMore} activeOpacity={0.5}>
            <Text center={centerMore} primary>More</Text>
          </TouchableOpacity>
        ) : null}
      </Block>
      <Block column>{children}</Block>
    </Block>
  );
};

export default Section;
