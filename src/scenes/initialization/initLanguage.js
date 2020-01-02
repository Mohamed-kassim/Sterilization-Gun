import React from "react";
import { Block, Text, Button } from "_atoms";
import { Spacing } from "_styles";
const initLanguage = () => {
  return (
    <Block center middle>
      <Text bold h1 center>
        Choose Language
      </Text>
      <Text spacing={Spacing.BASE * 0.7} bold h1 center>
        إختر اللغة
      </Text>
      <Button primary>
        <Text bold> English</Text>
      </Button>
      <Button primary>
        <Text bold>العربية</Text>
      </Button>
    </Block>
  );
};

export default initLanguage;
