import React from 'react'
import { Text, Block, Section } from "_atoms";
import { Typography, Spacing } from "_styles";
const ProductSpecs = ({specs}) => {
    return (
        <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
        <Section
          Header={"Specifications"}
          headerStyle={{ fontSize: Typography.FONT_SIZE_BODY }}
        >
          <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
            {specs.map(spec => (
              <Text>{spec}</Text>
            ))}
          </Block>
        </Section>
      </Block>
    )
}

export default ProductSpecs
