import React from "react";
import { Block, Text, Divider } from "_atoms";
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
    <Block style={sectionStyle} flex={false} column style={{ width: "100%" }} >
      <Block row space={"between"} end padding={[0,0, headerPadding,headerPadding]}>
        <Block center={centerHeader}>
        <Text center={centerHeader} style={headerStyle} title bold>
          {Header ? Header : 'Header'}
        </Text>
        <Divider primary style={{margin:0, marginTop: Spacing.BASE*.2}} padding={0} height={2} width={Spacing.BASE*6} />
        </Block>
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
