import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import { Block, Text } from "_atoms";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacing, Colors } from "_styles";

export default Accordion = ({AccordionComponent,onExpand, children, height = null})=> {

  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(false)
  const toggleExpand = () => {
    if (
      !expanded &&
      onExpand &&
      typeof onExpand == "function"
    ) {
      setLoading(true);
      onExpand(() => {
        setLoading(false);
      });
    }
    setExpanded((expanded)=> !expanded)
  };
    return (
      <Block flex={false} style={{ paddingHorizontal: Spacing.PADDING_15 }}>
        <TouchableOpacity
          style={[styles.row, {height,}]}
          onPress={() => toggleExpand()}
        >
            
          {AccordionComponent}
          <Block flex={false} padding={[0,Spacing.BASE*.3]}>
          {expanded ? (
            <Icon
              style={{ right: 0, }}
              name="chevron-down"
              size={Spacing.BASE}
              color={Colors.GRAY_DARK}
            />
          ) : (
            <Icon
              style={{ right: 0 }}
              name="chevron-right"
              size={Spacing.BASE}
              color={Colors.GRAY_DARK}
            />
          )}
          </Block>
        </TouchableOpacity>
        {loading && (
          <ActivityIndicator size={Spacing.BASE} color={Colors.Primary} />
        )}
        {expanded && !loading && (
          <Block flex={false}>{children}</Block>
        )}
      </Block>
    );



}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.PADDING_15 * 0.5,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: Spacing.RADIUS,
    marginBottom: Spacing.BASE * 0.6
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%"
  }
});
