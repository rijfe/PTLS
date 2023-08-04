import { useState } from "react";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useRecoilValue } from "recoil";
import { getRole } from "../store/SetRole";

import ManagerScreen from "../components/ManagerScreen";
import OperatorScreen from "../components/OperatorScreen";
import { View } from "react-native";

function MainPage({ items }) {
  const order = [
    {
      name: "kim",
      products: "many thing...",
      amount: 12,
      time: "2023-08-02",
    },
  ];

  const role = useRecoilValue(getRole);

  return <View>{role === "MANAGER" ? <ManagerScreen items={items} /> : <OperatorScreen order={order} />}</View>;
}

export default MainPage;

export const mainHeaderOptions = ({ navigation }) => {
  return {
    title: "PTLS",
    headerBackVisible: false,
    headerTintColor: "black",
    headerTitleStyle: {
      fontSize: 30,
    },
    headerTitleAlign: "center",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="logout"
          iconName={"ios-cart"}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
        <Item
          title="logout"
          iconName={"ios-log-out"}
          onPress={() => {
            navigation.pop();
          }}
        />
      </HeaderButtons>
    ),
  };
};
