import React from "react";
import { Block, Text, Divider } from "_atoms";
import { t } from "_i18n";
import { Accordion } from "_atoms";
import { Spacing } from "_styles";

const OrderHistoryItem = ({AccordionSelf, children}) => {
  return (
    <Block>
      <Accordion AccordionComponent={AccordionSelf}>
        {children}
      </Accordion>
    </Block>
  );
};

export default OrderHistoryItem;
