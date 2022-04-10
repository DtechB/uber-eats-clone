import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function ViewCart(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 360,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>View Cart</Text>
          {/* <Text style={styles.price}>$33.4</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginTop: 20,
    backgroundColor: colors.black,
    alignItems: "center",
    position: "relative",
    padding: 13,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
  },
  price: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 5,
  },
});

export default ViewCart;
