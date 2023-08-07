import { useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

function OrderModal({ visible, setVisible }) {
  const closeModal = () => {
    setVisible(!visible);
  };
  return (
    <Modal animationType="fade" visible={visible} transparent statusBarTranslucent>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          closeModal();
        }}
      >
        <View style={styles.modalBox}>
          <View style={styles.closeBox}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => {
                closeModal();
              }}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalBox: {
    width: "60%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "column",
  },
  closeBox: {
    width: "100%",
    height: "8%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  closeBtn: {
    width: "10%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
