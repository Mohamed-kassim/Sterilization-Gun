import React from "react";
import { Text, Block, Section } from "_atoms";
import { Typography,  Spacing,} from "_styles";

const ProductDescription = ({description}) => {
  return (
    <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
      <Section
        Header={"Description"}
        headerStyle={{ fontSize: Typography.FONT_SIZE_BODY }}
      >
        <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
          <Text>{description}</Text>
        </Block>
      </Section>
    </Block>
  );
};

export default ProductDescription;
