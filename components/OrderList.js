import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import OrderModal from "./OrderModal";

function OrderList({ name, product, products, time }) {
  const [visible, setVisible] = useState(false);
  console.log(products);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setVisible(!visible);
      }}
    >
      <View style={styles.nameBox}>
        <Text>{name}</Text>
      </View>
      <View style={styles.productBox}>
        <Text>{product.length > 18 ? product.slice(0, 17) + "..." : product.slice(0, 17)}</Text>
      </View>
      <View style={styles.timeAndamount}>
        <Text>{time}</Text>
      </View>
      <OrderModal visible={visible} setVisible={setVisible} id={name} products={products} time={time} />
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
