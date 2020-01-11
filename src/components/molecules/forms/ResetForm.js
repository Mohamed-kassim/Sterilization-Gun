import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { Block, Divider, Text, Button } from "_atoms";
import { FieldInput, Logo } from "_molecules";
import { Spacing } from "_styles";
import { ResetFields } from "_mocks";
import { t } from "_i18n";
const { width, height } = Dimensions.get("window");
const ResetForm = ({ submit, login }) => {
  const [email, setEmail] = useState("");
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
  ResetFields.map(field => {
      return (
        <FieldInput
          key={field.id + field.name}
          errMsg={"Error in this field"}
          icon={field.icon}
          onChangeText={text => setValue(text, field.id)}
          placeholder={t(`ResetForm.placeholders.${field.id}`)}
          label={t(`ResetForm.placeholders.${field.id}`)}
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
            submit({ email});
        }}
      >
        <Text center bold>
          {" "}
          {t("ResetForm.buttons.reset")}
        </Text>
      </Button>
      <Text
        center
        onPress={() => {
            login()
        }}
      >
        {t("ResetForm.buttons.login")}{" "}
        <Text bold primary>
          {t("ResetForm.buttons.clickable-login")}
        </Text>
      </Text>
    </Block>
  );

  return (
    <KeyboardAwareScrollView>
      <Block middle padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
        {renderLogo()}
        <Text center body>
          {t("ResetForm.welcome")}
        </Text>
        <Divider width={"92%"} />
        {renderFields()}
        {renderButtons()}
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default ResetForm;
