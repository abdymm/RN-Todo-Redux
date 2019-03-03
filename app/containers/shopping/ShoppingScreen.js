import React from "react";
import { View, StyleSheet } from "react-native";

import ShoppingCartIcon from "./ShoppingCartIcon";
import VisibleShopping from "./VisibleShopping";
import Products from "../../components/shopping/Products";

import { games } from "../../constants/Data";
import { ADD_TO_CART } from "../../actions/actionTypes";

export default class ShoppingScreen extends React.Component {
  static navigationOptions = {
    title: "Shop",
    headerRight: <ShoppingCartIcon />
  };

  render() {
    return (
      <View style={styles.container}>
        <VisibleShopping/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({ type: ADD_TO_CART, payload: product })
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
