import React from 'react'
import {Section, Block} from '_atoms'
import { Features as StyledFeatures } from "_molecules";
import { Spacing } from '_styles';

const Features = ({navigation}) => {
    return (
        <Section Header={"Features"} headerPadding={Spacing.PADDING_15*.5}>
        <Block padding={[Spacing.PADDING_15*.5,0]}>
          <StyledFeatures
            items={[
             {image: `https://picsum.photos/id/866/1000/1000`, onPress:()=>{navigation.navigate('Search')}},
             {image: `https://picsum.photos/id/825/1000/1000`, onPress:()=>{navigation.navigate('Search')}},
             {image: `https://picsum.photos/id/815/1000/1000`, onPress:()=>{navigation.navigate('Search')}},
             {image: `https://picsum.photos/id/510/1000/1000`, onPress:()=>{navigation.navigate('Search')}},
            ]}
          />
        </Block>
        
      </Section>
    )
}

export default Features