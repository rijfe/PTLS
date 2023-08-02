import { View, StyleSheet, Text, FlatList } from "react-native";
import OrderList from "./OrderList";

function OperatorScreen({ order }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.nameBox}>
          <Text>NAME</Text>
        </View>
        <View style={styles.productBox}>
          <Text>PRODUCT</Text>
        </View>
        <View style={styles.timeAndamount}>
          <Text>TIME</Text>
        </View>
      </View>
      <FlatList
        data={order}
        renderItem={({ item }) => <OrderList name={item.name} product={item.products} amount={item.amount} time={item.time} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default OperatorScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: 40,
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
