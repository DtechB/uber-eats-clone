import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { useSelector } from "react-redux";
import colors from "../config/colors";
import OrderItem from "./OrderItem";
import { db, addDoc, collection, serverTimestamp } from "../../firebase";
import AnimatedLottieView from "lottie-react-native";

function ViewCart({ navigation }) {
  const [modalVisibale, setModalVisibale] = useState(false);
  const [loading, setLoading] = useState(false);
  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const addOrderToFirebase = async () => {
    setLoading(true);
    const order = {
      items: items,
      total: total,
      resturantName: resturantName,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "orders"), order)
      .then(() => {
        setLoading(false);
        navigation.navigate("OrderCompleted");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisibale}
        transparent={true}
        onRequestClose={() => setModalVisibale(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.resturantName}>{resturantName}</Text>
            {items.map((item) => (
              <OrderItem key={item.name} item={item} />
            ))}
            <View style={styles.totalContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total</Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold" }}
              >{`$${total}`}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisibale(false);
                }}
              >
                <Text style={styles.text}>Checkout</Text>
                <Text style={styles.price}>{`$${total}`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {total ? (
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
            <TouchableOpacity
              style={styles.container}
              onPress={() => setModalVisibale(true)}
            >
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.price}>{`$${total}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.black,
            opacity: 0.6,
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 999,
          }}
        >
          <AnimatedLottieView
            source={require("../assets/animations/scanner.json")}
            style={{ height: 200, position: "absolute", top: 150 }}
            autoPlay
            speed={3}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginTop: 20,
    backgroundColor: colors.black,
    alignItems: "center",
    position: "relative",
    padding: 15,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
    marginRight: 20,
  },
  price: {
    color: colors.white,
    position: "absolute",
    right: 20,
    bottom: 18,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: colors.white,
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  resturantName: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default ViewCart;
