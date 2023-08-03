import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { getRole } from "../store/SetRole";
import { getToken } from "../store/SetToken";
import MainPage from "../page/MainPage";

function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const [items, setItemsList] = useState([]);

  const role = useRecoilValue(getRole);
  const token = useRecoilValue(getToken);

  const getItem = async () => {
    if (role === "MANAGER") {
      await fetch("http://172.17.130.7:8080/user/manager/products", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((result) => {
        result.json().then((re) => {
          setItemsList(re);
          console.log(items);
          setLoading(true);
        });
      });
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  return loading ? <MainPage items={items} /> : <View style={styles.container}></View>;
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
