import { View, StyleSheet, Text } from "react-native";

function MainPage() {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
