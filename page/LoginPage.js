import { useState, createRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { useRecoilState } from "recoil";
import { setRole } from "../store/SetRole";

function LoginPage({ navigation }) {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [idState, setIdState] = useState(true);
  const [pwdState, setPwdState] = useState(true);
  const [type, setType] = useRecoilState(setRole);
  const pwdInputRef = createRef();
  const idInputRef = createRef();
  const btnRef = createRef();

  const clear = () => {
    idInputRef.current.clear();
    pwdInputRef.current.clear();
    idInputRef.current.focus();
  };

  const SignInBtnClick = () => {
    if (!userId) {
      Alert.alert("Please enter an ID.");
      setIdState(false);
      idInputRef.current.focus();
      return;
    } else if (!userPwd) {
      Alert.alert("Please enter an PASSWORD.");
      setPwdState(false);
      pwdInputRef.current.clear();
      return;
    } else {
      fetch("http://172.17.130.7:8080/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          password: userPwd,
        }),
      }).then((reponse) => {
        if (reponse.status === 200) {
          reponse.json().then((re) => {
            setType(re.role);
          });
          clear();
          setUserId("");
          setUserPwd("");
          navigation.navigate("Main");
        } else {
          Alert.alert("Something Problem.");
          return;
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Pcik To Light System</Text>
        <TextInput
          style={idState ? styles.input : [styles.input, { borderColor: "red" }]}
          id="Id"
          placeholder="  ID"
          ref={idInputRef}
          onSubmitEditing={() => pwdInputRef.current && pwdInputRef.current.focus()}
          onChangeText={(id) => {
            setUserId(id);
            setIdState(true);
          }}
        />
        <TextInput
          style={pwdState ? styles.input : [styles.input, { borderColor: "red" }]}
          id="Pwd"
          placeholder="  PASSWORD"
          ref={pwdInputRef}
          onSubmitEditing={() => btnRef.current && btnRef.current.focus()}
          onChangeText={(pwd) => {
            setUserPwd(pwd);
            setPwdState(true);
          }}
        />
        <TouchableOpacity
          style={styles.loginbtn}
          onPress={() => {
            SignInBtnClick();
          }}
          ref={btnRef}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signuptext}>
          <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
          <Text
            style={{ backgroundColor: "#FFD65380" }}
            onPress={() => {
              navigation.navigate("SignUp");
              clear();
              setIdState(true);
              setPwdState(true);
            }}
          >
            {" "}
            You can Sign up!
          </Text>
        </View>
        <Text style={{ marginTop: 15 }}>@ HBU & TCU</Text>
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
    height: 350,
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
  signuptext: {
    width: "80%",
    height: 20,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};
