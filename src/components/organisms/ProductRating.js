import React from 'react'
import {Rating, Block} from '_atoms'
import {Spacing, Colors} from '_styles'
const ProductRating = ({rating}) => {
    return (
        <Block>
          <Rating
            rating={rating}
            color={Colors.PRIMARY}
            size={Spacing.BASE}
            number
          />
          </Block>
    )
}

export default ProductRating
