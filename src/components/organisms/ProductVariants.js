import React, {useRef} from "react";
import Menu from "react-native-menu-list";
import { Text, Block } from "_atoms";
import { Typography, Spacing, Colors } from "_styles";
const ProductVariants = ({ variant, setVariant, other_variants }) => {
  const menuRef = useRef(null);
  return (
    <Block middle padding={[Spacing.BASE * 0.7, Spacing.BASE * 0.5]}>
      <Menu
        onChange={value => {
          console.log(value.variant);
          setVariant(value);
        }}
        firstTitleText={["Blue", "34x32"]}
        itemButtonTextStyle={{
          fontSize: Typography.FONT_SIZE_TITLE,
          fontWeight: "bold"
        }}
        itemButtonStyle={{
          alignSelf: "center",
          backgroundColor: Colors.PRIMARY,
          // width: "80%",
          paddingHorizontal: Spacing.PADDING_15,
          borderRadius: Spacing.RADIUS,
          height: Spacing.BASE * 2.5,
          justifyContent: "center",
          alignItems: "center"
        }}
        selectedKey={variant}
        ref={menuRef}
        labelExtractor={item => item.variant}
        data={other_variants}
      />
    </Block>
  );
};

export default ProductVariants;
