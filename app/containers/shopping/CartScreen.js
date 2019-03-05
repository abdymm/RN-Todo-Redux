import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Products from "../../components/shopping/Products";

import { connect } from "react-redux";
import { REMOVE_FROM_CART } from "../../actions/actionTypes";

class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.cartItems.length > 0 ? (
          <Products
            products={this.props.cartItems}
            onPress={this.props.remoteItemFromCart}
          />
        ) : (
          <Text>No items in your cart</Text>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("StateCart", state);
  return {
    cartItems: state.cartItem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remoteItemFromCart: product =>
      dispatch({ type: REMOVE_FROM_CART, payload: product })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
