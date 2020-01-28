import React from 'react'
import {ProductTitle as StyledProductTitle} from '_molecules'
const ProductTitle = ({title, brand}) => {
    return (
       <StyledProductTitle title={title} brand={brand} />
    )
}

export default ProductTitle
