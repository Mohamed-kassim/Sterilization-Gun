import React from 'react'
import { View, Text } from 'react-native'
import {ProductDescription as StyledProductDescription} from '_molecules'
const ProductDescription = ({description}) => {
    return (
        <StyledProductDescription description={description}/>
    )
}

export default ProductDescription
