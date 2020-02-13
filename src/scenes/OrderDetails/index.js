import React, { useState, useEffect } from "react";
import { Block, Text } from "_atoms";
import { t } from "_i18n";
import { Spacing } from "_styles";
import StepIndicator from "react-native-step-indicator";
import { ScrollView } from "react-native";
import { Colors } from "_styles";
import { VerticalList, Divider } from "_atoms";
import { CartItem } from "_molecules";
import Config from "react-native-config";
import { useGlobalState } from "_globalState";
import moment from "moment";
import axios from "axios";
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
  stepIndicatorSize: Spacing.BASE * 1.5,
  currentStepIndicatorSize: Spacing.BASE * 2,
  separatorStrokeWidth: Spacing.BASE * 0.3,
  currentStepStrokeWidth: Spacing.BASE * 0.2,
  stepStrokeCurrentColor: Colors.PRIMARY,
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
  labelColor: "#000",
  labelSize: 13,
  currentStepLabelColor: "#fe7013"
};

const OrderDetails = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useGlobalState("token");
  const {order_trace} = navigation.state.params.order
  useEffect(() => {
    const getData = async () => {
      const {
        data
      } = await axios.get(`${Config.BASE_URL}customers/me/orders/items`, {
        headers: { Authorization: token }
      });
      console.log(data.data);
      setData(data.data);
    };
    getData();
  }, []);
  const [currentPosition, setCurrentPosition] = useState(1);
  const renderItemsList = () => {
    return (
      <VerticalList
        key={Math.random()}
        data={data}
        renderMenuItem={({ item }) => (
          <CartItem showButtons={false} item={item} navigation={navigation} />
        )}
      />
    );
  };
  return (
    <Block right padding={[Spacing.BASE * 0.5]}>
      <Text title bold>
        Shipping Details
      </Text>
      <Block
        row
        flex={1}
        padding={[
          Spacing.PADDING_15 * 0.5,
          0,
          Spacing.PADDING_15 * 0.5,
          Spacing.PADDING_15 * 0.5
        ]}
      >

        <Block flex={0.6} >
          <StepIndicator
            Style={{ backgroundColor: "green" }}
            stepCount={7}
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            direction="vertical"
          />
        </Block>
        <Block flex={0.4} ></Block>
      </Block>
      <Divider flex={false}/>
      <Block  flex={1.5}>
        <Text title bold>
          Order Items
        </Text>
        <ScrollView style={{padding: Spacing.BASE*.5}}>{renderItemsList()}</ScrollView>
      </Block>
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
