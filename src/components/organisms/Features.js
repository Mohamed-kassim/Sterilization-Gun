import React from 'react'
import {Section, Block} from '_atoms'
import { Features as StyledFeatures } from "_molecules";
import { Spacing } from '_styles';

const Features = ({navigation, items}) => {

    return (
        <Section Header={"Features"} headerPadding={Spacing.PADDING_15*.5}>
        <Block padding={[Spacing.PADDING_15*.5,0]}>
          <StyledFeatures
            items={items}
            navigation = {navigation}
          />
        </Block>
      </Section>
    )
}

export default Features