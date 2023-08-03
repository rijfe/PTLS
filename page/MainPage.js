import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useRecoilValue } from "recoil";
import { getRole } from "../store/SetRole";
import { getToken } from "../store/SetToken";

import ManagerScreen from "../components/ManagerScreen";
import OperatorScreen from "../components/OperatorScreen";

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

  // if (role === "MANAGER") {
  //   fetch("http://172.17.130.7:8080/user/manager/products", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   }).then((result) => {
  //     result.json().then((re) => {
  //       items = re;
  //       // console.log(items);
  //     });
  //   });
  // }

  return role === "MANAGER" ? <ManagerScreen items={items} /> : <OperatorScreen order={order} />;
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

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
          iconName={"ios-log-out"}
          onPress={() => {
            navigation.pop();
          }}
        />
      </HeaderButtons>
    ),
  };
};
