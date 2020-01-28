import React from 'react'
import {Block} from '_atoms'
import { Slider } from "_molecules";
import { Spacing } from '_styles';

const ProductSlider = ({images}) => {
    return (
      <Block>
        <Slider
        images={images}
      />
      </Block>
    )
}

export default ProductSlider
