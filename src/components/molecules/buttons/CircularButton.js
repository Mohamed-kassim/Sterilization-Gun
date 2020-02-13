import React from 'react'
import {Button} from '_atoms'
import { Spacing } from '_styles'
import Icon from "react-native-vector-icons/FontAwesome";
const CircularButton = ({icon, color, bgColor, onPress, buttonSize = Spacing.BASE, iconSize = Spacing.BASE, disabled}) => {
    return (
        <Button disabled={disabled} onPress={onPress} size={buttonSize*2.5} color={bgColor} circular>
        <Icon name={icon} size={iconSize*1.5} color= {color} />
      </Button>
    )
}

export default CircularButton
