import React from 'react'
import {Block} from '_atoms'
import { Slider } from "_molecules";
import { Spacing } from '_styles';

const ProductSlider = () => {
    return (
      <Block>
        <Slider
        images={[
          `https://picsum.photos/id/866/1000/1000`,
          `https://picsum.photos/id/825/1000/1000`,
          `https://picsum.photos/id/810/1000/1000`,
          `https://picsum.photos/id/815/1000/1000`,
          `https://picsum.photos/id/510/1000/1000`,
          `https://picsum.photos/id/410/1000/1000`
        ]}
      />
      </Block>
    )
}

export default ProductSlider
