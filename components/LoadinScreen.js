import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { useIsFocused } from "@react-navigation/native";

import { getRole } from "../store/SetRole";
import { getToken } from "../store/SetToken";
import MainPage from "../page/MainPage";

function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const [items, setItemsList] = useState([]);

  const role = useRecoilValue(getRole);
  const token = useRecoilValue(getToken);

  const isFocused = useIsFocused();

  const getItem = async () => {
    if (role === "MANAGER") {
      await fetch("http://10.20.72.30:8000/user/manager/products", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((result) => {
          result.json().then((re) => {
            setItemsList(re);
            setLoading(true);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    getItem();
  }, [isFocused]);
  return loading ? <MainPage items={items} /> : <View style={styles.container}></View>;
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
