import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function OrderList({ name, product, amount, time }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.nameBox}>
        <Text>{name}</Text>
      </View>
      <View style={styles.productBox}>
        <Text>{product}</Text>
      </View>
      <View style={styles.timeAndamount}>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OrderList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
  },
  nameBox: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productBox: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timeAndamount: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
