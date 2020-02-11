import React from 'react'
import {Block} from '_atoms'
import { Slider } from "_molecules";
import { Spacing } from '_styles';

const HomeSlider = ({images}) => {
    return (
      <Block>
        <Slider
        autoScrolled
        images={images}
      />
      </Block>
    )
}

export default HomeSlider
