import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: colors.gray,
            borderRadius: 30,
            marginTop: 5,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: colors.gray,
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={26} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rigtSearch}>
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  rigtSearch: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: colors.white,
    padding: 9,
    borderRadius: 30,
  },
});

export default SearchBar;
