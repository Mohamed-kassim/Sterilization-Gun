import React from "react";
import { Text, Block, Section } from "_atoms";
import { Typography, Spacing } from "_styles";
const ProductFeatures = ({ features }) => {
  return (
    <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
      <Section
        Header={"Features"}
        headerStyle={{ fontSize: Typography.FONT_SIZE_BODY }}
      >
        <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
          {features.map(feature => (
            <Text body>
              <Text title>•</Text> {feature}
            </Text>
          ))}
        </Block>
      </Section>
    </Block>
  );
};

export default ProductFeatures;
