import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function ItemList({ id, name, location, amount }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.idBox}>
        <Text>{id}</Text>
      </View>
      <View style={styles.nameBox}>
        <Text>{name}</Text>
      </View>
      <View style={styles.locationBox}>
        <Text>{location}</Text>
      </View>
      <View style={styles.amountBox}>
        <Text>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
  },
  idBox: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameBox: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  locationBox: {
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  amountBox: {
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
