import React from "react";
import { View, StyleSheet } from "react-native";

import ShoppingCartIcon from "./ShoppingCartIcon";
import VisibleShopping from "./VisibleShopping";

export default class ShoppingScreen extends React.Component {
  static navigationOptions = {
    title: "Shop",
    headerRight: <ShoppingCartIcon />
  };

  render() {
    return (
      <View style={styles.container}>
        <VisibleShopping />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
