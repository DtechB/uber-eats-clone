import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { cartAdded } from "../redux/reducers/cartReducer";
import colors from "../config/colors";

export const localRestaurants = [
  {
    name: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    name: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    name: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    name: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    name: "Lasagn",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    name: "Lasag",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    name: "Lasa",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

function MenuItem({ resturantName, foods, hideCheckbox = true, marginLeft }) {
  const dispatch = useDispatch();

  const selectedItem = (item, checkboxValue) => {
    dispatch({
      type: cartAdded,
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.name === food.name));
  };

  return (
    <>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.container}>
            {hideCheckbox && (
              <BouncyCheckbox
                iconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
                fillColor="green"
                onPress={(checkboxValue) => selectedItem(item, checkboxValue)}
                isChecked={isFoodInCart(item, cartItems)}
              />
            )}
            <ItemInfo
              title={item.name}
              description={item.description}
              price={item.price}
            />
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
        ItemSeparatorComponent={() => <Divider width={1} color={colors.gray} />}
      />
    </>
  );
}

const ItemInfo = ({ title, description, price }) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 18, fontWeight: "700" }}>{title}</Text>
    <Text style={{ fontSize: 15 }}>{description}</Text>
    <Text style={{ fontSize: 15, fontWeight: "700" }}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default MenuItem;
