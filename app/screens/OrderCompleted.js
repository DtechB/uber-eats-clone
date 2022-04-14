import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import AnimatedLottieView from "lottie-react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { db, query, orderBy, collection, getDocs, limit } from "../../firebase";
import MenuItem from "../components/MenuItems";

function OrderCompleted(props) {
  const [lastOrder, setLastOrder] = useState(null);
  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const fetchDataFromFirebase = async () => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setLastOrder(doc.data());
    });
  };

  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={{ margin: 10 }}>
        <AnimatedLottieView
          source={require("../assets/animations/check-mark.json")}
          style={{ alignSelf: "center", height: 100, marginBottom: 30 }}
          autoPlay
          loop={false}
          speed={0.5}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 20,
            justifyContent: "center",
            lineHeight: 25,
            marginHorizontal: 18,
          }}
        >
          Your order at {resturantName} has been placed for ${total} 🚀
        </Text>
        <MenuItem
          resturantName={lastOrder.resturantName}
          foods={lastOrder.items}
          hideCheckbox={false}
        />
        <AnimatedLottieView
          source={require("../assets/animations/cooking.json")}
          style={{ alignSelf: "center", height: 200 }}
          autoPlay
          speed={0.5}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default OrderCompleted;
