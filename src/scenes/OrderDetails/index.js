import React, {useState} from "react";
import { Block, Text } from "_atoms";
import { t } from "_i18n";
import { Spacing } from "_styles";
import StepIndicator from "react-native-step-indicator";
import { ScrollView } from "react-native";
const labels = [
  "Received in main hub",
  "Shipped to Libya",
  "Received in Libya",
  "Received in local hub",
  "Out for delivery",
  "Out for delivery",
  "Delivered"
];
const customStyles = {
  stepIndicatorSize: Spacing.BASE*1.5,
  currentStepIndicatorSize: Spacing.BASE*2,
  separatorStrokeWidth: Spacing.BASE*.3,
  currentStepStrokeWidth: Spacing.BASE*.2,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#fe7013",
  labelSize: 13,
  currentStepLabelColor: "#fe7013"
};
const OrderDetails = () => {
  const [currentPosition, setCurrentPosition] = useState(1);
  return (
    <Block padding={[Spacing.PADDING_15]}>
      <Text title bold>
        Shipping Details
      </Text>

      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        direction='vertical'
      />
    </Block>
  );
};
OrderDetails.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("ProductDetails.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};

export default OrderDetails;
