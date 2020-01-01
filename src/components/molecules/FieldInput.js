import React from "react";
import { Input, Block, Text } from "_atoms";
const FieldInput = props => {
  return (
    <Block>
      <Input
        {...props}
        border
        rounded
        gray3
        placeholder={props.placeholder}
        rightLabel={props.icon}
      />
    </Block>
  );
};
export default FieldInput;
