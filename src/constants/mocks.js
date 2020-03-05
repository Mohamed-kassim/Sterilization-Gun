import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacing } from "_styles";
import { Colors } from "_styles";
import { t } from "_i18n";
const SignUpFields = [
  {
    id: "first_name",
    name: "First Name",
    icon: <Icon name="user" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "last_name",
    name: "Last Name",
    icon: <Icon name="user" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "password",
    name: "Password",
    icon: null
  },
  {
    id: "confirm_password",
    name: "Confirm Password",
    icon: null
  },
  {
    id: "phone",
    name: "Phone Number",
    icon: <Icon name="phone" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  }
];

const LoginFields = [
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE} />
  },
  {
    id: "password",
    name: "Password",
    icon: null
  }
];
const AddAddressFields = [
  {
    id: "street_address",
    name: "Street Address",
    icon: (
      <Icon name="address-card" size={Spacing.BASE} color={Colors.GRAY_DARK} />
    )
  },
  {
    id: "state",
    name: "State",
    icon: null
  },
  {
    id: "city",
    name: "City",
    icon: null
  },
  {
    id: "zip",
    name: "Zip",
    icon: null
  },
  {
    id: "nearest_landmark",
    name: "Nearest Landmark",
    icon: null
  }
];
const ResetFields = [
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE} />
  }
];
const SettingsButtons = [
  {
    id: "personal_details",
    name: "Personal Details",
    icon: <Icon name="user" size={Spacing.BASE} color={Colors.GRAY_DARK} />,
    nav: "PersonalSettings"
  },
  {
    id: "address",
    name: "Address",
    icon: (
      <Icon name="address-card" size={Spacing.BASE} color={Colors.GRAY_DARK} />
    ),
    nav: "AddAddress"
  },
  {
    id: "order_history",
    name: "Order History",
    icon: <Icon name="history" size={Spacing.BASE} color={Colors.GRAY_DARK} />,
    nav: "OrderHistory"
  }
];
const logout = {
  id: "logout",
  name: "Logout",
  icon: <Icon name="sign-out" size={Spacing.BASE} color={Colors.ERROR} />
};

export {
  SignUpFields,
  LoginFields,
  ResetFields,
  AddAddressFields,
  SettingsButtons,
  logout
};
