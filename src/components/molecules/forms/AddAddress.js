import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { Block, Divider, Text, Button } from "_atoms";
import { FieldInput, Logo } from "_molecules";
import { Spacing } from "_styles";
import { AddAddressFields } from "_mocks";
import { t } from "_i18n";
import { AddressMap } from "_molecules";
const { width, height } = Dimensions.get("window");
import Config from "react-native-config";
import { useGlobalState } from "_globalState";
import moment from "moment";
import axios from "axios";
const AddAddress = ({ save, skip, route }) => {
  const [street_address, setStreet_address] = useState("");
  const [state, setState] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [nearest_landmark, setNearest_landmark] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [data, setData] = useState({shipping_address:{
    geo_location:{
      lng:0, lat:0
    }
  }});
  const [token, setToken] = useGlobalState("token");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${Config.BASE_URL}customers/me/`, {
        headers: { Authorization: token }
      });
      console.log("request data is ", data.data);
      setData(data.data);
      const {
        city,
        street_address,
        state,
        zip,
        nearest_landmark,
      } = data.data.shipping_address;
      if (route === "Settings") {
        console.log('filling data', street_address)
        setStreet_address(street_address);
        setCity(city);
        setZip(zip);
        setState(state);
        setNearest_landmark(nearest_landmark);
      }
    };
    getData();
  }, []);
  const renderLogo = () => (
    <Block center middle>
      <Logo size={Spacing.BASE * 15} />
    </Block>
  );

  const setValue = (value, field) => {
    eval(`set${capitalizeFirstLetter(field)}('${value}')`);
  };
  const renderFields = () =>
    AddAddressFields.map(field => {
      const styles =
        field.id === "nearest_landmark" ? { height: Spacing.BASE * 6 } : null;
      return (
        <FieldInput
          key={field.id + field.name}
          errMsg={"Error in this field"}
          icon={field.icon}
          multiline={field.id === "nearest_landmark"}
          style={styles}
          value={eval(field.id)}
          onChangeText={text => setValue(text, field.id)}
          placeholder={t(`AddAddress.placeholders.${field.id}`)}
          label={t(`AddAddress.placeholders.${field.id}`)}
        />
      );
    });

  const renderButtons = () => (
    <Block center>
      <Button
        full
        color={"primary"}
        style={{ marginTop: Spacing.BASE * 2 }}
        onPress={() => {
          save({ street_address, state, city, zip, nearest_landmark });
        }}
      >
        <Text center bold>
          {" "}
          {t("AddAddress.buttons.save")}
        </Text>
      </Button>
      <Text
        center
        onPress={() => {
          skip();
        }}
      >
        {t("AddAddress.buttons.skip")}{" "}
      </Text>
    </Block>
  );
  console.log(data)
  const renderMap = () => <AddressMap geo_location={data.shipping_address.geo_location} route={route} />;
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <Block middle padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
        {renderLogo()}
        <Text center body>
          {t("AddAddress.welcome")} <Text bold>Mohamed Kassim</Text>
        </Text>
        <Divider width={"92%"} />
        {renderFields()}
        {renderMap()}
        {renderButtons()}
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default AddAddress;
