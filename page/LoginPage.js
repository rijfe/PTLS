import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Pcik To Light System</Text>
        <TextInput style={styles.input} id="Id" placeholder="  ID" />
        <TextInput style={styles.input} id="Pwd" placeholder="  PASSWORD" />
        <TouchableOpacity
          style={styles.loginbtn}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>@ HBU & TCU</Text>
      </View>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  loginbtn: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006AD5",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 40,
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};
