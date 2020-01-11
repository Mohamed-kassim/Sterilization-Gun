import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { Block, Divider, Text, Button } from "_atoms";
import { FieldInput, Logo } from "_molecules";
import { Spacing } from "_styles";
import { AddAddressFields } from "_mocks";
import { t } from "_i18n";
import {AddressMap} from "_molecules";
const { width, height } = Dimensions.get("window");
const AddAddress = ({ save, skip }) => {
  const [street_address, setStreet_address] = useState("");
  const [state, setState] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [nearest_landmark, setNearest_landmark] = useState("");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
      const styles = (field.id==='nearest_landmark')? {height: Spacing.BASE*6}: null
      return (
        <FieldInput
          key={field.id + field.name}
          errMsg={"Error in this field"}
          icon={field.icon}
          multiline={(field.id==='nearest_landmark')}
          style={styles}
          onChangeText={text => setValue(text, field.id)}
          placeholder={t(`AddAddress.placeholders.${field.id}`)}
          label={t(`AddAddress.placeholders.${field.id}`)}
        />
      );
    });

  const renderButtons = () => (
    <Block  center>
      <Button
        full
        color={"primary"}
        style={{ marginTop: Spacing.BASE * 2 }}
        onPress={() => {
            save({ street_address, state, city, zip, nearest_landmark});
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
            skip()
        }}
      >
        {t("AddAddress.buttons.skip")}{" "}
      </Text>
    </Block>
  );
const renderMap = ()=>  <AddressMap/>
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <Block middle padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
        {renderLogo()}
        <Text  center body>
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
