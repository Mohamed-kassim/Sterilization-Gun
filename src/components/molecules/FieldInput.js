import React, {useState} from "react";
import { Input, Block, Text } from "_atoms";
import { Spacing, Colors } from "_styles";
const FieldInput = props => {
  const [focused, setFocused] = useState(false)
  return (
    <Block style={{marginBottom: Spacing.PADDING_15}}>
      <Input
        {...props}
        // style={{paddingVertical: Spacing.BASE*1.3}}
        rounded
        gray3
        border={focused}
        color={Colors.GRAY_LIGHTER}
        placeholder={(focused)? '': props.placeholder}
        rightLabel={props.icon}
        label={(focused)? props.label: null}
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
      />
    </Block>
  );
};
export default FieldInput;
