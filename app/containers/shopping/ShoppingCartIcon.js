import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "expo";

import { withNavigation } from 'react-navigation'

import { connect } from "react-redux";

const ShoppingCartIcon = props => (
  <View style={styles.container}>
    <View style={styles.cartCount}>
      <Text style={styles.cartCountText}>{props.cartItems.length}</Text>
    </View>
    <Icon.Ionicons onPress={() => props.navigation.navigate('Cart')} style={styles.cartIcon} size={26} name="ios-cart" />
  </View>
);

const mapStateToProps = state => {
  console.log("CartItems", state);
  return {
    cartItems: state.cartItem
  };
};

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cartIcon: {
    padding: 5,
    marginRight: 8
  },
  cartCount: {
    position: "absolute",
    zIndex: 2,
    opacity: 0.8,
    top: 0,
    right: 2,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: "#e74c3c"
  },
  cartCountText: {
    color: "#fff"
  }
});
