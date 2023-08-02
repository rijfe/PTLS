import { View, StyleSheet, Text } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useRecoilValue } from "recoil";
import { getRole } from "../store/SetRole";
import ManagerScreen from "../components/ManagerScreen";
import OperatorScreen from "../components/OperatorScreen";

function MainPage() {
  const order = [
    {
      name: "kim",
      products: "many thing...",
      amount: 12,
      time: "2023-08-02",
    },
  ];

  const role = useRecoilValue(getRole);
  return role === "MANAGER" ? <ManagerScreen /> : <OperatorScreen order={order} />;
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
