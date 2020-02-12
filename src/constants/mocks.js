import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacing } from "_styles";
import { Colors } from "_styles";
import { t } from "_i18n";
const retailerData = [
  { id: "AMAZON_CA", name: "Amazon" },
  { id: "WALMART_CA ", name: "Walmart" },
  { id: "ALIEXPRESS", name: "AliExpress" }
];

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
const walmart = {
  error: false,
  data: {
    retailer_item_id:
      "https://www.walmart.ca/en/ip/george-mens-slim-fit-jeans-blue/6000196171271",
    title: "George Men's Slim Fit Jeans",
    price: 16.68,
    description:
      "• 99% Cotton, 1% Elastane| • Slim fit| • Slim hip and thigh| • Low rise| • Narrow Leg| • Stretchy| • Machine wash warm| • Use only non-chlorine bleach when needed| • Tumble dry medium| • Iron on high heat| • Do not dry clean",
    images: [
      `https://picsum.photos/id/866/1000/1000`,
      `https://picsum.photos/id/825/1000/1000`,
      `https://picsum.photos/id/810/1000/1000`,
      `https://picsum.photos/id/815/1000/1000`,
      `https://picsum.photos/id/510/1000/1000`,
      `https://picsum.photos/id/410/1000/1000`
    ],
    current_variant: {
      retailer_sku: "6000196171349"
    },
    other_variants: [
      {
        retailer_sku: "6000196171349",
        variant: ["Blue", "34x32"],
        specs: [
          "Jeans Wash: Medium Wash",

          "Size: 34x32",

          "Specialty Sizes: N/A",

          "Pant fit: Slim",

          "Gender: Male",

          "Walmart Exclusive: Yes",

          "Age group: Adult"
        ],

        features: [
          "99% Cotton, 1% Spandex",

          "5 Pockets",

          "Slim fit",

          "Enzyme bleach",

          "Slightly stretchy"
        ],

        images: [
          "https://i5.walmartimages.ca/images/Large/560/082/682186560082.jpg"
        ]
      }
    ],

    rating: 4.8,

    weight: 0.0,

    brand: "George",

    features: [
      "99% Cotton, 1% Spandex",

      "5 Pockets",

      "Slim fit",

      "Enzyme bleach",

      "Slightly stretchy"
    ],

    specs: [
      "Jeans Wash: Medium Wash",

      "Size: 34x32",

      "Specialty Sizes: N/A",

      "Pant fit: Slim",

      "Gender: Male",

      "Walmart Exclusive: Yes",

      "Age group: Adult"
    ]
  }
};
const amazonResponse = {
  error: false,
  data: {
    retailer_item_id: "B01N9YOF3R",
    title:
      "Apple iPhone 7, GSM Unlocked , 32GB - Rose Gold (Renewed)Apple iPhone 7, GSM Unlocked , 32GB - Rose Gold (Renewed)Apple iPhone 7, GSM Unlocked , 32GB - Rose Gold (Renewed)",
    price: 216.62,
    description: "<div>example desc</div>",
    images: [
      `https://picsum.photos/id/866/1000/1000`,
      `https://picsum.photos/id/825/1000/1000`,
      `https://picsum.photos/id/810/1000/1000`,
      `https://picsum.photos/id/815/1000/1000`,
      `https://picsum.photos/id/510/1000/1000`,
      `https://picsum.photos/id/410/1000/1000`
    ],
    current_variant: ["Color Name: Rose Gold", "Size: 32 GB"],
    other_variants: [
      {
        retailer_item_id: "B01MSEPCPU",
        variant: ["Color Name: Rose Gold", "Size: 128 GB"]
      },
      {
        retailer_item_id: "B01MSEPCPY",
        variant: ["Color Name: Black", "Size: 256 GB"]
      },
      {
        retailer_item_id: "B01N9YPFPG",
        variant: ["Color Name: Gold", "Size: 32 GB"]
      }
    ],
    rating: 3.7,
    weight: 0.22,
    brand: "Amazon Renewed",
    features: [
      'GSM Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL NOT WORK with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" for CDMA compatible iPhones).',
      "12MP iSight back camera takes 4K Video."
    ],
    specs: [
      "OS: ios",
      "RAM: 32 GB",
      "Item Weight: 417 g",
      "Product Dimensions: 13.8 x 0.7 x 6.7 cm",
      "Batteries:: 1 Lithium Polymer batteries required.",
      "Item model number: B01N9YOF3R",
      "Connectivity technologies: wi-fi, bluetooth",
      "Display resolution: 1334x750",
      "Device interface - primary: Touchscreen",
      "Other camera features: 12.0",
      "Form factor: touchscreen",
      "Weight: 417 grams",
      "Colour: Rose Gold",
      "Whats in the box: Mobile Device, Wall charger, Charging cable, Sim card removal tool",
      "Shipping Weight: 222 g",
      "Date First Available: Feb. 14 2017"
    ]
  }
};

const ordersHistory = [
  {
    "id":1234,
    "order_trace":{
      "100":{
        "status":"RECEIVED_IN_MAIN_HUB",
        "timestamp":566565
      },
      "200":{
        "status":"SHIPPED_TO_LIBYA",
        "timestamp":566565
      },
      "300":{
        "status":"RECEIVED_IN_LIBYA",
        "timestamp":null
      },
      "400":{
        "status":"RECEIVED_IN_LOCAL_HUB",
        "timestamp":null
      },
      "500":{
        "status":"OUT_FOR_DELIVERY",
        "timestamp":null
      },
      "600":{
        "status":"RETURNED_TO_LOCAL_HUB",
        "timestamp":null
      },
      "700":{
        "status":"DELIVERED",
        "timestamp":null
      }
    },
    "order_number":"num1234",
    "order_date":"123648521",
    "eta":"213165415",
    "delivery_date":"213165415",
    "shipment_method":"SEA",
    "additional_charges":10,
    "admin_notes":"Over Weight +1kg",
    "total_amount":150
  },
  {
    "id":12345,
    "order_trace":{
      "100":{
        "status":"RECEIVED_IN_MAIN_HUB",
        "timestamp":566565
      },
      "200":{
        "status":"SHIPPED_TO_LIBYA",
        "timestamp":566565
      },
      "300":{
        "status":"RECEIVED_IN_LIBYA",
        "timestamp":null
      },
      "400":{
        "status":"RECEIVED_IN_LOCAL_HUB",
        "timestamp":null
      },
      "500":{
        "status":"OUT_FOR_DELIVERY",
        "timestamp":null
      },
      "600":{
        "status":"RETURNED_TO_LOCAL_HUB",
        "timestamp":null
      },
      "700":{
        "status":"DELIVERED",
        "timestamp":null
      }
    },
    "order_number":"num1234",
    "order_date":"123648521",
    "eta":"213165415",
    "delivery_date":"213165415",
    "shipment_method":"SEA",
    "additional_charges":10,
    "admin_notes":"Over Weight +1kg",
    "total_amount":150
  },


]
export {
  retailerData,
  SignUpFields,
  LoginFields,
  ResetFields,
  AddAddressFields,
  SettingsButtons,
  logout,
  amazonResponse,
  walmart,
  ordersHistory
};
